
const userData = JSON.parse(localStorage.getItem('userData'));
document.getElementById('name-terms').innerText = userData.Name
const inputFile = document.getElementById('img-input');
const previewImage = document.getElementById('previewImage');

// Adicionar um ouvinte para o evento de mudança no input file
inputFile.addEventListener('change', function(event) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.width = "60vw"
            previewImage.style.height = "70vh"

            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

const RegisterPet = async (event) => {
    event.preventDefault();

    const selectedRadio = document.querySelector('input[name="specie"]:checked');
    const selectedValue = selectedRadio ? selectedRadio.value : 'None';

    const age = document.getElementById('age').value.toUpperCase();
    const genders = document.getElementById('gender').value.toUpperCase();
    const sizePet = document.getElementById('display').innerText.toUpperCase();
    const name = document.getElementById('name').value;
    const situation = document.getElementById('situation-select').value;
    const color =  document.getElementById('color').value;
    const story = document.getElementById('petStory').value;
    const nameTutor = document.getElementById('tutorName').value;
    const emailTutor = document.getElementById('tutorEmail').value;
    const tutorPhoneFix = document.getElementById('phone-fix').value;
    const tutorPhoneCel = document.getElementById('phone-cel').value;
    const tutorPreferences = document.getElementById('tutorPreferences').value;

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
    formData.append('LastTutorEmail', emailTutor);
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

