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

