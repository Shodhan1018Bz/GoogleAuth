import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CLIENT_ID="497231389779-dlf46tk6chkjll1h239hr60sq71vqbcf.apps.googleusercontent.com";

function GoogleAuth(props:any){
    const navigate=useNavigate(); 
   
    return (
        <div>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin
            onSuccess={credentialResponse => {
                axios.post('http://localhost:3000/login',
                    credentialResponse
                ).then(res=>{
                    // console.log(res.data);
                    
                    localStorage.setItem("token",res.data.token);
                    props.setLogin(1);
                    navigate("/users");
                })
                // console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
            />
        </GoogleOAuthProvider>
        
        </div>
    )
}
export default GoogleAuth;