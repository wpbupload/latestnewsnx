// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { ThemeProvider } from "@fluentui/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./news.css";
import reportWebVitals from "./reportWebVitals";

initializeIcons();

const render = (Component: any) => {
  ReactDOM.render(
    <ThemeProvider>
      <Component />
    </ThemeProvider>,
    document.getElementById("root")
  );
};

render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
