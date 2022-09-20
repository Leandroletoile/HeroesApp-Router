import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// import dotenv from 'dotenv'
// import { getEnvironment } from "../auth/helpers/getEnvironment";

// dotenv.config()

// const {
//   VITE_APIKEY,
//   VITE_AUTHDOMAIN,
//   VITE_PROJECTID,
//   VITE_STORAGEBUCKET,
//   VITE_MESSAGINGSENDERID,
//   VITE_APPID,
// } = getEnvironment();


// const firebaseConfig = {
//   apiKey: "AIzaSyCjuQZxwnox1MvE8QymzJvVvbdZoUjt3To",
//   authDomain: "heroesapp-834d0.firebaseapp.com",
//   projectId: "heroesapp-834d0",
//   storageBucket: "heroesapp-834d0.appspot.com",
//   messagingSenderId: "1081489228811",
//   appId: "1:1081489228811:web:d226b73beb33308ad2f30e"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINDSENDERID,
  appId: import.meta.env.VITE_APPID,
};


const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINDSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };
