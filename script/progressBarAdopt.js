
// function movingArrowReverse(){
//     window.history.back();
    
// }


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
    localIcon.src = "assets/localconPresent.svg";
    
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

    catIconProgress.style.left = "35%";
    catIconProgress.style.bottom = "52%";
    
    const redLine3 = document.getElementById("redLine3")
    redLine3.style.visibility = "hidden"
    
    const redLine2 = document.getElementById("redLine2")
    redLine2.style.visibility = "visible";
    redLine2.style.color = "#FFB30D";

    // ------ Trocando endereço para laranja e Histórico para selecionado

    const localIcon = document.getElementById("localImg")
    localIcon.src = "assets/localIconOrange.svg";
    
    const pawIcon1 = document.getElementById("pawIcon1")
    pawIcon1.src = "assets/pawIconSelected.svg";
    
    
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
    pawIcon1.src = "assets/pawOrange.svg";

    const pawIcon2 = document.getElementById("pawIcon2")
    pawIcon2.src = "assets/pawIconSelected.svg";

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
    pawIcon2.src = "assets/pawOrange.svg";
    
    const familyIcon = document.getElementById("familyIcon")
    familyIcon.src = "assets/familySelected.svg";
    
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
    familyIcon.src = "assets/familyOrange.svg";
    
    const checkIcon = document.getElementById("checkIcon")
    checkIcon.src = "assets/checkSelected.svg";
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

