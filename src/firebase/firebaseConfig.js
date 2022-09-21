// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2QU_S5sxb53lYX4o-EFh39-pJrYR8Xu0",
  authDomain: "rjs-cc.firebaseapp.com",
  projectId: "rjs-cc",
  storageBucket: "rjs-cc.appspot.com",
  messagingSenderId: "1069292192660",
  appId: "1:1069292192660:web:f3a5bad1f274ad11c14581"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)