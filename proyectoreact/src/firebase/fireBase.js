// import "dotenv/config";
// import { initializeApp } from "firebase/app";



// const firebaseConfig = {
//   // apiKey: "AIzaSyBr1_5tleE6XLP8Kr8KiMtfilB7BlwpwFU",
//   apiKey: process.env.API_KEY,
//   authDomain: "proyecto-react-78e62.firebaseapp.com",
//   projectId: "proyecto-react-78e62",
//   storageBucket: "proyecto-react-78e62.appspot.com",
//   messagingSenderId: "76296676934",
//   appId: "1:76296676934:web:27d0b5b0174a940bb14c47",
//   measurementId: "G-HBKLH88Y8D"
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "proyecto-react-78e62.firebaseapp.com",
  projectId: "proyecto-react-78e62",
  storageBucket: "proyecto-react-78e62.appspot.com",
  messagingSenderId: "76296676934",
  appId: "1:76296676934:web:27d0b5b0174a940bb14c47",
  measurementId: "G-HBKLH88Y8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
