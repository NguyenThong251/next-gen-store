import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  get,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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
const dbref = ref(db);

//document

let Email = document.getElementById("Email");
let Pass = document.getElementById("password");
let MainForm = document.getElementById("MainForm");

let signInUser = (evt) => {
  evt.preventDefault();
  signInWithEmailAndPassword(auth, Email.value, Pass.value)
    .then((credentials) => {
      get(child(dbref, "UserAuthlist/" + (credentials?.user?.uid || ""))).then(
        (snapshot) => {
          if (snapshot.exists()) {
            // Tiếp tục xử lý
            const Fullname = snapshot.val()?.Fullname;
            if (Fullname) {
              sessionStorage.setItem(
                "user-info",
                JSON.stringify({
                  fullname: Fullname,
                })
              );
              sessionStorage.setItem(
                "user-creds",
                JSON.stringify(credentials.user)
              );
              window.location.href = "home.html";
            } else {
              console.error("Fullname is undefined in snapshot.");
            }
          } else {
            console.error("Snapshot does not exist.");
          }
        }
      );
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.message);
    });
};
MainForm.addEventListener("submit", signInUser);
