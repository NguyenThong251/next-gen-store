// // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyCNZn5oSitHPqAskspXhOCKQ2qkmlHo5U0",
//     authDomain: "nextgen-store-f6111.firebaseapp.com",
//     projectId: "nextgen-store-f6111",
//     storageBucket: "nextgen-store-f6111.appspot.com",
//     messagingSenderId: "1011765039316",
//     appId: "1:1011765039316:web:b741612d537f20d33d2b41",
//     measurementId: "G-KDJJD602CE"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNZn5oSitHPqAskspXhOCKQ2qkmlHo5U0",
  authDomain: "nextgen-store-f6111.firebaseapp.com",
  projectId: "nextgen-store-f6111",
  storageBucket: "nextgen-store-f6111.appspot.com",
  messagingSenderId: "1011765039316",
  appId: "1:1011765039316:web:b741612d537f20d33d2b41",
  measurementId: "G-KDJJD602CE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

//document

let NameUp = document.getElementById("fullname-signup");
let EmailUp = document.getElementById("email-signup");
let PassUp = document.getElementById("Password-signup");
let MainForm = document.getElementById("MainForm");
console.log(EmailUp.value);
let signupUser = (evt) => {
  evt.preventDefault();
  createUserWithEmailAndPassword(auth, EmailUp.value, PassUp.value)
    .then((credentials) => {
      set(ref(db, "UserAuthlist/" + credentials?.user?.uid), {
        Fullname: NameUp.value,
      });
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.massage);
    });
};
MainForm.addEventListener("submit", signupUser);
