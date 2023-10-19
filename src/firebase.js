// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4pru572wtszlV1v7GzRxJQJQOtEbRP7A",
  authDomain: "netflix-clone-aa386.firebaseapp.com",
  projectId: "netflix-clone-aa386",
  storageBucket: "netflix-clone-aa386.appspot.com",
  messagingSenderId: "255071702663",
  appId: "1:255071702663:web:308b65e763cd1c59c0b222",
  measurementId: "G-Y6KDN68XSD"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
