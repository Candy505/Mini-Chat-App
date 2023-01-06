
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB65hOOPtoJGnC5Vb1Q7z-d84n_3U6ClP8",
  authDomain: "chat-fe11b.firebaseapp.com",
  projectId: "chat-fe11b",
  storageBucket: "chat-fe11b.appspot.com",
  messagingSenderId: "883460848217",
  appId: "1:883460848217:web:1ce01e2f49f84dda2d0f48"
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();