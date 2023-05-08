// Import the functions you need from the SDKs you need
import * as firebase from "./firebase/app";
import "./firebase/auth";
import { getAuth, GoogleAuthProvider } from "./firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyBuEw6FjwPMwk8lldewhq496t30IqQS8n0",
  authDomain: "vmeet-ae2d5.firebaseapp.com",
  projectId: "vmeet-ae2d5",
  storageBucket: "vmeet-ae2d5.appspot.com",
  messagingSenderId: "931763717210",
  appId: "1:931763717210:web:d6a4488996ef7ae1d88463"
});

// // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app