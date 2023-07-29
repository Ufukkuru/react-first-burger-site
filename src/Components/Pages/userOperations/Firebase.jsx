import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkMvrIw0eMr9Y6R4FXCQYQ1moemBA_2UM",
  authDomain: "burger-bc831.firebaseapp.com",
  projectId: "burger-bc831",
  storageBucket: "burger-bc831.appspot.com",
  messagingSenderId: "17704443567",
  appId: "1:17704443567:web:0d877d62369b250d817e5a",
  measurementId: "G-09MBTXFJW6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db }