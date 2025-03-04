import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// 🔹 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB3WK9PQcA1ZB4o1zkXDTST7tlZN9bon4A",
  authDomain: "estate-agency-2a81a.firebaseapp.com",
  projectId: "estate-agency-2a81a",
  storageBucket: "estate-agency-2a81a.firebasestorage.app",
  messagingSenderId: "204615365153",
  appId: "1:204615365153:web:e03225e2a17b9c5d67a960",
  measurementId: "G-D8L3QQ7V37",
};

// 🔹 Firebase Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 Providers
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

export { auth, googleProvider, appleProvider, signInWithPopup };
