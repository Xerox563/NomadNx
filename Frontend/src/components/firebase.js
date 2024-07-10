// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA2NRoqZAI7PGAPK_Tnk6xvu1aWEdk2sqI",
  authDomain: "nomadauth-8b071.firebaseapp.com",
  projectId: "nomadauth-8b071",
  storageBucket: "nomadauth-8b071.appspot.com",
  messagingSenderId: "393209258047",
  appId: "1:393209258047:web:99744a2d349bfb8ef6d88a",
  measurementId: "G-4F5H2BFC5H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
