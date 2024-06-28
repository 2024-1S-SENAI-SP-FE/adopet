// const orangeArrow = document.getElementById("arrow-start")
// const localIcon = document.getElementById("localImg")
// const redLine1 = document.getElementById("redLine1")
// const redLine2 = document.getElementById("redLine2")

function movingArrow1() {
    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "28.6%";
    
    const redLine1 = document.getElementById("redLine1")
    redLine1.style.visibility = "visible"
    redLine1.style.color = "#FFB30D"

    const redLine2 = document.getElementById("redLine2")
    redLine2.style.visibility = "hidden";

    const localIcon = document.getElementById("localImg")
    localIcon.src = "assets/localconPresent.svg";
    
    const localIconSelected = document.getElementById("localImgSelected")    
}

function movingArrow2() {
    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "46.9%";
    
    const redLine3 = document.getElementById("redLine3")
    redLine3.style.visibility = "hidden"
    
    const redLine2 = document.getElementById("redLine2")
    redLine2.style.visibility = "visible";
    redLine2.style.color = "#FFB30D";

    const localIcon = document.getElementById("localImg")
    localIcon.src = "assets/localIconOrange.svg";
    
    const pawIcon1 = document.getElementById("pawIcon1")
    pawIcon1.src = "assets/pawIconSelected.svg";
    
    
}

function movingArrow3() {
    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "64.5%";
    
    const redLine4 = document.getElementById("redLine4")
    redLine4.style.visibility = "hidden";

    const pawIcon1 = document.getElementById("pawIcon1")
    pawIcon1.src = "assets/pawOrange.svg";

    const pawIcon2 = document.getElementById("pawIcon2")
    pawIcon2.src = "assets/pawIconSelected.svg";

    const redLine3 = document.getElementById("redLine3")
    redLine3.style.visibility = "visible";
    redLine3.style.color = "#FFB30D";
}

function movingArrow4() {
    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.left = "82.5%";

    const redLine5 = document.getElementById("redLine5")
    redLine5.style.visibility = "hidden";

    const pawIcon2 = document.getElementById("pawIcon2")
    pawIcon2.src = "assets/pawOrange.svg";
    
    const familyIcon = document.getElementById("familyIcon")
    familyIcon.src = "assets/familySelected.svg";
    
    const redLine4 = document.getElementById("redLine4")
    redLine4.style.visibility = "visible";
    redLine4.style.color = "#FFB30D";
}

function movingArrow5() {
    const orangeArrow = document.getElementById("arrow-start")
    orangeArrow.style.visibility = "hidden";

    const redLine5 = document.getElementById("redLine5")
    redLine5.style.visibility = "visible";
    redLine5.style.color = "#FFB30D";


    const checkIcon = document.getElementById("checkIcon")
    checkIcon.src = "assets/checkSelected.svg";
    
    const familyIcon = document.getElementById("familyIcon")
    familyIcon.src = "assets/familyOrange.svg";

}