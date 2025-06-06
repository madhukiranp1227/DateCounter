import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import App from "./app";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
