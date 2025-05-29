import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIeJ7Z5IJChaX0S5gta0cPqiC5KSh1qOk",
  authDomain: "catchthefake.firebaseapp.com",
  projectId: "catchthefake",
  storageBucket: "catchthefake.firebasestorage.app",
  messagingSenderId: "64219568628",
  appId: "1:64219568628:web:d0a1f2022598de493081a1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
