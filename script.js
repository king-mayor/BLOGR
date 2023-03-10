const navLinks = document.querySelector(".toggle-links");
const hamburger = document.querySelector(".menu-icon");

// Add a click event to the hamburger menu<!doctype html>
hamburger.addEventListener("click", function (){
    if(navLinks.classList.contains("active")){
        navLinks.classList.remove("active");
    }else{
        navLinks.classList.add("active");
    }
})
// add on-scroll animation
window.addEventListener("scroll", function (){
    if(window.pageYOffset > 100){
        navLinks.classList.remove("active");
    }
})