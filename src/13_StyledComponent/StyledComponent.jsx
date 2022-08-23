import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Button } from "./Style";

const theme = {
   white: "#fff",
   red: "#f00",
   black: "#000",
   blue: "#0000fe",
   green: "#00fe00",
};

const GlobalStyle = createGlobalStyle`
   body {
      font-size: 16px;
      font-weight: 400;
      color: #333;
   }
   .myContainer {
      display: block;
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;

   }

`;

const StyledComponent = () => {
   return (
      <ThemeProvider theme={theme}>
         <div className="myContainer">
            <h1>StyledComponent</h1>
            <Button>Hello World!!!</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="success" disabled>
               Success
            </Button>
         </div>

         <GlobalStyle />
      </ThemeProvider>
   );
};

export default StyledComponent;
