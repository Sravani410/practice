// Import the functions you  need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
// import '@firebase/firestore'
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBmMNtkxLi_-tiwLJgAywJYNM-u6dPF-Wo",
  authDomain: "auth-5d388.firebaseapp.com",
  projectId: "auth-5d388",
  storageBucket: "auth-5d388.appspot.com",
  messagingSenderId: "700264615182",
  appId: "1:700264615182:web:20694bf4d0dde351d2db5f"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
