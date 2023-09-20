// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPd5LYgrpMpfB4Y6LxhiWPUMucIOmD1dU",
  authDomain: "makotis-kitchen.firebaseapp.com",
  projectId: "makotis-kitchen",
  storageBucket: "makotis-kitchen.appspot.com",
  messagingSenderId: "420637316552",
  appId: "1:420637316552:web:0fd55b0de1b959c88b1cfd",
  measurementId: "G-3E05RR23MF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
