import "dotenv/config"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "proyecto-react-78e62.firebaseapp.com",
  projectId: "proyecto-react-78e62",
  storageBucket: "proyecto-react-78e62.appspot.com",
  messagingSenderId: "76296676934",
  appId: "1:76296676934:web:27d0b5b0174a940bb14c47",
  measurementId: "G-HBKLH88Y8D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);