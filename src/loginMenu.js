import React from 'react';
import './loginMenu.css';


function Login() {
  return (
    <div >

    <div className = "startBackground">

    <img className="login" src={require('./loginpage.png')} />
    
    <input className="loginName" type="text" placeholder="Name"></input>
    <input className="loginPassword" type="text" placeholder="Password"></input>

   

    </div >

    </div>
  );
}



export default Login;
