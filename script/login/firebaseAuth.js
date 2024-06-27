  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCwA97_hsaNObtZU1kUYoElDta5w7mcMh4",
    authDomain: "adopet-2ad40.firebaseapp.com",
    projectId: "adopet-2ad40",
    storageBucket: "adopet-2ad40.appspot.com",
    messagingSenderId: "886848088982",
    appId: "1:886848088982:web:ddda8cc9eba4f446640bb7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function() {
        messageDiv.style.opacity = 0;
    }, 1000000);
}

const openModalRegister = () => {
    document.getElementById('modal').classList.add('active')
    let login = document.getElementById('login')
    login.style.display = "none"
    document.getElementById('footer-login').style.display = "none"
    let register = document.getElementById('register')
    register.style.display = "flex"
    document.getElementById('footer-register').style.display = "flex"

    document.getElementById('title-modal').innerText = "Novo usuario"
    document.getElementById('register-btn').innerText = "Cadastrar"

    
const signUp = document.getElementById('register-btn');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const name = document.getElementById('register-name').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                Name: name,
            };

            // showMessage('Account Created Successfully', 'signUpMessage');

            sendEmailVerification(user)
                .then(() => {
                    showMessage('Verification email sent. Please check your inbox.', 'signUpMessage');
                })
                .catch((error) => {
                    console.error("Error sending email verification", error);
                    showMessage('Error sending verification email', 'signUpMessage');
                });

            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    window.location.href = '/adote.html';
                })
                .catch((error) => {
                    console.error("Error writing document", error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode == 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            } else {
                showMessage('Unable to create User', 'signUpMessage');
            }
        });
});

}

const openModalLogin = () => {

    document.getElementById('modal').classList.add('active')
    let register = document.getElementById('register')
    register.style.display = "none"
    document.getElementById('footer-register').style.display = "none"

    let login = document.getElementById('login')
    login.style.display = "flex"
    document.getElementById('footer-login').style.display = "flex"

    document.getElementById('title-modal').innerText = "Login do usúario"
    document.getElementById('login-btn').innerText = "Entrar"

    
 const signIn=document.getElementById('login-btn');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('login-email').value;
    const password=document.getElementById('login-password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signUpMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='home.html';
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'signUpMessage');
        }
        else{
            showMessage('Account does not Exist', 'signUpMessage');
        }
    })
 })
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('registerUser').addEventListener('click', openModalRegister);

document.getElementById('loginUser').addEventListener('click', openModalLogin);

document.getElementById('modalClose').addEventListener('click', closeModal);