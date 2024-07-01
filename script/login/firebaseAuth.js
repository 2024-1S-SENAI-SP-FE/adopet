import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"


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
    setTimeout(function () {
        messageDiv.style.opacity = 0;
    }, 1000000);
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


    //  const signIn=document.getElementById('login-btn');
    //  signIn.addEventListener('click', (event)=>{
    //     event.preventDefault();
    //     const email=document.getElementById('login-email').value;
    //     const password=document.getElementById('login-password').value;
    //     const auth=getAuth();

    //     signInWithEmailAndPassword(auth, email,password)
    //     .then((userCredential)=>{
    //         showMessage('login is successful', 'signUpMessage');
    //         const user=userCredential.user;
    //         localStorage.setItem('loggedInUserId', user.uid);
    //         window.location.href='home.html';
    //     })
    //     .catch((error)=>{
    //         const errorCode=error.code;
    //         if(errorCode==='auth/invalid-credential'){
    //             showMessage('Incorrect Email or Password', 'signUpMessage');
    //         }
    //         else{
    //             showMessage('Account does not Exist', 'signUpMessage');
    //         }
    //     })
    //  })

    
    const auth = getAuth();

    const signIn = document.getElementById('login-btn');
    signIn.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        if (user.emailVerified) {
                            console.log("User is logged in and email is verified");
                            localStorage.setItem('loggedInUserId', user.uid);
                            window.location.href = 'home.html';
                        } else {
                            console.log("User is logged in but email is not verified");
                            // window.location.href = 'gmail.com';
                            alert("faça a verificação do email")
                        }
                    } else {
                        console.log("No user is logged in");
                    }
                });
                showMessage('login is successful', 'signInMessage');
                const user = userCredential.user;
                localStorage.setItem('loggedInUserId', user.uid);
                window.location.href = 'home.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === 'auth/invalid-credential') {
                    showMessage('Email ou senha incorretos', 'signInMessage');
                }
            })
    })
}

const UrlAdote = () => {
    const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (!user) {
    openModalLogin()
    showMessage('Você deve fazer um login para poder ir para a página de adoção', 'signInMessage');
      }else{
        window.location.href = 'adocao.html'
      }
})
}

document.getElementById('doe').addEventListener('click', UrlAdote);


const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('loginUser').addEventListener('click', openModalLogin);

document.getElementById('modalClose').addEventListener('click', closeModal);
