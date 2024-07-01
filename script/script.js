// const GetPet = () => {

//     let listPet = []

//     const ApiPet = 'http://localhost:8080/pet'

//     const requests = new Request(ApiPet, {
//         'method': 'GET',
//         'headers': {
//             'Content-Type': 'aplication/json'
//         }
//     })

//     fetch(requests)
//         .then(response => response.json())
//         .then(response => {

//             listPet = response

//             // console.log(listPet)

//             if (!("erro" in response)) {

//                 let section = document.getElementById('father');

//                 let template = ""

//                 listPet.forEach(list => {

//                     // console.log(list.photopet_url)

//                     template += `

//                      <section class="son">
//     <header class="header-section">
//         <img src="http://localhost:8080${list.photopetUrl}" alt="foto de um cachorro" class="pet-pic">
//         <span class="itens-top">
//             <h2>${list.name.toLowerCase()}</h2>
//             <img src="assets/icon_heart.png" alt="favorite" class="icon_heart" onclick="favorite()">
//         </span>
//     </header>
//     <section class="dog-details">
//         <article id="gender-info">
//             <span>Gender:</span>
//             <span class="td-gender">${list.gender.toLowerCase()}</span>
//         </article>
//         <article class="additional-details">
//             <span>Age:</span>
//             <span class="td-months">${list.age.toLowerCase()}</span>
//             <span>Size:</span>
//             <span class="td-size">${list.size.toLowerCase()}</span>
//         </article>
//     </section>
//     <article class="footer-article">
//         <p class="info-text">Lola is a friendly, playful, smart female dog, ready to be adopted into a loving home.</p>
//         <section>
//             <button type="button">More info</button>
//         </section>
//     </article>
// </section>

//         `
//                 });

//                 section.innerHTML = template

//             } else {

//                 alert('Pet not found')
//             }
//         })
// }

// window.addEventListener('DOMContentLoaded', GetPet)

// Função para registrar um novo pet
const RegisterPet = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('age', document.getElementById('age').value);
    formData.append('size', document.getElementById('size').value);
    formData.append('gender', document.getElementById('gender').value);
    formData.append('situation', document.getElementById('situation').value);
    formData.append('species', document.getElementById('specie').value);

    

    const careInputs = document.querySelectorAll('input[name=care]:checked');
    const veterinaryCare = [];
    careInputs.forEach(input => {
        veterinaryCare.push(input.value); 
    });
    formData.append('veterinarycare', JSON.stringify(veterinaryCare)); 

    const fileInput = document.getElementById('photopet');
    if (fileInput.files.length > 0) {
        formData.append('photopet_url', fileInput.files[0], fileInput.files[0].name); 
    }

    try {
        const response = await fetch('http://localhost:8080/pet', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            window.alert('Pet Registered!');
            document.getElementById('petForm').reset();
            GetPet(); 
        } else {
            const errorMessage = await response.text();   
            console.log('Error: ' + errorMessage);
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('Error: ' + error.message);
    }
};

