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
            let section = document.getElementById('father');

            let template = ""

            console.log(Pet)

            template += `
            <section class="son-for-id">

            <section class="profile-section">
                <img src="http://localhost:8080${Pet.photopetUrl}" alt="">
                <h1 class="text-h1">${Pet.name}</h1>
            </section>

        <section class="card">
            
             <figure class="big-profile-section">
                    <img class="card1-img" src="http://localhost:8080${Pet.photopetUrl}" alt="foto de um shiba">
                </figure>



            <section class="card1">

                 <article class="article-story">

                        <h1 class="text-h1">${Pet.name} Story</h1>

                        <p>
                        ${Pet.petStory}
                        </p>

                </article>

              </section>

            </section>



                <section class="card-info">
    
                    <ul>
                        <li><img src="assets/paw.svg" alt=""></li>
                        <li>Gênero</li>
                        <li class="titulo-cards">${Pet.gender.toLowerCase()}</li>
                    </ul>
                    <ul>
                        <li><img src="assets/paw.svg" alt=""></li>
                        <li>Idade</li>
                        <li class="titulo-cards">${Pet.age.toLowerCase()}</li>
                    </ul>
                    <ul>
                        <li><img src="assets/paw.svg" alt=""></li>
                        <li>Porte</li>
                        <li class="titulo-cards">${Pet.size.toLowerCase()}</li>
                    </ul>

                    <button class="button-adote" type="button">Adote</button>

                </section>

        </section>
            
            `

            //     template += `
            
            //                      <section class="son">
            //     <header class="header-section">
            //         <img src="http://localhost:8080${Pet.photopetUrl}" alt="foto de um cachorro" class="pet-pic">
            //         <span class="itens-top">
            //             <h2>${Pet.name.toLowerCase()}</h2>
            //             <img src="assets/icon_heart.png" alt="favorite" class="icon_heart" onclick="favorite()">
            //         </span>
            //     </header>
            //     <section class="dog-details">
            //         <article id="gender-info">
            //             <span>Gender:</span>
            //             <span class="td-gender">${Pet.gender.toLowerCase()}</span>
            //         </article>
            //         <article class="additional-details">
            //             <span>Age:</span>
            //             <span class="td-months">${Pet.age.toLowerCase()}</span>
            //             <span>Size:</span>
            //             <span class="td-size">${Pet.size.toLowerCase()}</span>
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

            section.innerHTML = template

        })
        .catch(error => console.error('Error:', error));
}

