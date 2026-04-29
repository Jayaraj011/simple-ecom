import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Link, useNavigate } from 'react-router-dom';
import Register from './Register';
const Login = () => {
  const[email,setEmail]=useState()
  const[pswd,Setpswd]=useState()
 
  const navigate=useNavigate()
  const changeemail=(e)=>{
   setEmail(e.target.value)
  }
  const changepass=(e)=>{
   Setpswd(e.target.value)
  }
 
  const firebaseConfig = {
    apiKey: "AIzaSyBrP5y29SZ_U7gwq0esOx-b0J0TQy2-3V0",
    authDomain: "ecom-96935.firebaseapp.com",
    projectId: "ecom-96935",
    storageBucket: "ecom-96935.firebasestorage.app",
    messagingSenderId: "427759044900",
    appId: "1:427759044900:web:32b5690a2e38228509cbb1",
    measurementId: "G-V1L738LXPL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const filesub=(e)=>{
 e.preventDefault()
 let auth=getAuth()
 let obj={email:email,password:pswd}
 signInWithEmailAndPassword(auth,obj.email,obj.password)
 .then(()=>{
  alert("Login successfully")
  navigate("/home")
 })
}
  return (
    <div className='container mt-5' style={{width:"500px"}}>
      <div className='card'>
        <div className='card-title text-center'><h1>Login Page</h1></div>
        <div className='card-body'>
           <form onSubmit={filesub}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" value={email} onChange={changeemail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" value={pswd} onChange={changepass} class="form-control" id="exampleInputPassword1" />
  </div>
   <p>Dont have account please register?<Link to={"/Register"}>Register</Link></p>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
        </div>
      </div>
    </div>
  )
}
export default Login;
