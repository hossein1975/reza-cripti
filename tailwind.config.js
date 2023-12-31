/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}","./node_modules/tw-elements/dist/js/**/*.js", "./node_modules/flowbite/**/*.js","./node_modules/tailwindcss-animated/**/*.js"],
 
 
  theme: {
    extend: {
      fontFamily:{
       
        "WorkSansBold":"Work Sans Bold",
        "RobotoMedium":"Roboto Medium",
       
        "WorkSansMedium":"Work Sans Medium",
        "Montserrat":"Montserrat",
        "WorkSansExtraBold":"Work Sans ExtraBold",
        "WorkSansSemiBold":"Work Sans SemiBold",
        "WorkSansRegular":"Work Sans Regular",
        
        
      },
      colors:{
        cman:"#E3DEEA",
        cman2:"#f7f7f7",
        cman3:"#e57665",
        gray1:"#828282",
        whiteman:"#f7f7f7"
        
      },
      spacing:{
        "18":"4.5rem",
        
      },
      fontSize:{
        "5xlp":"52px",
        "2xlk":"22px",
      }
      
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  },

  require("tw-elements/dist/plugin.cjs"),
  require('flowbite/plugin'),
  require("tailwindcss-animated"),
  ],
}



