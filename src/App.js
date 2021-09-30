import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import { GlobalStyle, theme } from "theme";
import { Header, InputTodo, List, TodoWindow, Wrapper } from "components";

const App = () => {
   const isMobile = useSelector((state) => state.themeToggle.isMobile);
   const isDark = useSelector((state) => state.themeToggle.isDark);
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle isMobile={isMobile} isDark={isDark} />
         <Wrapper>
            <TodoWindow>
               {" "}
               <Header />
               <InputTodo />
               <List />
            </TodoWindow>
         </Wrapper>
      </ThemeProvider>
   );
};
export default App;
