// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSsj4kk2tetK-fXgnxsAwykxIHv0xZg14",
  authDomain: "flixminglegpt.firebaseapp.com",
  projectId: "flixminglegpt",
  storageBucket: "flixminglegpt.appspot.com",
  messagingSenderId: "777423849794",
  appId: "1:777423849794:web:c7930f6dc7bc53a5d9e0db",
  measurementId: "G-HLRM3YKD82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();