import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCx48e1kYGNT3itcOO_p-wv57xEtFSjArM",
  authDomain: "amazoon-10d67.firebaseapp.com",
  projectId: "amazoon-10d67",
  storageBucket: "amozoon-10d67.firebasestorage.app",
  messagingSenderId: "740588146259",
  appId: "1:740588146259:web:c4ab781ddd374b62e1c0a6",
  measurementId: "G-MENJKHS7Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}