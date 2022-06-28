
"use strict"
const navbar=document.querySelector(".navbar-menu")
document.querySelector('.toggle__menu').addEventListener("click",(e)=>{e.preventDefault();e.target.classList.toggle("is-active");navbar.classList.toggle("open")
document.querySelector(".section__header").classList.toggle("move__down");});