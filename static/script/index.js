var loginform= document.querySelector('.forms .body-login');
var signupform= document.querySelector('.forms .body-signup');

function showSignup(){
    loginform.classList.add('hide');
    signupform.classList.remove('hide');
}
function showLogin(){
    loginform.classList.remove('hide');
    signupform.classList.add('hide');
}
function exit(){
    document.getElementById("edit").classList.add("hide");
}

function showEdit(dic = []){
    document.getElementById("edit").classList.remove("hide");
    let a = document.createElement('a')
    a.href = "#edit";
    a.click();
}
function rating(r){
    
    let stars = document.querySelectorAll(".movie .review .star")
    for (let i = 0; i < 4; i++){
        if(i < r-1){
            stars[i].src = "./static/images/active_star.png";
        }else{
            if(localStorage.getItem("mode") != "dark"){
                stars[i].src = "./static/images/star_black.png";
            }else{
                stars[i].src = "./static/images/star_white.png";
            }
        }
    }
}
function goTo(href = "#"){
    let a = document.createElement('a')
    a.href = href;
    a.click();
    

}

function setMaxHeight() {
    var contentHeight = document.body.scrollHeight;
    console.log(contentHeight)
    var viewportHeight = window.innerHeight;
    console.log(viewportHeight)
    var maxHeight = Math.max(contentHeight, viewportHeight)+ "px";
    document.body.height = maxHeight;
    document.querySelector('.height').style.height = maxHeight;
}

// Call the function initially and on window resize
setMaxHeight();
window.addEventListener("resize", setMaxHeight);