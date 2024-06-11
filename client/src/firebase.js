// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-cf234.firebaseapp.com",
  projectId: "mern-estate-cf234",
  storageBucket: "mern-estate-cf234.appspot.com",
  messagingSenderId: "958802812558",
  appId: "1:958802812558:web:09496b62105bba019473df"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);