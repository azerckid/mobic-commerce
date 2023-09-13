import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Nav from "./nav";
import Route from "./route";

const AppContainer = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <AppContainer >
      <BrowserRouter>
        <Nav />
        <Route />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
