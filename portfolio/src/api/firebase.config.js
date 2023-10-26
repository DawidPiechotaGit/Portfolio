// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACiFcXDdFIggMT54l8lIZNITM48_WZm6k",
  authDomain: "portfolio-a32fa.firebaseapp.com",
  projectId: "portfolio-a32fa",
  storageBucket: "portfolio-a32fa.appspot.com",
  messagingSenderId: "835306826400",
  appId: "1:835306826400:web:3f8d2f1a6f7401d4f1b7c5",
  measurementId: "G-G7HHT4N5RE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
