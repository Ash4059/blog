// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJSVBnMLndlol2PsRqvYwKOe0qavnWlGQ",
  authDomain: "blog-bdd01.firebaseapp.com",
  projectId: "blog-bdd01",
  storageBucket: "blog-bdd01.appspot.com",
  messagingSenderId: "562074093035",
  appId: "1:562074093035:web:0ae65840843fed0f1245ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;