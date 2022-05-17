import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

// React 18
const container = document.getElementById("root");
const root = createRoot(container!); // ts
// const root = createRoot(container); // js

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);

// React 17
// ReactDOM.render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <ThemeProvider theme={darkTheme}>
//         <App />
//       </ThemeProvider>
//     </RecoilRoot>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
