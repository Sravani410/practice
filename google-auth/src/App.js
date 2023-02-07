import "./App.css";
import React,{useEffect} from "react"
import UserAuth from "./UserAuth";
import { auth } from "./firebase";


function App() {
  useEffect(()=>{
   auth.onAuthStateChanged(user=>{
    console.log("userrrrrr",user)
    console.log({
      email:user.email,
      uid:user.uid
     })
   },[])
 
  })
  return (
    <>
     <UserAuth/>
    </>
  );
}

export default App;
