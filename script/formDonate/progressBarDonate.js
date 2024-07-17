
// function movingArrowReverse(){
//     window.history.back();
    
// }

const updateDisplay = (value) => {
    var display = document.getElementById('display');
    var small = document.getElementById('small')
    var medium = document.getElementById('medium')
    var large = document.getElementById('large')
    if (value == 1) {
        display.innerHTML = 'pequeno';
        small.src = '../../assets/paw-print(1).png'
        medium.src = '../../assets/paw-print.png'
        large.src = '../../assets/paw-print.png'
    } else if (value == 2) {
        display.innerHTML = 'médio';
        small.src = '../../assets/paw-print.png'
        medium.src = '../../assets/paw-print(1).png'
        large.src = '../../assets/paw-print.png'
       
    } else if (value == 3) {
        display.innerHTML = 'grande';
        small.src = '../../assets/paw-print.png'
        medium.src = '../../assets/paw-print.png'
        large.src = '../../assets/paw-print(1).png'
    }
}

function movingBack1(){

    const form5 = document.getElementById("form5") 
    form5.style.display = "none";
    
    const form1 = document.getElementById("form1") 
    form1.style.display = "none";

    const adoptPage1 = document.getElementById("adoptPage1")
    adoptPage1.style.display = "flex";

    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.visibility = "hidden";
    
    const localIcon = document.getElementById("localImg")
    localIcon.src = "assets/situationIcon.svg";
    
    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "10.6%";

    const redLine1 = document.getElementById("redLine1")
    redLine1.style.visibility = "hidden";
    
    const redLine2 = document.getElementById("redLine2")
    redLine2.style.visibility = "visible";
    redLine2.style.color = "rgb(255, 0, 0)";
    
}


function movingArrow1() {
    // ---- do INICIO >>> ENDEREÇO -----
    
    // ---- Tiarndo Paginas---------
    const adoptPage1 = document.getElementById("adoptPage1")
    adoptPage1.style.display = "none";

    const form2 = document.getElementById("form2") 
    form2.style.display = "none";

    const form3 = document.getElementById("form3") 
    form3.style.display = "none";
    
    const form5 = document.getElementById("form5") 
    form5.style.display = "none";


    
    // --------------------------------------------------

    const form1 = document.getElementById("form1") 
    form1.style.display = "flex";
    
    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "28.6%";
    
    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.visibility = "visible";
    catIconProgress.style.left = "17%";
    catIconProgress.style.bottom = "52%";
    
    const redLine1 = document.getElementById("redLine1")
    redLine1.style.visibility = "visible"
    redLine1.style.color = "#FFB30D"
    
    const redLine2 = document.getElementById("redLine2")
    redLine2.style.visibility = "hidden";

    // ------ Comando para bota a imagem do endereço laranja c/ borda verm
     
    const localIcon = document.getElementById("localImg")
    localIcon.src = "assets/situationIconSelected.svg";
    
}

//---------------------    -------------------//


function movingArrow2() {
    // --- de Endereço >>> Historico de Anim.

    // ---- Tiarndo Paginas---------
    const adoptPage1 = document.getElementById("adoptPage1") 
    adoptPage1.style.display = "none";
    
    const form1 = document.getElementById("form1") 
    form1.style.display = "none";

    const form3 = document.getElementById("form3") 
    form3.style.display = "none";

    const form4 = document.getElementById("form4") 
    form4.style.display = "none";

    const form5 = document.getElementById("form5") 
    form5.style.display = "none";

// --------------------------------------------------
    const form2 = document.getElementById("form2") 
    form2.style.display = "flex";

    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "46.9%";

    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.visibility = "visible";

    catIconProgress.style.left = "35%";
    catIconProgress.style.bottom = "52%";
    
    const redLine3 = document.getElementById("redLine3")
    redLine3.style.visibility = "hidden"
    
    const redLine2 = document.getElementById("redLine2")
    redLine2.style.visibility = "visible";
    redLine2.style.color = "#FFB30D";

    const redLine1 = document.getElementById("redLine1")
    redLine1.style.visibility = "visible"
    redLine1.style.color = "#FFB30D"


    // ------ Trocando endereço para laranja e Histórico para selecionado

    const localIcon = document.getElementById("localImg")
    localIcon.src = "assets/situationIconOrange.svg";
    
    const pawIcon1 = document.getElementById("pawIcon1")
    pawIcon1.src = "assets/pictureIconSelected.svg";
    
    
}
// ---------------------------MOVING BACK e NEXT 3-------------------------------------------------------
function movingBack3(){

    // ---- Tiarndo Paginas---------
    const adoptPage1 = document.getElementById("adoptPage1")
    adoptPage1.style.display = "none";

    const form2 = document.getElementById("form2") 
    form2.style.display = "none";

    const form3 = document.getElementById("form3") 
    form3.style.display = "none";
    
    const form5 = document.getElementById("form5") 
    form5.style.display = "none";
    // --------------------------------------------------

    const form1 = document.getElementById("form1") 
    form1.style.display = "flex";
    
    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "28.6%";

    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.visibility = "visible";
    catIconProgress.style.left = "17%";
    catIconProgress.style.bottom = "52%";

    const redLine1 = document.getElementById("redLine1")
    redLine1.style.visibility = "visible"
    redLine1.style.color = "#FFB30D"
    
    const redLine2 = document.getElementById("redLine2")
    redLine2.style.visibility = "hidden";

    const redLine3 = document.getElementById("redLine3")
    redLine3.style.visibility = "visible";
    redLine3.style.color = "rgb(255, 0, 0)";

    // --------------------------------------------------------
    const pawIcon1 = document.getElementById("pawIcon1")
    pawIcon1.src = "assets/pictureIcon.svg";

    const localIcon = document.getElementById("localImg")
    localIcon.src = "assets/situationIconSelected.svg";
}

function movingArrow3() {

 // --- de Historico de Anim. >>>> Motivo da adoção
// ---- Tiarndo Paginas---------
    const form2 = document.getElementById("form2") 
    form2.style.display = "none";
    
    const form1 = document.getElementById("form1") 
    form1.style.display = "none";
    
    const form4 = document.getElementById("form4") 
    form4.style.display = "none";
    
    const form5 = document.getElementById("form5") 
    form5.style.display = "none";
    
    // ----------------------------------
    const form3 = document.getElementById("form3") 
    form3.style.display = "flex";

    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "64.5%";

    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.left = "53%";
    catIconProgress.style.bottom = "52%";
    
    const redLine4 = document.getElementById("redLine4")
    redLine4.style.visibility = "hidden";

    const redLine3 = document.getElementById("redLine3")
    redLine3.style.visibility = "visible";
    redLine3.style.color = "#FFB30D";

    // ------ Trocando historico animais para laranja e motido de adoçao para selecionado
    const pawIcon1 = document.getElementById("pawIcon1")
    pawIcon1.src = "assets/pictureIconOrange.svg";

    const pawIcon2 = document.getElementById("pawIcon2")
    pawIcon2.src = "assets/healthIconSelected.svg";

}

// --------------------------------------------------------------------------------------------------------------

function movingBack4() {

    const form5 = document.getElementById("form5") 
    form5.style.display = "none";
    
    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "46.9%";

    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.left = "35%";
    catIconProgress.style.bottom = "52%";

    const form2 = document.getElementById("form2") 
    form2.style.display = "flex";

    const form3 = document.getElementById("form3") 
    form3.style.display = "none";

    const redLine3 = document.getElementById("redLine3")
    redLine3.style.visibility = "hidden";

    const redLine4 = document.getElementById("redLine4")
    redLine4.style.visibility = "visible";
    redLine4.style.color = "rgb(255, 0, 0)";
    
    const redLine5 = document.getElementById("redLine5")
    redLine5.style.visibility = "visible";
    redLine5.style.color = "rgb(255, 0, 0)";
    

    const pawIcon2 = document.getElementById("pawIcon2")
    pawIcon2.src = "assets/healthIcon.svg";

    const pawIcon1 = document.getElementById("pawIcon1")
    pawIcon1.src = "assets/pictureIconSelected.svg";
    
}

function movingArrow4() {
 // --- de Motivação de adoção >>> Composição familiar
// ---- Tirando Paginas---------
    const form3 = document.getElementById("form3") 
    form3.style.display = "none";
    
    const form5 = document.getElementById("form5") 
    form5.style.display = "none";
// -----------------------------------------------
    const form4 = document.getElementById("form4") 
    form4.style.display = "flex";

    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.visibility = "visible";
    orangeArrow.style.left = "82.5%";

    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.left = "71%";
    catIconProgress.style.bottom = "52%";

    const redLine5 = document.getElementById("redLine5")
    redLine5.style.visibility = "hidden";

    const redLine4 = document.getElementById("redLine4")
    redLine4.style.visibility = "visible";
    redLine4.style.color = "#FFB30D";

    // ------ Trocando  motido de adoçao para laranja e Composição familiar p/ selecionado

    const pawIcon2 = document.getElementById("pawIcon2")
    pawIcon2.src = "assets/healthIconOrange.svg";
    
    const familyIcon = document.getElementById("familyIcon")
    familyIcon.src = "assets/contactIconSelected.svg";
    
}


function movingBack5() {

    const form5 = document.getElementById("form5") 
    form5.style.display = "none";

    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "64.5%";

    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.left = "53%";
    catIconProgress.style.bottom = "52%";

    // const form4 = document.getElementById("form4") 
    // form4.style.display = "flex";
    const form3 = document.getElementById("form3") 
    form3.style.display = "flex";

    const form4 = document.getElementById("form4") 
    form4.style.display = "none";


    const redLine4 = document.getElementById("redLine4")
    redLine4.style.visibility = "hidden";

    const redLine5 = document.getElementById("redLine5")
    redLine5.style.visibility = "visible";
    redLine5.style.color = "rgb(255, 0, 0)";

    const familyIcon = document.getElementById("familyIcon")
    familyIcon.src = "assets/contactIcon.svg";

    const pawIcon2 = document.getElementById("pawIcon2")
    pawIcon2.src = "assets/healthIconSelected.svg";

    
}


function movingArrow5() {
    // --- de Composição familiar >>>> Confirmação

// ---- Tirando Paginas---------
const form4 = document.getElementById("form4") 
    form4.style.display = "none";
// --------------------------------------------------------------
    const form5 = document.getElementById("form5") 
    form5.style.display = "flex";

    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.visibility = "hidden";

    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.left = "88%";
    catIconProgress.style.bottom = "52%";

    const redLine5 = document.getElementById("redLine5")
    redLine5.style.visibility = "visible";
    redLine5.style.color = "#FFB30D";

// ------ Trocando Composição familiar para laranja e Confirmação p/ selecionado

    const familyIcon = document.getElementById("familyIcon")
    familyIcon.src = "assets/contactIconOrange.svg";
    
    const checkIcon = document.getElementById("checkIcon")
    checkIcon.src = "assets/checkSelected.svg";
}

function movingBack6() {

    const form5 = document.getElementById("form5") 
    form5.style.display = "none";

    const form4 = document.getElementById("form4") 
    form4.style.display = "flex";

    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "82.5%";
    orangeArrow.style.visibility = "visible";

    const catIconProgress = document.getElementById("catIconProgress")
    catIconProgress.style.left = "71%";
    catIconProgress.style.bottom = "52%";


    const redLine5 = document.getElementById("redLine5")
    redLine5.style.visibility = "hidden";

    const familyIcon = document.getElementById("familyIcon")
    familyIcon.src = "assets/contactIconSelected.svg";

    const checkIcon = document.getElementById("checkIcon")
    checkIcon.src = "assets/checkIcon.svg";



    
}


// de confirmação para a proxima pagina, so tirar a barra de progresso e deixar vazio
// ainda não terminei o codigo
// function movingArrow6() {
//     const progressBar = document.getElementById("progressContainer")
//     progressBar.style.display = "none";

//     const form5 = document.getElementById("form5") 
//     form5.style.display = "none";

//     const form6 = document.getElementById("form6") 
//     form6.style.display = "flex";
    


// }

