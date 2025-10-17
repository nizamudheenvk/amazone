import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_FROM_FIREBASE",
  authDomain: "amazoon-19d67.firebaseapp.com",
  projectId: "amazoon-19d67",
  storageBucket: "amazoon-19d67.appspot.com",
  messagingSenderId: "740588146259", // example
  appId: "YOUR_APP_ID_FROM_FIREBASE",
  measurementId: "YOUR_MEASUREMENT_ID_FROM_FIREBASE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
