import "./App.css";
import React, { useEffect, useState } from "react";
import UserAuth from "./components/UserAuth";
import { auth } from "./components/firebase";
import Home from "./components/Home";
// import GoogleAuth from "./components/googleAuth";

function App() {
  const [presentData, setPresentData] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        setPresentData({
          email: user.email,
          uid: user.uid
        });
      }
      else{
        setPresentData(null)
      }
     
    });
  }, []);
  return (
    <>
    <div>
       <center>{presentData ? <Home /> : <UserAuth />}</center>
   
    </div>

      
    </>
  );
}

export default App;
