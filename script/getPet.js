// let myPet = []
function Petequals() {
    let listPet = [];

const ApiPet = 'http://localhost:8080/pet';

const FilterRequest = new Request(ApiPet, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});
    return fetch(FilterRequest)
        .then(response => response.json())
        .then(response => {
            listPet = response;
            return listPet;
        })
        .catch(error => console.error('Error:', error));
}


const GetById = (id) => {

    let headerMain = document.getElementById('header-m');
    let pagination = document.getElementById('paginate');
    let hr = document.getElementById('hr-class')
    hr.style.display = "none"
    pagination.style.display = "none"
    headerMain.style.display = "none"; 
    // let father = document.getElementById('father')

    // const main = document.getElementsByClassName('header-main')
    // main.style.display = "block"
    const UrlApiGetById = `http://localhost:8080/pet/${id}`;
    let Pet;

    const requests = new Request(UrlApiGetById, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(requests)
        .then(response => response.json())
        .then(response => {
            Pet = response

            let infoAge;

            let section = document.getElementById('father');

            let template = ""

            if(Pet.age == "FILHOTE"){
                infoAge = "0 a 2 anos"
            }else if(Pet.age == "ADULTO"){
                infoAge = "3 á 9 anos"
            }else if(Pet.age == "IDOSO"){
                infoAge = "a partir de 10 anos"
            }

            template += `
            <section class="son-for-id">

                <section class="profile-section">

                    <img src="${ApiPet}${Pet.photopetUrl}" alt="">

                    <h1 class="text-h1">${Pet.name}</h1>

                 </section>

            <section class="card">

                    <section class="card-img">

                        <figure class="big-profile-section">

                            <img class="card1-img" src="${ApiPet}${Pet.photopetUrl}" alt="foto do ${Pet.name}">

                        </figure>

                </section>

            <section class="section-info">


                <section class="card-article">

                    <article class="article-story">

                            <h1 class="text-h1">${Pet.name} Story</h1>

                                <p>

                            ${Pet.petStory} "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                </p>

                    </article>

                </section>

                <section class="card-info">
    
                    <ul class="list-info">
                        <li class="gender-simbol">&#x26A4;</li>
                        <li>Gênero</li>
                        <li class="title-cards">${Pet.gender.toLowerCase()}</li>
                    </ul>

                    <ul class="list-info">
                        <li class="list-img"><img src="assets/pet-age.png" alt="calendar-pet"></li>
                        <li>Idade</li>
                        <li class="title-cards">${Pet.age.toLowerCase()} (${infoAge})</li>
                    </ul>

                    <ul class="list-info">
                        <li class="list-img"><img src="assets/size-pet.png" alt="size pet"></li>
                        <li>Porte</li>
                        <li class="title-cards">${Pet.size.toLowerCase()}</li>
                    </ul>

                    <ul class="list-button">
                        <li><button class="button-adote" type="button" onclick="Adoption(${Pet.id})">Adote</button></li>
                    </ul>

                </section>

            </section>

        </section>

                    <section class="pet-recommendation">

                        <article class="title-recommendation">
                            <h2>
                                Veja também
                            </h2>
                        </article>

                        <section class="pet-recommended" id="pet">
                        
                        </section>

                    </section>


            `
            section.innerHTML = template;

            Petequals().then(data => {
                let petFilter = data.filter(similarPet => 
                    similarPet.age === Pet.age && similarPet.species === Pet.species
                ).slice(0, 3);;

                let similar = "";

                petFilter.forEach(similarPet => {

                    if(similarPet.age == "FILHOTE"){
                        Petsize = "0 a 2 anos"
                    }else if(similarPet.age == "ADULTO"){
                        Petsize = "3 a 9 anos"
                    }else if(similarPet.age == "IDOSO"){
                        Petsize = "10 anos pra cima"
                    }
                   
                    similar += `
                  <section class="son-description">
                        <header class="header-section">
                            <img src="${ApiPet}${similarPet.photopetUrl}" alt="foto de um cachorro" class="pet-pic">
                            <span class="itens-top">
                                <h2>${similarPet.name.toLowerCase()}</h2>
                                <!-- <img src="assets/icon_heart.png" alt="favorite" class="icon_heart" onclick="favorite()"> -->
                            </span>
                        </header>
                       <section class="dog-details">
                            <article id="months-info">
                             <span>Idade:</span>
                                <span class="td-months">${similarPet.age.toLowerCase()} (${Petsize})</span>
                            </article>
                            <article class="additional-details">
                                <span>Gênero:</span>
                                <span class="td-gender">${similarPet.gender.toLowerCase()}</span>
                                <span>Tamanho:</span>
                                <span class="td-size">${similarPet.size.toLowerCase()}</span>
                            </article>
                        </section>
                        <article class="footer-article">
                            <p class="info-text">${similarPet.petstory}</p>
                            <section>
                                <button type="button" onclick="GetById(${similarPet.id})">More info</button>
                            </section>
                        </article>
                    </section>
                    `;
                });

                let petSection = document.getElementById('pet');
                petSection.innerHTML = similar;
            });

        })
        .catch(error => console.error('Error:', error));
}

const Adoption = (id) => {
    const UrlApiGetById = `http://localhost:8080/pet/${id}`;
    let Pet;

    const requests = new Request(UrlApiGetById, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(requests)
        .then(response => response.json())
        .then(response => {
            Pet = response
            localStorage.setItem('PetId', JSON.stringify(Pet));
            window.location.href = 'adocao.html'
        })

}