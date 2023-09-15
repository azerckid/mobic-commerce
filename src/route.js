import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";

const Rout = ({ product, setProduct, detail, view, close, setClose }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/product"
          element={
            <Product
              product={product}
              setProduct={setProduct}
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Rout;
