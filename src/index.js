import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "store";
import { GlobalStyle, theme } from "theme";
import App from "App";

const root = document.querySelector(".root");

ReactDOM.render(
   <Provider store={store}>
      <ThemeProvider theme={theme}>
         <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossorigin
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
               rel="stylesheet"
            />
         </Helmet>
         <GlobalStyle />
         <App />
      </ThemeProvider>
   </Provider>,
   root
);
