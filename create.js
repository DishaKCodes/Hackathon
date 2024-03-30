import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzuhAjgCdNHJP_ZdOeUTkKhZ9jdLPBmw8",
  authDomain: "student-section-12dbb.firebaseapp.com",
  projectId: "student-section-12dbb",
  storageBucket: "student-section-12dbb.appspot.com",
  messagingSenderId: "967191095461",
  appId: "1:967191095461:web:f984094f64a49f07e7854c"
};

const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
const auth = getAuth()

//inputs
const submit = document.getElementById('submit');

submit.addEventListener("click",(event) =>{
  event.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Creating Account...")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

})
