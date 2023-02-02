import { useState } from 'react'
import GoogleAuth from './googleauth'
import './App.css'
import Router from './router';
import NavBar from './Component/navbar';
import {BrowserRouter} from 'react-router-dom';
function App() {
  const [login,setLogin]=useState(0);
  function updateLogin(newvalue:any){
    setLogin(newvalue)
  }
  return (
    <div className=''>
      {/* <BrowserRouter> */}

      <NavBar login={login}  setLogin={setLogin} />
      <Router login={login} setLogin={setLogin}/>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
