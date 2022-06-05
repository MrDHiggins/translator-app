import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYysOHk2tY0Ca1kUpOTQ04KMfHXASqiLw",
  authDomain: "translator-app-9c3fb.firebaseapp.com",
  projectId: "translator-app-9c3fb",
  storageBucket: "translator-app-9c3fb.appspot.com",
  messagingSenderId: "1077311100066",
  appId: "1:1077311100066:web:14034cc649157d073173fb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };