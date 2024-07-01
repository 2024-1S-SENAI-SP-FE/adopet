
async function submitAdoptionForm() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const radioButtons = document.getElementsByName('info-pets');
    let selectedValue;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            break;
        }
    }
    const formData = new FormData();

    const name = userData.name
    const email = userData.email;
    const address = document.getElementById("address").value;
    const cep = document.getElementById("cep").value;
    const city = document.getElementById("city").value;
    const houseType = document.getElementById("houseType").value;
    const petLivingHouse = selectedValue; // Replace with dynamic value
    const numberPets = 4; // Replace with dynamic value
    const petOwnership = "Tenho"; // Replace with dynamic value
    const homeEnvironment = "Calmo"; // Replace with dynamic value
    const familyActivity = "Moderado"; // Replace with dynamic value
    const reasonsAdoption = "Amor aos animais"; // Replace with dynamic value
    const numberChild = 2; // Replace with dynamic value
    const numberAdults = 2; // Replace with dynamic value
    const termsAndConditions = "Concordo"; // Replace with dynamic value

    formData.append('name', name)
    formData.append('email', email)
    formData.append('address', address)
    formData.append('cep', cep)
    formData.append('city', city)
    formData.append('house_type', houseType)
    formData.append('pet_living_house', petLivingHouse)
    formData.append('number_pets', numberPets)
    formData.append('pet_ownership', petOwnership)
    formData.append('home_environment', homeEnvironment)
    formData.append('family_activity', familyActivity)
    formData.append('reasons_adoption', reasonsAdoption)
    formData.append('number_child', numberChild)
    formData.append('number_adults', numberAdults)
    formData.append('terms_and_conditions', termsAndConditions)

    // const data = {
    //     name: name,
    //     email: email,
    //     address: address,
    //     cep: cep,
    //     city: city,
    //     houseType,
    //     pet_living_house: petLivingHouse,
    //     number_pets: numberPets,
    //     pet_ownership: petOwnership,
    //     home_environment: homeEnvironment,
    //     family_activity: familyActivity,
    //     reasons_adoption: reasonsAdoption,
    //     number_child: numberChild,
    //     number_adults: numberAdults,
    //     terms_and_conditions: termsAndConditions
    // };

    // try {
    //     const response = await fetch('http://localhost:8090/adoption', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: formData
    //     });

    //     if (response.ok) {
    //         const result = await response.json();
    //         alert('Adoption form submitted successfully!');
    //         console.log(result);
    //     } else {
    //         alert('Error submitting the form');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    //     alert('An error occurred while submitting the form');
    // }
    try {
        const response = await fetch('http://localhost:8090/adoption', {
        method: 'POST',
            body: formData
        });

             if (response.ok) {
            const result = await response.json();
            alert('Adoption form submitted successfully!');
            console.log(result);
        } else {
            alert('Error submitting the form');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form');
    }
}