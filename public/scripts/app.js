
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const  submenu = document.querySelector(".submenu");


const submenuOpenBtn2 = document.querySelector(".submenu-open-btn2");
const  submenu2 = document.querySelector(".submenu2");











   

submenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("rotate-90");

    submenu.classList.toggle("submenu--open");
})
submenuOpenBtn2.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("rotate-90");

    submenu2.classList.toggle("submenu--open2");
})

import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Dropdown, Ripple });



