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
  const [cart, setCart] = useState([]);
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

  const exist = (id) => {
    return cart.find((item) => {
      return item.id === id;
    });
  };
  const addtoCart = (item) => {

    if (exist(item.id)) {
      alert("Item already added to cart");
      return;
    }
    setCart([...cart, { ...item, qty: 1 }]);
    alert("Item added to cart");
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
          cart={cart}
          setCart={setCart}
          addtoCart={addtoCart}
        />
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
