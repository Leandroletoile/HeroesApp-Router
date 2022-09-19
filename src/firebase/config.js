import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import dotenv from 'dotenv'


dotenv.config()

const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: import.meta.env.authDomain,
  projectId: import.meta.env.projectId,
  storageBucket: import.meta.env.storageBucke,
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.appId
};


const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);


