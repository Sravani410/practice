
import React,{useState }from "react";
import { auth } from "./firebase";
import GoogleAuth from "./googleAuth";


const UserAuth=()=>{
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const {email,password}=data;
    const handleChange=e=>{
        // setDate is for update the value and in that object destructued previous data first and reassigned the values based on the name
        setData({...data,[e.target.name]:e.target.value})
    }
    const signUp=(e)=>{
       e.preventDefault()
       auth.createUserWithEmailAndPassword(email,password).then(user=>console.log(user)).catch(err=>console.log(err))
    }
    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(user=>console.log(user)).catch(err=>console.log(err))
     }
    return (
        <div>
            <center>
                {/* autoComplete should be used for when we enter the email it will ask the suggestions */}
                <form autoComplete="off">
                    <h1>Authentication</h1>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} /><br/>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} /><br/>
                    <button onClick={signIn}>Sign In</button> &nbsp; &nbsp;
                    <button onClick={signUp}>Sign Up</button>
                </form>
            </center>
            <GoogleAuth/>
        </div>
    )
}

export default UserAuth