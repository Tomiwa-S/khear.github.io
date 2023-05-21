// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCQAG49_JKklxCGsZ5M_jewsBUYVbSQi2g",
authDomain: "khear-login.firebaseapp.com",
projectId: "khear-login",
storageBucket: "khear-login.appspot.com",
messagingSenderId: "146101316881",
appId: "1:146101316881:web:2e5b97f8ce3b4127b530b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function(e){
    e.preventDefault();
    var obj = {
        email: email.value,
        password:password.value
    };
    createUserWithEmailAndPassword(auth, obj.email,obj.password)
    .then(function(success){
        alert("Sign up successful")
    })
    .then(function(){
        signInWithEmailAndPassword(auth, obj.email,obj.password)
    })
    .catch(function(error){
        alert("Error : "+error);
    })
}
