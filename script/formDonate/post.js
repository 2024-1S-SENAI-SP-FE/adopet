const RegisterPet = async (event) => {
    event.preventDefault();

    const selectedRadio = document.querySelector('input[name="specie"]:checked');
    const selectedValue = selectedRadio ? selectedRadio.value : 'None';

    const age = document.getElementById('age').value.toUpperCase();
    const genders = document.getElementById('gender').value.toUpperCase();
    const sizePet = document.getElementById('display').innerText.toUpperCase();
    const name = document.getElementById('name').value;
    const situation = document.getElementById('situation-select').value.toUpperCase();
    const color =  document.getElementById('color').value;
    const story = document.getElementById('petStory').value;
    const nameTutor = document.getElementById('tutorName').value;
    const emailTutor = document.getElementById('tutorEmail').value;
    const tutorPhoneFix = document.getElementById('phone-fix').value;
    const tutorPhoneCel = document.getElementById('phone-cel').value;
    const tutorPreferences = document.getElementById('tutorPreferences').value;
    const warning = document.getElementById('warning')
    if(age == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    if(genders == ''){
        warning.innerText = 'Preencha o campo que especifica o gênero do Pet isso é importante.'
    }
    if(sizePet == ''){
        warning.innerText = 'Preencha o campo de porte/tamanho do pet do Pet isso é importante.'
    }
    if(name == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    if(situation == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    if(color == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    if(story == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    if(nameTutor == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    if(emailTutor == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    if(tutorPhoneFix == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    if(tutorPhoneCel == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    if(tutorPreferences == ''){
        warning.innerText = 'Preencha o campo de idade do Pet isso é importante.'
    }
    
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
    formData.append('species', "CACHORRO");
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
            imgSucess.src = `'http://localhost:8080/pet/PetData.photopet_url`
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

