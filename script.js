// js to hide and diplay side bar

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    // on clicking it we need to change the width of side bar

    //toggle simuntaneously toggles bw both the values
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
} 