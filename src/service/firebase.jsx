// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "coder-89745-crojas.firebaseapp.com",
  projectId: "coder-89745-crojas",
  storageBucket: "coder-89745-crojas.firebasestorage.app",
  messagingSenderId: "653318393908",
  appId: "1:653318393908:web:000583588a098332c97a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);