// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz6iIpIBk9MTQifYwVFZDPcrbq277edIc",
  authDomain: "login-form-with-auth.firebaseapp.com",
  projectId: "login-form-with-auth",
  storageBucket: "login-form-with-auth.appspot.com",
  messagingSenderId: "340690856716",
  appId: "1:340690856716:web:c9a1020db25001b23bf729",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
