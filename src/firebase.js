
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDNZR07pCqOWi7wQP3x3Dasz3xEdkwAvh8",
  authDomain: "mini-chatapp-c3d65.firebaseapp.com",
  projectId: "mini-chatapp-c3d65",
  storageBucket: "mini-chatapp-c3d65.appspot.com",
  messagingSenderId: "444693457939",
  appId: "1:444693457939:web:b1397dbb7937da22b2e3e6"
};
// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyB65hOOPtoJGnC5Vb1Q7z-d84n_3U6ClP8",
  authDomain: "chat-fe11b.firebaseapp.com",
  projectId: "chat-fe11b",
  storageBucket: "chat-fe11b.appspot.com",
  messagingSenderId: "883460848217",
  appId: "1:883460848217:web:1ce01e2f49f84dda2d0f48"
};
*/


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
