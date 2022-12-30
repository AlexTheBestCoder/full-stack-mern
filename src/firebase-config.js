import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFzeVV9Wdh1PlfNwOYkrEOKsI0wlVPPSw",
  authDomain: "full-stack-mern-app.firebaseapp.com",
  projectId: "full-stack-mern-app",
  storageBucket: "full-stack-mern-app.appspot.com",
  messagingSenderId: "384321795874",
  appId: "1:384321795874:web:be99b6ab45af7c38a7577b",
  measurementId: "G-BWELVVLPM2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
