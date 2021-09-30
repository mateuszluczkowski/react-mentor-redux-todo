import { WrapperStyled } from "./Wrapper.css";

import { useSelector } from "react-redux";

const Wrapper = ({ children }) => {
   const isDark = useSelector((state) => state.themeToggle.isDark);
   const isMobile = useSelector((state) => state.themeToggle.isMobile);

   return (
      <WrapperStyled isDark={isDark} isMobile={isMobile}>
         {children}
      </WrapperStyled>
   );
};
export default Wrapper;
