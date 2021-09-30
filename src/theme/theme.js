import desktopDark from "../assets/images/bg-desktop-dark.jpg";
import desktopLight from "../assets/images/bg-desktop-light.jpg";
import mobileDark from "../assets/images/bg-mobile-dark.jpg";
import mobileLight from "../assets/images/bg-mobile-light.jpg";

const theme = {
   layout: {
      //pixels
      mobile: 768,
      desktop: 1440,
   },
   colors: {
      primary: {
         brightBlue: "hsl(220,98%,61%)",
         checkBackground: {
            backgroundColor: "rgb(87,221,255)",
            background:
               " linear-gradient(135deg, rgba(87,221,255,1) 0%, rgba(192,88,243,1) 100%)",
         },
      },
      lightTheme: {
         veryLightGray: "hsl(0, 0%, 98%)",
         veryLightGrayishBlue: "hsl(236, 33%, 92%)",
         lightGrayishBlue: "hsl(233, 11%, 84%)",
         darkGrayishBlue: "hsl(236, 9%, 61%)",
         veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      },
      darkTheme: {
         veryDarkBlue: "hsl(235, 21%, 11%)",
         veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
         lightGrayishBlue: "hsl(234, 39%, 85%)",
         lightGrayishBlueHover: "hsl(236, 33%, 92%)",
         darkGrayishBlue: "hsl(234, 11%, 52%)",
         veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
         veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
      },
   },
   typography: {
      color: {
         lightTheme: "hsl(235, 19%, 35%)",
         darkTheme: "hsl(234, 39%, 85%)",
      },
      fontSize: { desktop: "18px", mobile: "15px" },
      fontFamily: "'Josefin Sans', sans-serif;",
   },
   background: {
      light: { mobile: mobileLight, desktop: desktopLight },
      dark: { mobile: mobileDark, desktop: desktopDark },
   },
};
export default theme;
