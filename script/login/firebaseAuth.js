  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration

  const openModal = () => {
    document.getElementById('modal').classList.add('active')

    document.getElementById('title-modal').innerText = "New User"
    document.getElementById('save-Value').innerText = "Save"
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('registerUser').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);


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

  function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },10000);
 }
 const signUp=document.getElementById('save-Value');
 signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const name=document.getElementById('name').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            Name: name,
        };
        showMessage('Account Created Successfully', 'signUpMessage');

        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='/home.html'; 
        })
        .catch((error)=>{
            console.error("error writing document", error);

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !!!', 'signUpMessage');
        }
        else{
            showMessage('unable to create User', 'signUpMessage');
        }
    })
 });

//  const signIn=document.getElementById('submitSignIn');
//  signIn.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email=document.getElementById('email').value;
//     const password=document.getElementById('password').value;
//     const auth=getAuth();

//     signInWithEmailAndPassword(auth, email,password)
//     .then((userCredential)=>{
//         showMessage('login is successful', 'signInMessage');
//         const user=userCredential.user;
//         localStorage.setItem('loggedInUserId', user.uid);
//         window.location.href='homepage.html';
//     })
//     .catch((error)=>{
//         const errorCode=error.code;
//         if(errorCode==='auth/invalid-credential'){
//             showMessage('Incorrect Email or Password', 'signInMessage');
//         }
//         else{
//             showMessage('Account does not Exist', 'signInMessage');
//         }
//     })
//  })