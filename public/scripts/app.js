
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


  import { Select, initTE } from "tw-elements";
initTE({ Select });




import "flowbite";






import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()




function animation() {
    return {
      counter: 0,
      animate(finalCount) {
        let time = 1500 /* Time in milliseconds */
        let interval = 9
        let step = Math.floor(finalCount*interval/time)
        let timer = setInterval(() => {
          this.counter = this.counter + step;
          if (this.counter >= finalCount + step) {
            this.counter = finalCount
            clearInterval(timer);
            timer = null;
            return;
          }
        }, interval);
      }
    };
  }




  import counterUp from 'counterup2'

  const el = document.querySelector( '.counter' )
  
  // Start counting, do this on DOM ready or with Waypoints.
  counterUp( el, {
      duration: 1000,
      delay: 16,
  } )





  