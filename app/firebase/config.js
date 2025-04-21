// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnOB-cE1BXL5pWxQ3l2v501h6gRC4kREs",
  authDomain: "tesla-romancastro.firebaseapp.com",
  projectId: "tesla-romancastro",
  storageBucket: "tesla-romancastro.firebasestorage.app",
  messagingSenderId: "438479343417",
  appId: "1:438479343417:web:af6d2cd621e1e5234062e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);