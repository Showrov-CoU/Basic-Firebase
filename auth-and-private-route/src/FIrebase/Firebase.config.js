// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdkmf3mZyHtXJGbm6FLFvL8uuf_uuP-bo",
  authDomain: "auth-and-private-route-efc57.firebaseapp.com",
  projectId: "auth-and-private-route-efc57",
  storageBucket: "auth-and-private-route-efc57.appspot.com",
  messagingSenderId: "1081673169126",
  appId: "1:1081673169126:web:bf3c3379bb2546bb86e327",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
