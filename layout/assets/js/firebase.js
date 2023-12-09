// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
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
    measurementId: "G-KDJJD602CE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

