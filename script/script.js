const GetPet = () => {

    let listPet = []

    const ApiPet = 'http://localhost:8080/pet'

    const requests = new Request(ApiPet, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'aplication/json'
        }
    })

    fetch(requests)
        .then(response => response.json())
        .then(response => {

            listPet = response

            console.log(listPet)

            if (!("erro" in response)) {

                let section = document.getElementById('section-pet');

                let template = ""

                listPet.forEach(list => {

                    console.log(list.photopet_url)

                    template += `

                    <section class="test">

       <section class="foto">
        <img src="http://localhost:8080${list.photopetUrl}" alt="Foto do(a) ${list.name}">
    </section>

    <section class="informacoes">
        <h2>${list.name}</h2>
        <ul>
            <li>Sexo: ${list.gender}</li>
            <li>Idade: ${list.age}</li>
            <li>Porte: ${list.size}</li>
        </ul>
        <br>

        <p>${list.petStory}</p>

        <button class="more-info">Saiba mais</button>

    </section>
     </section>
          
        `
                });

                section.innerHTML = template

            } else {

                alert('Pet not found')
                ResetForm()

            }
        })
}

window.addEventListener('DOMContentLoaded', GetPet)

// Função para registrar um novo pet
const RegisterPet = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('age', document.getElementById('age').value);
    formData.append('size', document.getElementById('size').value);
    formData.append('gender', document.getElementById('gender').value);
    formData.append('situation', document.getElementById('situation').value);

    const careInputs = document.querySelectorAll('input[name=care]:checked');
    const veterinaryCare = [];
    careInputs.forEach(input => {
        veterinaryCare.push(input.value); 
    });
    formData.append('veterinaryCare', JSON.stringify(veterinaryCare)); 

    // Obtém a foto do pet, se fornecida
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