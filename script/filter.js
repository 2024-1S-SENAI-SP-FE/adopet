const FilterPet = () => {
    event.preventDefault();

    // Capturar os valores dos filtros
    const age = document.getElementById('age-select').value;
    const order = document.getElementById('order-select').value;
    const genders = document.getElementById('gender-select').value
    const size = document.getElementById('size').value;
    const cachorro = document.getElementById('cachorro').checked;
    const gato = document.getElementById('gato').checked;
    // let genderSelect = gender.options[gender.selectedIndex].value;


    alert(order)

    let listPet = [];

    const ApiPet = 'http://localhost:8080/pet';

    const requests = new Request(ApiPet, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' // Corrigido o valor do cabeçalho
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
            // if (size != 'todos') {
            //     petFilter = petFilter.find(pet => pet.size == size);
            // }
            if (cachorro || gato) {
                petFilter = petFilter.find(pet => (cachorro && pet.type == 'cachorro') || (gato && pet.type == 'gato'));
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
                                <h2>${list.name}</h2>
                                <img src="assets/icon_heart.png" alt="favorite" class="icon_heart" onclick="favorite()">
                            </span>
                        </header>
                        <section class="dog-details">
                            <article id="gender-info">
                                <span>Gender:</span>
                                <span class="td-gender">${list.gender}</span>
                            </article>
                            <article class="additional-details">
                                <span>Age:</span>
                                <span class="td-months">${list.age}</span>
                                <span>Size:</span>
                                <span class="td-size">${list.size}</span>
                            </article>
                        </section>
                        <footer class="footer-section">
                            <p class="info-text">${list.description}</p>
                            <div>
                                <button type="button">More info</button>
                            </div>
                        </footer>
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