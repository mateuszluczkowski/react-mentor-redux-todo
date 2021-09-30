import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";

import App from "App";
import store from "store";

const root = document.querySelector(".root");

ReactDOM.render(
   <Provider store={store}>
      <Helmet>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
         <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
            rel="stylesheet"
         />
      </Helmet>

      <App />
   </Provider>,
   root
);
