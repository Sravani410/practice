import React from "react";
import firebase from 'firebase/compat/app';
import { auth } from "./firebase";

const GoogleAuth=()=>{
    const signInWithGoogle=async()=>{
        try{
            var provider = new firebase.auth.GoogleAuthProvider();
          await auth.signInWithPopup(provider)
        }
        catch(err){
            console.log("err",err)
        }
    }
    return (
        <>
         <center>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
           
         </center>
        </>
    )
}

export default GoogleAuth