import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const AppContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext.Provider value={"Hello"}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>
);

export { AppContext };
