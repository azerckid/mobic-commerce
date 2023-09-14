import React from "react";
import styled from "styled-components";

import ProductDetail from "../components/productDetail";

const ProductContainer = styled.div``;
const ProductWrapper = styled.div`
  width: 100vw;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
const ProductFilter = styled.div`
  width: 20vw;
`;
const ProductCategories = styled.div`
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 3cqi;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      font-size: 1rem;
      font-weight: 400;
      text-transform: capitalize;
      margin-bottom: 2rem;
      cursor: pointer;
      &:hover {
        color: #f26a2e;
      }
    }
  }
`;

const ProductBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
const ProductBoxContainer = styled.div`
  width: 70vw;
  div {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

const Product = () => {
  return (
    <ProductContainer>
      <h2># Products</h2>
      <p>Home . Products</p>
      <ProductWrapper>
        <ProductFilter>
          <ProductCategories>
            <h4>Categories</h4>
            <ul>
              <li>paper wallet</li>
              <li>paper wallet by mobic</li>
              <li>paper wallet by mobicus</li>
            </ul>
          </ProductCategories>
        </ProductFilter>
        <ProductBox>
          <div>
            <ProductBoxContainer>
              {ProductDetail.map((item) => {
                return (
                  <div key={item.id}>
                    <img src={item.img} alt="" />
                    <h4>{item.Title}</h4>
                    <p>{item.cat}</p>
                    <p>{item.Price}</p>
                  </div>
                );
              })}
            </ProductBoxContainer>
          </div>
        </ProductBox>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Product;
