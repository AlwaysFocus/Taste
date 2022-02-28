// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxPblVTjD2qctwXhCiE_FDYyk_ju4INQ",
  authDomain: "taste-efcbe.firebaseapp.com",
  projectId: "taste-efcbe",
  storageBucket: "taste-efcbe.appspot.com",
  messagingSenderId: "549569410622",
  appId: "1:549569410622:web:a00fff523ca5dfbb52036f",
};

// Initialize Firebase
let app;
let apps = firebase.getApps();

if (apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = getAuth();

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
