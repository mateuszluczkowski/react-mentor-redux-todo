import { ThemeButton, ThemeIcon, Title, Wrapper } from "./Header.css";

const Header = ({ isDark }) => {
   return (
      <Wrapper>
         <Title>todo</Title>
         <ThemeButton>
            <ThemeIcon isDark={isDark} />
         </ThemeButton>
      </Wrapper>
   );
};
export default Header;
