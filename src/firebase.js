// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDMyzMhJ2pnZCyMjcdi2ugCD5XHWS_jDI",
  authDomain: "loginregistrationpage-ce6d2.firebaseapp.com",
  projectId: "loginregistrationpage-ce6d2",
  storageBucket: "loginregistrationpage-ce6d2.firebasestorage.app",
  messagingSenderId: "1042542803312",
  appId: "1:1042542803312:web:28f8d1042422e0677af7b5",
  measurementId: "G-3LSSFZP11F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
