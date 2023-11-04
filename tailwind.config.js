/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}","./node_modules/tw-elements/dist/js/**/*.js"],
 
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
        cman:"#E3DEEA"
        
      }
      
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  },

  require("tw-elements/dist/plugin.cjs")
  ],
}

