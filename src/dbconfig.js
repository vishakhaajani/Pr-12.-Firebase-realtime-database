// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3cywEBNhyyvZzYGBTT8ulZC_pUCGgWG4",
  authDomain: "realtime-db-contect-page.firebaseapp.com",
  projectId: "realtime-db-contect-page",
  storageBucket: "realtime-db-contect-page.appspot.com",
  messagingSenderId: "336915446191",
  appId: "1:336915446191:web:0fb6fdd55adb4732bf175a",
  measurementId: "G-69ZJ6WQ88Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app