import { WrapperStyled } from "./Wrapper.css";

import { useSelector } from "react-redux";

const Wrapper = ({ children }) => {
   const isDarkTheme = useSelector((state) => state.themeToggle.isDarkTheme);
   const isMobile = useSelector((state) => state.themeToggle.isMobile);

   return (
      <WrapperStyled isDarkTheme={isDarkTheme} isMobile={isMobile}>
         {children}
      </WrapperStyled>
   );
};
export default Wrapper;
