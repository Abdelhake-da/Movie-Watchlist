
var light = "#EDF2EF"
var dark = "#212738"
var modeImage= document.querySelector('header button img');
function lightMode(){
    document.body.classList.add('light');
    try {
        document.getElementById("forms").style.backgroundImage = "url(./static/images/background.jpg)";
    } catch (error) {
        
    }
     try {
            let edit_logo = document.querySelector('#edit-logo');
            edit_logo.src = "./static/images/black_edit.png";
        } catch (error) {
            
        }
        try {
            let stars = document.querySelectorAll(".movie .review .star")
            stars.forEach(star => {
                
                star.src = "./static/images/star_black.png";
            });
           
        } catch (error) {
           
        }
        modeImage.src='./static/images/day-mode.png';
        localStorage.setItem("mode", "light");
}
function darkMode(){
    document.body.classList.remove('light');
    try {
        document.getElementById("forms").style.backgroundImage = "url(./static/images/background-dark.jpg)";
    } catch (error) {
        
    }
    try {
        let edit_logo = document.querySelector('#edit-logo');
        edit_logo.src = "./static/images/white_edit.png";
    } catch (error) {
        
    }
    try {
        let stars = document.querySelectorAll(".movie .review .star")
        stars.forEach(star => {
            
            star.src = "./static/images/star_white.png";
        });
       
    } catch (error) {
       
    }
        modeImage.src='./static/images/night-mode.png';
        localStorage.setItem("mode","dark")
}
function changeMode(){
    
    if (localStorage.getItem("mode") == "dark"){
       lightMode();
    }else{ 
        darkMode();
    }
    
}
function getMode(){
    if(localStorage.getItem("mode") == "dark"){
        darkMode();
    }else{
        lightMode();
    }
}
window.addEventListener('load', function() {
    getMode();
  });