import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Firebase configuration
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

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // Clear local storage if necessary
            localStorage.removeItem('loggedInUserId');
            window.location.href = 'index.html'; // Redirect to index.html after logout
        })
        .catch((error) => {
            console.error('Error signing out:', error);
        });
});