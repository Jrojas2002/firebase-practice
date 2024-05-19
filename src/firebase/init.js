// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { get } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOHpUR4wlOlrDcCiA95q_VILITn12ZQG0",
  authDomain: "starter-337d0.firebaseapp.com",
  projectId: "starter-337d0",
  storageBucket: "starter-337d0.appspot.com",
  messagingSenderId: "1000266178667",
  appId: "1:1000266178667:web:7629b522e9a2194904112e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();