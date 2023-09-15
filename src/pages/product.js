import React from "react";
import styled from "styled-components";

import ProductDetail from "../components/productDetail";

import { BsEye } from "react-icons/bs";
import {
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

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

const HomeProducts = styled.div`
  width: 30%;
  margin: 1%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  cursor: pointer;
  li {
    visibility: hidden;
  }
  &:hover {
    li {
      visibility: visible;
      transition: 1s;
    }
  }

  /* background-color: yellowgreen; */
`;
const HomeProductImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
  }
`;
const HomeProductIcon = styled.div`
  margin-top: 2%;
  margin-bottom: 6%;
  position: absolute;
  top: 20%;
  left: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px; */
  li {
    margin-bottom: 2%;
    padding: 4% 6%;
    /* border: 1px solid #e5e5e5; */
    list-style: none;
    cursor: pointer;
  }
  li:hover {
    color: hotpink;
    transition: 0.5s;
  }
`;

const ProductDetailModal = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductDetailContainer = styled.div`
  width: 50vw;
  height: 50vh;
  position: fixed;
  top: 30%;
  left: 25%;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
const ProductDetailBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 3cqi;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      text-transform: capitalize;
      margin-bottom: 2rem;
    }
    button {
      width: 50%;
      padding: 2%;
      border: none;
      outline: none;
      background-color: hotpink;
      color: white;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        background-color: dodgerblue;
        transition: 0.5s;
      }
    }
  }
`;

const Product = ({ product, setProduct, detail, view, close, setClose }) => {
  const filterProduct = (cat) => {
    const filterData = ProductDetail.filter((item) => item.cat === cat);
    setProduct(filterData);
  };
  const allProducts = () => {
    setProduct(ProductDetail);
  };

  return (
    <ProductContainer>
      {close ? (
        <ProductDetailModal>
          <ProductDetailContainer>
            <CloseBtn onClick={() => setClose(false)}>
              <AiOutlineCloseCircle />
            </CloseBtn>
            {detail.map((item) => {
              return (
                <ProductDetailBox key={item.id}>
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h4>{item.Title}</h4>
                    <p>{item.cat}</p>
                    <p>
                      A screen Everyone will love: whether your family is
                      streaming or video chatting with friends
                    </p>
                    <p>{item.Price}</p>
                    <button>Add to cart</button>
                  </div>
                </ProductDetailBox>
              );
            })}
          </ProductDetailContainer>
        </ProductDetailModal>
      ) : null}

      <h2># Products</h2>
      <p>Home . Products</p>
      <ProductWrapper>
        <ProductFilter>
          <ProductCategories>
            <h4>Categories</h4>
            <ul>
              <li onClick={() => allProducts()}>All Products</li>
              <li onClick={() => filterProduct("paper wallet")}>
                paper wallet
              </li>
              <li onClick={() => filterProduct("paper wallet by mobic")}>
                paper wallet by mobic
              </li>
              <li onClick={() => filterProduct("paper wallet by mobicus")}>
                paper wallet by mobicus
              </li>
            </ul>
          </ProductCategories>
        </ProductFilter>
        <ProductBox>
          <div>
            <ProductBoxContainer>
              {product.map((item) => {
                return (
                  <HomeProducts key={item.id}>
                    <HomeProductImage>
                      <img src={item.img} alt="" />
                      <HomeProductIcon>
                        <li>
                          <AiOutlineShoppingCart />
                        </li>
                        <li onClick={() => view(item)}>
                          <BsEye />
                        </li>
                        <li>
                          <AiOutlineHeart />
                        </li>
                      </HomeProductIcon>
                    </HomeProductImage>
                    <h4>{item.Title}</h4>
                    <p>{item.cat}</p>
                    <p>{item.Price}</p>
                  </HomeProducts>
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
