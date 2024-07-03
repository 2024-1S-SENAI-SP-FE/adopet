let termsCheckbox = document.getElementById('terms').checked
const submitButton = document.getElementById("submit-btn");

if(termsCheckbox){
submitButton.disabled = false
}else{
    alert('você deve aceitar os termos e condições')
    submitButton.disabled = true
}
async function submitAdoptionForm() {
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

    const name = userData.Name;
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
    const termsCheckbox = "concordo"

//     console.log(termsCheckbox)
//     if(termsCheckbox){
//     submitButton.disabled = false
//     termsCheckbox = "concordo"
//     }else{
//     alert('você deve aceitar os termos e condições')
//     termsCheckbox = "discordo"
//     console.log(termsCheckbox)
//     submitButton.disabled = true
//     return "você não aceitou os termos"
// }

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
    formData.append('pet', JSON.stringify(PetData));

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
