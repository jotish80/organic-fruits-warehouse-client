 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyBzIO56O8K151dS4tduzzyZ1jLvBtIF7lk",
  authDomain: "organic-fruits-warehouse.firebaseapp.com",
  projectId: "organic-fruits-warehouse",
  storageBucket: "organic-fruits-warehouse.appspot.com",
  messagingSenderId: "94307711063",
  appId: "1:94307711063:web:a227ea21e36af53433cb12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;