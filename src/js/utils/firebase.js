// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqyq7HLfFT6fJCqszyr3CfcX-rxMepU4A",
  authDomain: "story-app-c77a1.firebaseapp.com",
  projectId: "story-app-c77a1",
  storageBucket: "story-app-c77a1.appspot.com",
  messagingSenderId: "123278787704",
  appId: "1:123278787704:web:30f6b38c8173827fdd198d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export { app};