import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// import dotenv from "dotenv";

// dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyCPd5LYgrpMpfB4Y6LxhiWPUMucIOmD1dU",
  authDomain: "makotis-kitchen.firebaseapp.com",
  projectId: "makotis-kitchen",
  storageBucket: "makotis-kitchen.appspot.com",
  messagingSenderId: "420637316552",
  appId: "1:420637316552:web:0fd55b0de1b959c88b1cfd",
  measurementId: "G-3E05RR23MF",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAdosXJcZ4_KJwq4NU6tZQaQDOgCxS_DPU",
//   authDomain: "test-app-c2bdb.firebaseapp.com",
//   projectId: "test-app-c2bdb",
//   storageBucket: "test-app-c2bdb.appspot.com",
//   messagingSenderId: "651064281787",
//   appId: "1:651064281787:web:0ef82aec032f6875a1f79e",
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const Auth = firebase.auth();
const storage = firebase.storage();

export { firestore, Auth, storage };
