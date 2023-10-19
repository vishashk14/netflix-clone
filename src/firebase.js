// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiZhvPb3ZYCuW3TqHHmqq0-AAdOxCCxoQ",
  authDomain: "netflixclone-aeecd.firebaseapp.com",
  projectId: "netflixclone-aeecd",
  storageBucket: "netflixclone-aeecd.appspot.com",
  messagingSenderId: "266052330764",
  appId: "1:266052330764:web:3fe9261ea53b417024d529",
  measurementId: "G-4LV51DLNGE"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
