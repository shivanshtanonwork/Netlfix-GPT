// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHkaqDD1B434buqgpflDAfeXRRfi_cAD8",
  authDomain: "netflixgpt-7e4a9.firebaseapp.com",
  projectId: "netflixgpt-7e4a9",
  storageBucket: "netflixgpt-7e4a9.firebasestorage.app",
  messagingSenderId: "515004409859",
  appId: "1:515004409859:web:9ee4a230278009bf800636",
  measurementId: "G-J390SF1BX0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
