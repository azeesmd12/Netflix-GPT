// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Zomre-Yc9Iq9r2hSPe-WAs9WHymYysc",
  authDomain: "netflixgpt-c71e6.firebaseapp.com",
  projectId: "netflixgpt-c71e6",
  storageBucket: "netflixgpt-c71e6.firebasestorage.app",
  messagingSenderId: "1071756121034",
  appId: "1:1071756121034:web:5696131468c7d1657fb533",
  measurementId: "G-YXK0MNKH0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
