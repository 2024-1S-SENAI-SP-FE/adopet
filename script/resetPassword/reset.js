import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


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


const openResetPasswordModal = () => {

    const auth = getAuth();


    document.getElementById('modal').classList.add('active')
    let login = document.getElementById('login')
    login.style.display = "none"
    document.getElementById('footer-login').style.display = "none"
    let register = document.getElementById('register')
    register.style.display = "none"
    document.getElementById('footer-register').style.display = "none"
    document.querySelector('.modal-content').style.height = "50vh"
    document.querySelector('.figure').style.height = "30%"

    let resetPassword = document.getElementById('form-reset-password')
    resetPassword.style.display = "flex"
    document.getElementById('footer-reset-password').style.display = "flex"

    // document.getElementById('footer-register').style.display = "none"

    document.getElementById('title-modal').innerText = "Resetar senha"
    document.getElementById('resetPasswordBtn').innerText = "Enviar email"
    // document.getElementById('resetPasswordModal').style.display = 'block';

    
document.getElementById('resetPasswordBtn').addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('resetPasswordEmail').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            showMessage('Email de redefinição de senha enviado!', 'resetPasswordMessage');
            setTimeout(function () {      
                window.location.href = '/home.html';
            }, 10000);
        })
        .catch((error) => {
            console.error("Error sending password reset email:", error);
            showMessage('Erro ao enviar email de redefinição de senha: ' + error.message, 'resetPasswordMessage');
        });
});
};

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('modalClose').addEventListener('click', closeModal);


document.getElementById('reset-password').addEventListener('click', openResetPasswordModal);
