import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

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

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if (loggedInUserId) {
        // console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    localStorage.setItem('userData', JSON.stringify(userData));
                    document.getElementById('email').innerText = userData.email
                    document.getElementById('name').innerText = userData.Name
                    document.getElementById('user-select').innerHTML = `<button id="user-select"> ${userData.Name}                        
                        </button>`
                    document.getElementById('user-select').addEventListener('click', userOptions)

                }
                else {
                    console.log("no document found matching id")
                }
            })
            .catch((error) => {
                console.log("Error getting document" +error);
            })
    }
    else {
        console.log("User Id not Found in Local storage")
    }
})

const userOptions = (event) => {
    event.preventDefault()

    const userSelect = document.getElementById('user-config')
    userSelect.style.display = "flex"
    userSelect.innerHTML = `
                            <button id="logout" class="btn-config">Sair</button>
`
    const logoutButton = document.getElementById('logout');

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUserId');
        localStorage.removeItem('userData');
        signOut(auth)
            .then(() => {
                window.location.href = 'home.html';
            })
            .catch((error) => {
                console.error('Error Signing out:', error);
            })
    })

}



