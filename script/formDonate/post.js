
function wrapTextWithSpan(text) {
    return text.split('').map(char => `${char}`).join('');
}

const RegisterPet = async () => {

    // event.preventDefaul't();

    const button = document.getElementById('submit-btn')
    const newText = 'Enviando...';
    button.innerText = wrapTextWithSpan(newText);
    button.classList.add('jumping-text');

    const selectedRadio = document.querySelector('input[name="specie"]:checked');
    const selectedValue = selectedRadio ? selectedRadio.value : 'None';

    const age = document.getElementById('age').value.toUpperCase();
    const genders = document.getElementById('gender').value.toUpperCase();
    const sizePet = document.getElementById('display').innerText.toUpperCase();
    const name = document.getElementById('name-pet').value;
    const situation = document.getElementById('situation-select').value.toUpperCase();
    const color =  document.getElementById('color').value;
    const story = document.getElementById('petStory').value;
    const nameTutor = document.getElementById('tutorName').value;
    const emailTutor = document.getElementById('tutorEmail').value;
    const tutorPhoneFix = document.getElementById('phone-fix').value;
    const tutorPhoneCel = document.getElementById('phone-cel').value;
    const tutorPreferences = document.getElementById('tutorPreferences').value;
    const warning = document.getElementById('warning')
    let warningInput = document.getElementById('warning-inputs')

    if(age == 'TODOS'){
        warning.innerText = 'Você esqueceu de epecificar em qual periodo de vida o pet está, se ele é filhote, adulto ou idoso.'
        movingBack3()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(genders == 'SEXO'){
        warning.innerText = 'Você esqueceu de especificar o gênero do pet, essa informação é importante para nós.'
        movingBack3()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(sizePet == 'QUAL O PORTE DO PET'){
        warning.innerText = 'Você esqueceu de especificar o porte do pet, volte e especifique por favor.'
        movingBack3()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    // else if(name == ''){
    //     warning.innerText = 'Você esqueceu de especificar o nome do pet, precisamos saber disso.'
    //     movingBack3()
    //     warningInput.style.display = 'block'
    //     button.innerText = "Enviar formulario"
    //     return
    // }
    else if(situation == 'TODOS'){
        warning.innerText = 'Precisamos saber em qual situação o pet se encontra, se quiser que ele encontre um lar coloque para adoção, já se encontrou ele perdido, coloque sua situação como perdido, se quiser que ele encontre um tutor deixe como tutor.'
        movingBack3()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(color == 'undefined'){
        warning.innerText = 'Você esqueceu de especificar a cor do pet, se não souber qual a cor ou se a cor não se encontrar na lista de opções coloque como outros.'
        movingBack3()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(story == ''){
        warning.innerText = 'Você esqueceu de dar uma história para seu pet, precisamos dessa informação.'
        movingBack5()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(nameTutor == ''){
        warning.innerText = 'Você esqueceu de preencher seu nome, precisamos saber qual seu nome ou do tutor anterior do pet.'
        movingBack6()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(emailTutor == ''){
        warning.innerText = 'Você esqueceu de preencher seu email, precisamos saber qual seu email ou do tutor anterior do pet.'
        movingBack6()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(tutorPhoneFix == ''){
        warning.innerText = 'Você esqueceu de especificar o número do seu telefone celular, precisamos saber qual seu número ou do tutor anterior do pet, se não possuir apenas coloque 0.'
        movingBack6()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(tutorPhoneCel == ''){
        warning.innerText = 'Você esqueceu de especificar o número do seu telefone fixo, precisamos saber qual seu número ou do tutor anterior do pet, se não possuir um apenas coloque 0.'
        movingBack6()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    else if(tutorPreferences == 'null'){
        warning.innerText = 'você esqueceu de selecionar a preferência de contato.'
        movingBack6()
        warningInput.style.display = 'block'
        button.innerText = "Enviar formulario"
        return
    }
    console.log(name)
    console.log(situation)
    console.log(genders)
    console.log(sizePet)
    console.log(age)
    console.log(selectedValue.toUpperCase())




    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('size', sizePet);
    formData.append('gender', genders);
    formData.append('situation', situation);
    formData.append('species', selectedValue);
    formData.append('color', color);
    formData.append('petstory', story);
    formData.append('lastTutorName', nameTutor);
    formData.append('lastTutorEmail', emailTutor);
    formData.append('lastTutorPhoneFix', tutorPhoneFix);
    formData.append('lastTutorPhoneCel', tutorPhoneCel);
    formData.append('lastTutorPreferences', tutorPreferences);



    

    const temperamentInputs = document.querySelectorAll('input[name=temperament]:checked');
    const careInputs = document.querySelectorAll('input[name=care]:checked');
    const adaptabilityInputs = document.querySelectorAll('input[name=adaptability]:checked');
    const sociabilityInputs = document.querySelectorAll('input[name=sociability]:checked');

    const veterinaryCare = [];
    const temperamentPet = [];
    const adaptabilityPet = [];
    const sociabilityPet = [];

    careInputs.forEach(input => {
        veterinaryCare.push(input.value); 
    });
    temperamentInputs.forEach(input => {
        temperamentPet.push(input.value); 
    });
    adaptabilityInputs.forEach(input => {
        adaptabilityPet.push(input.value); 
    });
    sociabilityInputs.forEach(input => {
        sociabilityPet.push(input.value); 
    });

    formData.append('veterinarycare', JSON.stringify(veterinaryCare)); 
    formData.append('temperament', JSON.stringify(temperamentPet)); 
    formData.append('adaptability', JSON.stringify(adaptabilityPet)); 
    formData.append('socialization', JSON.stringify(sociabilityPet)); 

    const fileInput = document.getElementById('img-input');
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
            alert('Adoption form submitted successfully!');
            const form5 = document.getElementById("form5") 
            form5.style.display = "none";
            const sucess = document.getElementById("sucess-form") 
            sucess.style.display = "block";
            const imgSucess = document.getElementById('img-pet-sucess')
            // imgSucess.src = `http://localhost:8080/pet${PetData.photopetUrl}`
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

