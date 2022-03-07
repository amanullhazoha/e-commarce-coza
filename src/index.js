import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import store from "./modules/core/store";
import App from "./modules/core/index";
import "./modules/core/style/index.scss";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <StrictMode>
                <App />
            </StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
