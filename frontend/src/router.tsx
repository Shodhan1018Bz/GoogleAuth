import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoogleAuth from "./googleauth"
import User from "./userDetails";
export default function Router(props:any){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<GoogleAuth login={props.login} setLogin={props.setLogin}/>}/>
                    <Route path="/users" element={<User login={props.login}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}