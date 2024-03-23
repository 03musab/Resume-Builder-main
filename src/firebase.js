// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR7g-75wbSwmdzhHMk7F2i-D4WVlTH9eY",
  authDomain: "ai-resumebuilder.firebaseapp.com",
  projectId: "ai-resumebuilder",
  storageBucket: "ai-resumebuilder.appspot.com",
  messagingSenderId: "587310461669",
  appId: "1:587310461669:web:c6bf9fec008ac0ad88da0c",
  measurementId: "G-0XY1G3YE11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);