import { getAuth, onAuthStateChanged } from "firebase/auth";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChgkggSCE2qMu42v7LGIrWB1zE5BVVPH0",
  authDomain: "crud-react-9f056.firebaseapp.com",
  projectId: "crud-react-9f056",
  storageBucket: "crud-react-9f056.appspot.com",
  messagingSenderId: "586312413671",
  appId: "1:586312413671:web:6b0a76c8d083a063ec0d42"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export default auth;