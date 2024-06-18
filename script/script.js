const GetPet = () => {

    let listPet = []

    const requests = new Request(`http://localhost:8080/pet`, {
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

                    template += `

                    <section class="test">

       <section class="foto">
        <img src="assets/ADOPET.svg" alt="Foto da Lola">
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

const RegisterPet = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('age', document.getElementById('age').value);
    formData.append('size', document.getElementById('size').value);
    formData.append('gender', document.getElementById('gender').value);
    formData.append('situation', document.getElementById('situation').value);
    
    // Obtém os valores do checkbox de cuidados veterinários selecionados

    const fileInput = document.getElementById('photopet');
    if (fileInput.files.length > 0) {
        formData.append('photopet', fileInput.files[0]);
    }

    try {
        const response = await fetch('http://localhost:8080/pet', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            window.alert('Pet Registered!');
        } else {
            window.alert('Error: ' + response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
