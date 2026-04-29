import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDye-wFVpdbhBWwDJepkEjLp_1fmnLAl9Q",
  authDomain: "bushra-plan.firebaseapp.com",
  projectId: "bushra-plan",
  storageBucket: "bushra-plan.firebasestorage.app",
  messagingSenderId: "418441186310",
  appId: "1:418441186310:web:92e5c13a1a40e7e0ebc787",
  measurementId: "G-LS37CYGGYW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
