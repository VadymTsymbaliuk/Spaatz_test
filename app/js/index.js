"use strict"

window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar-menu");
    document.querySelector('.toggle__menu').addEventListener("click", (e) => {
        e.preventDefault();
        e.target.classList.toggle("is-active");
        navbar.classList.toggle("open")
        document.querySelector(".section__header").classList.toggle("move__down");
    });


   const softwareItemsContainer = document.querySelector(".software-items__container"),
       softwareItem = softwareItemsContainer.querySelectorAll('.software-item');
    softwareItem.forEach(item=>{
        item.addEventListener("click", ()=>{
            item.classList.toggle("active")
        })
    })
})
