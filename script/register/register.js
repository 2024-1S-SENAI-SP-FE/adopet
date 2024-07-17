import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
    document.querySelector('.modal-content').style.height = "83vh"
    document.querySelector('.figure').style.height = "15%"

    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();

    
    const googleLoginBtn = document.getElementById('google-login-img');
googleLoginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const user = result.user;
        showMessage('Login com Google bem-sucedido', 'signInMessage');
        console.log(user);
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error("Erro ao fazer login com Google:", error);
        showMessage('Erro ao fazer login com Google: ' + error.message, 'signInMessage');
    });
});


    const signUp = document.getElementById('register-btn');
    signUp.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const name = document.getElementById('register-name').value;
        const surName = document.getElementById('register-surname').value;

        if(email == ''){
            showMessage('O campo de email está vazio, preencha-o para poder prosseguir com o cadastro', 'signUpMessage')
            return;
        }
        if(password == ''){
            showMessage('O campo de senha está vazio, preencha-o para poder prosseguir com o cadastro', 'signUpMessage')
            return;
        }
        if(name == ''){
            showMessage('O campo de nome está vazio, preencha-o para poder prosseguir com o cadastro', 'signUpMessage')
            return;
        }
        if(surName == ''){
            showMessage('O campo de sobrenome está vazio, preencha-o para poder prosseguir com o cadastro', 'signUpMessage')
            return;
        }



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

                sendEmailVerification(user)
                    .then(() => {
                        showMessage('Email de verificação enviado. Porfavor verifique sua caixa de entrada.', 'signUpMessage');
                    })
                    .catch((error) => {
                        console.error("Erro ao enviar email de verificação", error);
                        showMessage('Erro ao enviar email de verificação, tente novamente', 'signUpMessage');
                        return;
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
                console.error("Erro ao criar usúario: " +error.message)
                if (errorCode == 'auth/email-already-in-use') {
                    showMessage('Endereço de email já está em uso, volte e faça login !!!', 'signUpMessage');
                }else if(error.message === 'Firebase: Error (auth/invalid-email).'){
                    showMessage('Endereço de email inválido', 'signUpMessage');
                }else if(error.message === 'Firebase: Error (auth/network-request-failed).'){
                    showMessage('Conecte-se a internet para cadastrar uma conta', 'signUpMessage');
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
