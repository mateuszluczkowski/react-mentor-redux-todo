import { useDispatch, useSelector } from "react-redux";
import { toggle } from "reducers/themeToggle.reducer";

import { ThemeButton, ThemeIcon, Title, Wrapper } from "./Header.css";

const Header = () => {
   const dispatch = useDispatch();
   const isDark = useSelector((state) => state.themeToggle.isDark);
   const handleClick = () => dispatch(toggle("isDark"));

   return (
      <Wrapper>
         <Title>todo</Title>
         <ThemeButton onClick={handleClick}>
            <ThemeIcon isDark={isDark} />
         </ThemeButton>
      </Wrapper>
   );
};
export default Header;
