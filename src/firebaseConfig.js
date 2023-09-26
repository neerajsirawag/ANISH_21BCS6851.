
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
  apiKey: "AIzaSyBuOMivefjClKft382VzvShTazGicUdZKE",

  authDomain: "chat-90fd8.firebaseapp.com",

  projectId: "chat-90fd8",

  storageBucket: "chat-90fd8.appspot.com",

  messagingSenderId: "698149091443",

  appId: "1:698149091443:web:affcf703fdffe0d4dcd206"

};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);

