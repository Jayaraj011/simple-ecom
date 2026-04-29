import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged} from "firebase/auth"
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

const user = () => {
  const[users,setUsers]=useState()
  useEffect(()=>{
    let x=onAuthStateChanged(auth,u=>setUsers(u))
    return x
  })
  return users
 
}
export default user;
