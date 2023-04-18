// Import the functions you need from the SDKs you need
// eslint-disable-next-line
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqKb5MHC0-e73n4PV0CxIqdvef1BBRPUE",
  authDomain: "react-firebase-auth-9dd3e.firebaseapp.com",
  projectId: "react-firebase-auth-9dd3e",
  storageBucket: "react-firebase-auth-9dd3e.appspot.com",
  messagingSenderId: "291585760116",
  appId: "1:291585760116:web:d64af4137583390d9b6a21"
};

// Initialize Firebase
// eslint-disable-next-line
const app =firebase. initializeApp(firebaseConfig);
export const db=app.firestore()
export default app