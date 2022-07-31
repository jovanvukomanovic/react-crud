import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBh7XkzLbrPkn0UO7npi2wTEZP74tRX4o",
    authDomain: "fir-crud-1a3fa.firebaseapp.com",
    projectId: "fir-crud-1a3fa",
    storageBucket: "fir-crud-1a3fa.appspot.com",
    messagingSenderId: "45839796045",
    appId: "1:45839796045:web:ff30315b3d4a7ca0789904"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore();

 