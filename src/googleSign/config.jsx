
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXBtmuOSEGIJK9eS6BrWx_UTLG2fT0BYE",
  authDomain: "e-5556e.firebaseapp.com",
  projectId: "e-5556e",
  storageBucket: "e-5556e.firebasestorage.app",
  messagingSenderId: "883959605635",
  appId: "1:883959605635:web:f1caaf96c149c08b732eb6",
  measurementId: "G-8VVHFN892L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
