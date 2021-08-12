import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import  store  from "../src/redux/store/store";
import { Provider } from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));