import { useDispatch, useSelector } from "react-redux";
import { toggle } from "reducers/themeToggle.reducer";

import { ThemeButton, ThemeIcon, Title, Wrapper } from "./Header.css";

const Header = () => {
   const dispatch = useDispatch();
   const isDarkTheme = useSelector((state) => state.themeToggle.isDarkTheme);
   const switchTheme = () => dispatch(toggle("isDarkTheme"));

   return (
      <Wrapper>
         <Title>todo</Title>
         <ThemeButton onClick={() => switchTheme()}>
            <ThemeIcon isDarkTheme={isDarkTheme} />
         </ThemeButton>
      </Wrapper>
   );
};
export default Header;
