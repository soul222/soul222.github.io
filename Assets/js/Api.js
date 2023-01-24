// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAamqaHExtpDNivya8aaTF51EK0et65j6U",
  authDomain: "eruanglogin.firebaseapp.com",
  databaseURL: "https://eruanglogin-default-rtdb.firebaseio.com",
  projectId: "eruanglogin",
  storageBucket: "eruanglogin.appspot.com",
  messagingSenderId: "684145876078",
  appId: "1:684145876078:web:13b2ce4729c33be28e9a7f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
let signin = document.getElementById("Signin");
let signUp = document.getElementById("SignUp");

signUp.addEventListener("click", (e) => {
  let Name = document.getElementById("NewName").value;
  let UserSignup = document.getElementById("User").value;
  let EmailSignup = document.getElementById("NewEmail").value;
  let PassSignup = document.getElementById("NewPassword").value;
  createUserWithEmailAndPassword(auth, EmailSignup, PassSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        name: Name,
        userSignup: UserSignup,
        email: EmailSignup,
        password: PassSignup
      })
        .then(() => {
          // Data saved successfully!
          alert("Data saved successfully!");
          location.href = "/Home.html";
        })
        .catch((error) => {
          //the write failed
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

signin.addEventListener("click", (e) => {
  let emailSignin = document.getElementById("EmailUser").value;
  let passwordSignin = document.getElementById("PasswordUser").value;
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      document.getElementById("Masuk").remove
      document.getElementById("Register").remove
      let lgDate = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: lgDate
      })
        .then(() => {
          // Data saved successfully!
          alert("user telah sukses login");
        })
        .catch((error) => {
          //the write failed
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
});
