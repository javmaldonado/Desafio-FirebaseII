// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbqe8ng3ok4-B4BiM6wMtSuHm4FZOcsvw",
  authDomain: "desafio-firebaseii-f2d65.firebaseapp.com",
  projectId: "desafio-firebaseii-f2d65",
  storageBucket: "desafio-firebaseii-f2d65.appspot.com",
  messagingSenderId: "51174847374",
  appId: "1:51174847374:web:07134159976e7675486adf"
};

export const app = initializeApp(firebaseConfig);
export default app;

/* Métodos de firebase Auth */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


// Initialize Firebase
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
