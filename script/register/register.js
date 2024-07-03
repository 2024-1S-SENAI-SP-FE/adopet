import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

// const app = initializeApp(firebaseConfig);


const firebaseConfig = {
    apiKey: "AIzaSyCwA97_hsaNObtZU1kUYoElDta5w7mcMh4",
    authDomain: "adopet-2ad40.firebaseapp.com",
    projectId: "adopet-2ad40",
    storageBucket: "adopet-2ad40.appspot.com",
    messagingSenderId: "886848088982",
    appId: "1:886848088982:web:ddda8cc9eba4f446640bb7"
};

function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function () {
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

    let resetPassword = document.getElementById('form-reset-password')
    resetPassword.style.display = "none"
    document.getElementById('footer-reset-password').style.display = "none"

    document.getElementById('title-modal').innerText = "Novo usuario"
    document.getElementById('register-btn').innerText = "Cadastrar"
    document.querySelector('.modal-content').style.height = "84vh"
    document.querySelector('.figure').style.height = "15%"


    const signUp = document.getElementById('register-btn');
    signUp.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const name = document.getElementById('register-name').value;
        const surName = document.getElementById('register-surname').value;

        const auth = getAuth();
        const db = getFirestore();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userData = {
                    email: email,
                    Name: name,
                    surName: surName
                };

                // showMessage('Account Created Successfully', 'signUpMessage');

                sendEmailVerification(user)
                    .then(() => {
                        showMessage('Email de verificação enviado. Porfavor verifique sua caixa de entrada.', 'signUpMessage');
                    })
                    .catch((error) => {
                        console.error("Erro ao enviar email de verificação", error);
                        showMessage('Erro ao enviar email de verificação', 'signUpMessage');
                    });

                const docRef = doc(db, "users", user.uid);
                setDoc(docRef, userData)
                    .then(() => {
                        setTimeout(function () {      
                        window.location.href = 'adote.html';
                    }, 10000);
                    })
                    .catch((error) => {
                        console.error("Erro ao salvar dados", error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode == 'auth/email-already-in-use') {
                    showMessage('Endereço de email já está em uso, volte e faça login !!!', 'signUpMessage');
                } else {
                    showMessage('Erro ao criar o usúario, tente novamente mais tarde', 'signUpMessage');
                }
            });
    });

}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('register-anchor').addEventListener('click', openModalRegister)

document.getElementById('registerUser').addEventListener('click', openModalRegister);

document.getElementById('modalClose').addEventListener('click', closeModal);
