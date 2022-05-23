// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwKMzxNRIXVU5ck4l8UoRJSEAyHqT0brM",
  authDomain: "electric-tools-b95b4.firebaseapp.com",
  projectId: "electric-tools-b95b4",
  storageBucket: "electric-tools-b95b4.appspot.com",
  messagingSenderId: "417686363881",
  appId: "1:417686363881:web:a34a585680c4bf07d09a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const auth = getAuth(app)
export default auth; 