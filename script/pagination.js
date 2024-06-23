let listPet = [];

const ApiPet = 'http://localhost:8080/pet';

const requests = new Request(ApiPet, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

function populateList() {
    return fetch(requests)
        .then(response => response.json())
        .then(response => {
            listPet = response;
            return listPet;
        })
        .catch(error => console.error('Error:', error));
}

populateList().then(datas => {
    initializePagination(datas);
});

function initializePagination(datas) {
    const state = {
        page: 1,
        petPage: 3,
        totalPages: Math.ceil(datas.length / 3),
        data: datas
    };

    const controls = {
        next() {
            if (state.page < state.totalPages) {
                state.page++;
                renderPage();
            }
        },
        prev() {
            if (state.page > 1) {
                state.page--;
                renderPage();
            }
        },
        first() {
            state.page = 1;
            renderPage();
        },
        last() {
            state.page = state.totalPages;
            renderPage();
        },
        goTo(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= state.totalPages) {
                state.page = pageNumber;
                renderPage();
            }
        }
    };

    function renderPage() {
        const start = (state.page - 1) * state.petPage;
        const end = start + state.petPage;
        const currentPageItems = state.data.slice(start, end);

        const container = document.querySelector('.father');
        container.innerHTML = '';

        if (currentPageItems.length === 0) {
            container.innerHTML = `
                <section class="not-found">
                    <h3>Ops! Filtro não encontrado</h3>
                    <img src="/assets/pet-not-found.png" alt="pet not found">
                    <h4>Parece que o filtro que você procura não está disponível no momento. Mas não desanime!</h4>
                </section>
            `;
        } else {
            currentPageItems.forEach(list => {
                const petSection = `
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
                container.innerHTML += petSection;
            });
        }

        updatePaginationControls();
    }

    function updatePaginationControls() {
        const numbersContainer = document.querySelector('.controls .numbers');
        numbersContainer.innerHTML = '';
        for (let i = 1; i <= state.totalPages; i++) {
            const pageElement = document.createElement('article');
            pageElement.textContent = i;
            pageElement.addEventListener('click', () => controls.goTo(i));
            if (i === state.page) {
                pageElement.classList.add('active');
            }
            numbersContainer.appendChild(pageElement);
        }
    }

    // Adiciona eventos aos controles de paginação
    document.querySelector('.controls .next').addEventListener('click', controls.next);
    document.querySelector('.controls .prev').addEventListener('click', controls.prev);
    document.querySelector('.controls .first').addEventListener('click', controls.first);
    document.querySelector('.controls .last').addEventListener('click', controls.last);

    // Renderiza a primeira página inicialmente
    renderPage();
}

// Função para atualizar os dados paginados
function updatePaginatedData(filteredData) {
    const state = {
        page: 1,
        petPage: 3,
        totalPages: Math.ceil(filteredData.length / 3),
        data: filteredData
    };

    initializePagination(filteredData);
}
