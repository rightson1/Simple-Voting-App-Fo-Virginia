import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA9TJzaYZBR7IXTlLJ7fMOdta4gSrOeASw",
  authDomain: "virginia-af767.firebaseapp.com",
  projectId: "virginia-af767",
  storageBucket: "virginia-af767.appspot.com",
  messagingSenderId: "900241774254",
  appId: "1:900241774254:web:b56c14c3f3ee94c72cff3f",
};

const app = initializeApp(firebaseConfig, {});
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
