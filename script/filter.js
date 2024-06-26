const FilterPet = (event) => {
    event.preventDefault();

    const age = document.getElementById('age-select').value.toUpperCase();
    const order = document.getElementById('order-select').value.toUpperCase();
    const genders = document.getElementById('gender-select').value.toUpperCase();
    const sizePet = document.getElementById('display').innerText.toUpperCase();
    const cachorro = document.getElementById('cachorro').checked;
    const gato = document.getElementById('gato').checked;

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
            let listPet = response;
            let petFilter = listPet;

            if (genders !== 'TODOS') {
                petFilter = petFilter.filter(pet => pet.gender === genders);
            }
            if (age !== 'TODOS') {
                petFilter = petFilter.filter(pet => pet.age === age);
            }
            if (sizePet !== 'PORTE') {
                if (sizePet !== 'TODOS OS TAMANHOS') {
                    petFilter = petFilter.filter(pet => pet.size === sizePet);
                }
            }
            if (cachorro || gato) {
                petFilter = petFilter.filter(pet => (cachorro && pet.species === 'CACHORRO') || (gato && pet.species === 'GATO'));
            }
            if (order !== 'TODOS') {
                petFilter = petFilter.sort((a, b) => {
                    if (order === 'A-Z') {
                        return a.name.localeCompare(b.name);
                    } else if (order === 'Z-A') {
                        return b.name.localeCompare(a.name);
                    }
                });
            }

            // Atualiza a paginação com os dados filtrados
            updatePagination(petFilter);
        })
        .catch(error => console.error('Error:', error));
};

// Função para atualizar a paginação com os dados filtrados
const updatePagination = (filteredData) => {
    if (typeof updatePaginatedData === 'function') {
        updatePaginatedData(filteredData);
    }
}

const updateDisplay = (value) => {
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

// updateDisplay(document.getElementById('size').value);