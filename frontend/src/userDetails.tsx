import axios from "axios";
import React from "react";
import {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import UserTable from "./Component/userTable";
export default function User(props:any){
    const navigate=useNavigate();
    if(props.login==0){
        navigate("/");
        return(<h1></h1>);
    }
    const [userDetails,setUserDetails]=useState<any>();
    useEffect(()=>{
        axios.get("http://localhost:3000",{
            headers:{token:localStorage.getItem("token")}
        })
        .then(res=>{
           setUserDetails(res.data);
        })
        .catch(err=>{
            navigate("/");
        })
    },[])
    return(
        <div className=" d-flex justify-content-center ">
            <div  className="w-50">
                <UserTable userDetails={userDetails}/>
            </div>
        </div>
    );
}