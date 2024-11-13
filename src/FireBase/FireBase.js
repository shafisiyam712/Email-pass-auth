// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIodcKRRnACRSngd4zgpIgEIkEnBG7JFU",
  authDomain: "email-pass-auth-c1195.firebaseapp.com",
  projectId: "email-pass-auth-c1195",
  storageBucket: "email-pass-auth-c1195.firebasestorage.app",
  messagingSenderId: "787767112933",
  appId: "1:787767112933:web:2c5069f7f8ddafd392500c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);