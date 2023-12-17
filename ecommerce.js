const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
let signUpButton = document.getElementById("signUpButton")
let modal = document.querySelector(".modal")
let cancelbtn=document.getElementById("cancelbtn")
let design= document.getElementById("design")
close.addEventListener("click", () => {
    menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
    menu.style.visibility = "visible";
});
signUpButton.addEventListener("click", () => {
    console.log("")
    modal.style.display = "flex"
    

});
cancelbtn.addEventListener("click", ()=> {
    modal.style.display="none"
    

})
