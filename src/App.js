import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Nav from "./nav";
import Route from "./route";
import Footer from "./components/Footer";

import ProductDetail from "./components/productDetail";

const AppContainer = styled.div`
  width: 100vw;
`;

function App() {
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(ProductDetail);
  const searchBtn = (product) => {
    const change = ProductDetail.filter((item) => {
      return item.cat === product;
    });
    setProduct(change);
  };
  const view = (item) => {
    setDetail([{ ...item }]);
    setClose(true);
  };
  return (
    <AppContainer>
      <BrowserRouter>
        <Nav searchBtn={searchBtn} />
        <Route
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
        />
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
