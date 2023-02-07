import React from "react";
import { auth } from "./firebase";


const Home=()=>{
    return (
        <div>
          <h1>Welcome to Auth using Firebase</h1>
          <button onClick={()=>auth.signOut()}>Sign out</button>
        </div>
    )
}

export default Home