// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARBjBUtlpTXBPPVbY9-8eCwy4K5RApXf4",
  authDomain: "ecommerce-test-gourmet.firebaseapp.com",
  projectId: "ecommerce-test-gourmet",
  storageBucket: "ecommerce-test-gourmet.appspot.com",
  messagingSenderId: "333548807420",
  appId: "1:333548807420:web:fb3680a316ae803b25e379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db  