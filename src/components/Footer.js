import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import styled from "styled-components";

const FooterContainer = styled.div``;
const FooterBox = styled.div``;
const Foot = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterLogo = styled.div`
  height: 200px;
  margin-right: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FooterDetail = styled.div``;
const FooterIcon = styled.div`
  margin-top: 20%;
  display: flex;
  justify-content: space-between;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    li {
      margin-right: 16%;
      font-size: 2rem;
      color: #010f1c;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        color: #0989ff;
      }
    }
  }
`;
const FooterAccount = styled.div`
  height: 200px;
  margin-right: 10%;
  h3 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #010f1c;
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 6%;
      font-size: 1rem;
      color: #010f1c;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        color: #0989ff;
      }
    }
  }
`;
const FooterPage = styled.div`
  height: 200px;
  h3 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #010f1c;
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 6%;
      font-size: 1rem;
      color: #010f1c;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        color: #0989ff;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <Foot>
          <FooterLogo>
            <img src="./img/mobicusShopLogo.svg" alt="logo" />
            <FooterDetail>
              <p>© 2021 Mobic. All Rights Reserved</p>
            </FooterDetail>
            <FooterIcon>
              <ul>
                <li>
                  <AiOutlineFacebook />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <AiOutlineYoutube />
                </li>
              </ul>
            </FooterIcon>
          </FooterLogo>
          <FooterAccount>
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </FooterAccount>
          <FooterPage>
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </FooterPage>
        </Foot>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
