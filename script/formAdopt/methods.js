
function wrapTextWithSpan(text) {
    return text.split('').map(char => `${char}`).join('');
}

async function submitAdoptionForm() {

    const button = document.getElementById('submit-btn')
    const newText = 'Enviando...';
    button.innerText = wrapTextWithSpan(newText);
    button.classList.add('jumping-text');

    const userData = JSON.parse(localStorage.getItem('userData'));
    const PetData = JSON.parse(localStorage.getItem('PetId'));
    console.log(PetData)
    const radioButtons = document.getElementsByName('info-pets');
    let selectedValue;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            break;
        }
    }

    const formData = new URLSearchParams();

    const name = userData.Name +" "+ userData.surName;
    const email = userData.email;
    const address = document.getElementById("address").value;
    const cep = document.getElementById("cep").value;
    const city = document.getElementById("city").value;
    const houseType = document.getElementById("houseType").value;
    const petLivingHouse = selectedValue;
    const numberPets = document.getElementById('qtd-pet').value;
    const petOwnership = document.getElementById('petOwnership').value;
    const homeEnvironment = document.getElementById('home-enviroment').value;
    const familyActivity = document.getElementById('family-activity').value;
    const reasonsAdoption = document.getElementById('reasons-adoption').value;
    const numberChild = document.getElementById('number-child').value
    const numberAdults = document.getElementById('number-adults').value;
    let termsCheckbox = document.getElementById('terms-conditions').checked;
    let warningInput = document.getElementById('warning-inputs')
    console.log(PetData)
    

    console.log(homeEnvironment)
    console.log(familyActivity)
    console.log(petLivingHouse)


    if(name == '' || name == undefined){
        warning.innerText = 'Provavelmente ocorreu algum erro ao conseguirmos recuperar seu nome, se não estiver logado volte e faça login imediatamente'
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(email == '' || email == undefined){
        warning.innerText = 'Provavelmente ocorreu algum erro ao conseguirmos recuperar seu email, se não estiver logado volte e faça login imediatamente'
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(PetData == null){
        warning.innerText = 'Erro ao escolher um dos Pets, volte para a página adote e escolha seu pet novamente'
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(address == ''){
        warning.innerText = 'O campo de endereço está vazio, volte e preencha-o por favor.'
        movingBack3()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(cep == ''){
        warning.innerText = 'O campo de cep está vazio, volte e preencha-o por favor.'
        movingBack3()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(city == ''){
        warning.innerText = 'O campo que especifica sua cidade está vazio, volte e preencha-o por favor'
        movingBack3()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(houseType == ''){
        warning.innerText = 'O campo que especifica seu tipo de moradia está vazio, volte e preencha-o por favor'
        movingBack3()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(petLivingHouse == undefined){
        warning.innerText = 'Precisamos saber se têm algum animal vivendo vivendo em sua casa, e você esqueceu de especificar isso em um campo'
        movingBack4()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(numberPets == ''){
        warning.innerText = 'Você esqueceu de nos falar quantos pets vivem em sua casa, se não tiver nenhum coloque 0, mas precisa preencher o campo de numero de pets'
        movingBack4()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(petOwnership == ''){
        warning.innerText = 'Preencha o campo de posse do animal, se não possuir um animal coloque como 0'
        movingBack4()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(homeEnvironment == 'null'){
        warning.innerText = 'Você esqueceu de escolher a opção que mais se assemalhe-lhe ao seu ambiente doméstico'
        movingBack4()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(familyActivity == 'null'){
        warning.innerText = 'Você esqueceu de nos informar o nivel de atividade da familia.'
        movingBack4()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(reasonsAdoption == ''){
        warning.innerText = 'Precisamos saber o porque você deseja adotar um pet.'
        movingBack5()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(numberChild == ''){
        warning.innerText = 'Você esqueceu de nos informar a quantidade de crianças na casa.'
        movingBack6()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(numberAdults == ''){
        warning.innerText = 'Você esqueceu de nos informar a quantidade de adultos na casa.'
        movingBack6()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    
    // const submitButton = document.getElementById("submit-btn");


        console.log(termsCheckbox)
        if (termsCheckbox) {
            termsCheckbox = "concordo"
            console.log(termsCheckbox)
        } else {
            alert('você deve aceitar os termos e condições')
            termsCheckbox = "discordo"
            console.log(termsCheckbox)
            return;
        }
        console.log(termsCheckbox)



    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('cep', cep);
    formData.append('city', city);
    formData.append('house_type', houseType);
    formData.append('pet_living_house', petLivingHouse);
    formData.append('number_pets', numberPets);
    formData.append('pet_ownership', petOwnership);
    formData.append('home_environment', homeEnvironment);
    formData.append('family_activity', familyActivity);
    formData.append('reasons_adoption', reasonsAdoption);
    formData.append('number_child', numberChild);
    formData.append('number_adults', numberAdults);
    formData.append('terms_and_conditions', termsCheckbox);
    formData.append('Pet', JSON.stringify(Object.values(PetData)));

    try {
        const response = await fetch('http://localhost:8080/adopter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        });

        const text = await response.text();
        console.log('Server response:', text);

        if (response.ok) {
            const result = text ? JSON.parse(text) : {};
            alert('Adoption form submitted successfully!');
            const headerForm = document.getElementById('progressContainer')
            headerForm.style.display = "none"
            const form5 = document.getElementById("form5") 
            form5.style.display = "none";
            const sucess = document.getElementById("sucess-form") 
            sucess.style.display = "block";
            const imgSucess = document.getElementById('img-pet-sucess')
            imgSucess.src = `http://localhost:8080/pet${PetData.photopetUrl}`
            const sucessForm = document.getElementById('sucess-form')
            sucessForm.style.display = "block"
            localStorage.removeItem('PetId');
            console.log(result);
        } else {
            alert('Error submitting the form');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form');
    }
}
