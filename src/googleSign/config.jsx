// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCx48e1kYGNT3itcOO_p-wv57xEtFSjArM",
//   authDomain: "amazoon-19d67.firebaseapp.com",
//   projectId: "amazoon-19d67",
//   storageBucket: "amazoon-19d67.appspot.com",
//   messagingSenderId: "740588146259", // example
//   appId: "1:740588146259:web:abcdef123456",
//   measurementId: "G-MENJKHS7Z1"
// };

// const app = initializeApp(firebaseConfig);

// export { auth, provider };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
