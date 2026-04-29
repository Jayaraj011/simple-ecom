
import { useState } from "react"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
      const[pswd,Setpswd]=useState()
      const[cpswd,Setcpswd]=useState()
      const navigate=useNavigate()
      
      const changename=(e)=>{
        setName(e.target.value)
      }
      const changeemail=(e)=>{
       setEmail(e.target.value)
      }
      const changepass=(e)=>{
       Setpswd(e.target.value)
      }
      const changeconfirmpass=(e)=>{
       Setcpswd(e.target.value)
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

const auth=getAuth()
const filesub=(e)=>{
    e.preventDefault()
    const obj={email:email,password:pswd}
    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then(()=>{
        console.log("Register successfully")
        navigate('/')
    })
    .catch(()=>{
        console.log("Error")
    })
}
    return (
        <div className="container pt-3" style={{width:"500px"}}>
            <div className="card">
                <div className="card-title text-center"><h1>REGISTER PAGE</h1></div>
                <div className="card-body">
                    <form onSubmit={filesub}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">NAME</label>
                            <input type="text" value={name} onChange={changename} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" value={email} onChange={changeemail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" value={pswd} onChange={changepass} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Confirm password</label>
                            <input type="password" value={cpswd} onChange={changeconfirmpass} class="form-control" id="exampleInputPassword1" />
                        </div>
                         <p>Do you have already account?<Link to={"/"}>Login</Link></p>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;