// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVvTNsxTIA9Po0MzJi14cv7KOA1kgG8So",
  authDomain: "my-project-a635e.firebaseapp.com",
  databaseURL: "https://my-project-a635e-default-rtdb.firebaseio.com",
  projectId: "my-project-a635e",
  storageBucket: "my-project-a635e.appspot.com",
  messagingSenderId: "929220742024",
  appId: "1:929220742024:web:d4f01c587f190cf8d6083d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, ref, set, push, get, child, auth, signInWithEmailAndPassword };
