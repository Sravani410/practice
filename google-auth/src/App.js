import "./App.css";
import React, { useEffect, useState } from "react";
import UserAuth from "./UserAuth";
import { auth } from "./firebase";
import Home from "./Home";
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
      <center>{presentData ? <Home /> : <UserAuth />}</center>
    </>
  );
}

export default App;
