import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDKd2jwSH6l7XvkLM2WXzwiAThDyYQwysg",
  authDomain: "login-signup-a560d.firebaseapp.com",
  projectId: "login-signup-a560d",
  storageBucket: "login-signup-a560d.appspot.com",
  messagingSenderId: "977812459194",
  appId: "1:977812459194:web:282239cb9fb3dbbd863c83",
  measurementId: "G-LM94EBN0PE"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };