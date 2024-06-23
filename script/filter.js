const FilterPet = (event) => {
    event.preventDefault();

    const age = document.getElementById('age-select').value;
    const order = document.getElementById('order-select').value;
    const genders = document.getElementById('gender-select').value
    const size = document.getElementById('display').innerText.toUpperCase();
    const cachorro = document.getElementById('cachorro').checked;
    const gato = document.getElementById('gato').checked;


    console.log(cachorro)
    console.log(gato)

    let listPet = [];

    const ApiPet = 'http://localhost:8080/pet';

    const requests = new Request(ApiPet, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
    });

    fetch(requests)
        .then(response => response.json())
        .then(response => {
            listPet = response;

            let petFilter = listPet;

            console.log(petFilter)

            // Aplicar filtros
            if (genders != 'todos') {
                petFilter = petFilter.filter((pet) => pet.gender == genders);
            }
            if (age != 'todos') {
                petFilter = petFilter.filter(pet => pet.age == age);
            }
            if (size != 'TODOS OS TAMANHOS') {
                petFilter = petFilter.filter(pet => pet.size == size);
            }
            if (cachorro || gato) {
                petFilter = petFilter.filter(pet => (cachorro && pet.species == 'CACHORRO') || (gato && pet.species == 'GATO'));
            }

            if (order != 'todos') {
                petFilter = petFilter.sort((a, b) => {
                    if (order == 'A-Z') {
                        return a.name.localeCompare(b.name);
                    } else if (order == 'Z-A') {
                        return b.name - a.name;
                    }
                });
            }

            console.log(petFilter)

            if (!("erro" in response)) {
                let section = document.getElementById('father');
                let template = "";

                if (petFilter.length === 0) {

                    template += `
                    
                     <section class="not-found">

                <h3>Ops! Filtro não encontrado</h3>

                <img src="/assets/pet-not-found.png" alt="pet not found">

                <h4>Parece que o filtro que você procura não está disponível no momento. Mas não desanime!</h4>

                </section>

                    `
                    section.innerHTML = template
                   
                } else {
                petFilter.forEach(list => {
                    template += `

                    <section class="son">
                        <header class="header-section">
                            <img src="http://localhost:8080${list.photopetUrl}" alt="foto de um cachorro" class="pet-pic">
                            <span class="itens-top">
                                <h2>${list.name.toLowerCase()}</h2>
                                <img src="assets/icon_heart.png" alt="favorite" class="icon_heart" onclick="favorite()">
                            </span>
                        </header>
                        <section class="dog-details">
                            <article id="gender-info">
                                <span>Gender:</span>
                                <span class="td-gender">${list.gender.toLowerCase()}</span>
                            </article>
                            <article class="additional-details">
                                <span>Age:</span>
                                <span class="td-months">${list.age.toLowerCase()}</span>
                                <span>Size:</span>
                                <span class="td-size">${list.size.toLowerCase()}</span>
                            </article>
                        </section>
                        <article class="footer-article">
                            <p class="info-text">${list.description}</p>
                            <section>
                                <button type="button">More info</button>
                            </section>
                        </article>
                    </section>`;
                });

                section.innerHTML = template;
            }
            } else {
                alert('Pet not found');
            }
        })
        .catch(error => console.error('Error:', error));
};

function updateDisplay(value) {
    var display = document.getElementById('display');
    var small = document.getElementById('small')
    var medium = document.getElementById('medium')
    var large = document.getElementById('large')
    if (value == 1) {
        display.innerHTML = 'todos os tamanhos';
        small.src = '../assets/paw-print.png'
        medium.src = '../assets/paw-print.png'
        large.src = '../assets/paw-print.png'
    } else if (value == 2) {
        display.innerHTML = 'pequeno';
        small.src = '../assets/paw-print (1).png'
        medium.src = '../assets/paw-print.png'
        large.src = '../assets/paw-print.png'
    } else if (value == 3) {
        display.innerHTML = 'médio';
        small.src = '../assets/paw-print.png'
        medium.src = '../assets/paw-print (1).png'
        large.src = '../assets/paw-print.png'
    }
    else if (value == 4) {
        display.innerHTML = 'grande';
        small.src = '../assets/paw-print.png'
        medium.src = '../assets/paw-print.png'
        large.src = '../assets/paw-print (1).png'
    }
}

updateDisplay(document.getElementById('size').value);