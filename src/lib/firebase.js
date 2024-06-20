// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e4293.firebaseapp.com",
  projectId: "reactchat-e4293",
  storageBucket: "reactchat-e4293.appspot.com",
  messagingSenderId: "493401754081",
  appId: "1:493401754081:web:525855b5975d6394abeaa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()