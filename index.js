import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBWmylouJta7nZszqwsL-V-MN0AABY7eAw",
    authDomain: "home-chore-m.firebaseapp.com",
    projectId: "home-chore-m",
    storageBucket: "home-chore-m.appspot.com",
    messagingSenderId: "58792557060",
    appId: "1:58792557060:web:7b9c331efc91a2e4471351"
  };
  
  
   // Initialize Firebase
   const app = initializeApp(firebaseConfig); 

const auth = getAuth();
const getStartedButton = document.getElementById('getStarted');

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is logged in, handle button click
        getStartedButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'home.html'; // Redirect to home.html
        });
    } else {
        // User is not logged in, handle button click
        getStartedButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'login.html'; // Redirect to login.html
        });
    }
});