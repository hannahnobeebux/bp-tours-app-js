// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-DRB0bt0Rg2H1x5JZvDOUiEdD8TxShqA",
  authDomain: "bp-tours-a1ba4.firebaseapp.com",
  projectId: "bp-tours-a1ba4",
  storageBucket: "bp-tours-a1ba4.firebasestorage.app",
  messagingSenderId: "383952748078",
  appId: "1:383952748078:web:247613f8296d6da0e529bf",
  measurementId: "G-EBFHV6F85E"
};

// Prevent Firebase from being initialized multiple times
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
