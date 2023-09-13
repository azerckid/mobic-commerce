import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowRight, BsCurrencyDollar, BsEye } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { HiOutlineReceiptPercent } from 'react-icons/hi2'
import { BiHeadphone } from 'react-icons/bi'

import HomeProduct from '../components/homeProduct'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

const HomeContainer = styled.div`
    width: 100vw;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
`
const BannerBox = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f3b123;
`
const Detail = styled.div`      
   margin-top: 12%;
   margin-left: 6%;
   div {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2%;
   }
   a {
    padding: 1% 2%;
    border-radius: 10px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    background-color: #fff;
    }
    a:hover {
        background-color: hotpink;
        color: #fff;
        transition: 0.3s;
    }
`
const ImageBox = styled.div`
   margin-top: 12%;
   margin-right: 6%;
   margin-bottom: 6%;
`

const ProductContainer = styled.div`
    width: 100vw;
`
const ProductBox = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 6%;
    margin-bottom: 6%;
`
const Box = styled.div`
`
const ProductImage = styled.div`
    width:200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #f3b123;
    overflow: hidden;
    cursor: pointer;
    img:hover {
        transform: scale(1.2);
        transition: 0.5s;
    }
`
const ProductDetail = styled.div`
    margin-top: 8%;
    text-align: center;
`

const AboutContainer = styled.div`
    display: flex;
    height: 200px;
    flex-direction: row;
    justify-content: space-around;
`;
const AboutBox = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const AboutIcon = styled.div`
    width: 100%;
    margin-bottom: 6%;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color:hotpink;
`;
const AboutDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        font-size: 1.5rem;
        font-weight: 500;
    }
    p {
        margin-top: 6%;
        font-size: 1rem;
        font-weight: 500;
    }
`;

const HomeProductContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const HomeProductTitle = styled.div`
    margin-top: 6%;
    font-size: 3rem;
    font-weight: 900;
`;
const HomeProductBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    flex-wrap: wrap;
`;
const HomeProductImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const HomeProducts = styled.div`
    width: 30%;
    margin: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    cursor: pointer;
`;

const HomeProductIcon = styled.div`
    width: 50%;
    margin-bottom: 6%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
`;
const HomeProductDetail = styled.div``;

const Home = () => {
    // eslint-disable-next-line
    const [homeProducts, setHomeProducts] = useState(HomeProduct);
    return (
        <HomeContainer>
            <BannerBox>
                <Detail>
                    <div>The best mobic wallet Collection 2023</div>
                    <Link to="/product">Shop Now <BsArrowRight /> </Link>
                </Detail>
                <ImageBox>
                    <img src="./img/slider-img.png" alt='sliderImage'></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </ImageBox>
            </BannerBox>
            <ProductContainer>
                <ProductBox>
                    <Box>
                        <ProductImage>
                            <img src="./img/Mobile Phone.png" alt='mobile Phone'></img>
                        </ProductImage>
                        <ProductDetail>
                            <p>23 products</p>
                        </ProductDetail>
                    </Box>
                    <Box>
                        <ProductImage>
                            <img src="./img/headphone.png" alt='head phone'></img>
                        </ProductImage>
                        <ProductDetail>
                            <p>12 products</p>
                        </ProductDetail>
                    </Box>
                    <Box>
                        <ProductImage>
                            <img src="./img/smart watch.png" alt='smart watch'></img>
                        </ProductImage>
                        <ProductDetail>
                            <p>63 products</p>
                        </ProductDetail>
                    </Box>
                    <Box>
                        <ProductImage>
                            <img src="./img/headphone.png" alt='head phone'></img>
                        </ProductImage>
                        <ProductDetail>
                            <p>63 products</p>
                        </ProductDetail>
                    </Box>
                </ProductBox>
            </ProductContainer>
            <AboutContainer>
                <AboutBox>
                    <About>
                        <AboutIcon>
                            <FiTruck />
                        </AboutIcon>
                        <AboutDetail>
                            <h3>Free Shipping</h3>
                            <p>order above $1000</p>
                        </AboutDetail>
                    </About>
                </AboutBox>
                <AboutBox>
                    <About>
                        <AboutIcon>
                            <BsCurrencyDollar />
                        </AboutIcon>
                        <AboutDetail>
                            <h3>Return & Refund</h3>
                            <p>money back guarantee</p>
                        </AboutDetail>
                    </About>
                </AboutBox>
                <AboutBox>
                    <About>
                        <AboutIcon>
                            <HiOutlineReceiptPercent />
                        </AboutIcon>
                        <AboutDetail>
                            <h3>Member Discount</h3>
                            <p>On every Order</p>
                        </AboutDetail>
                    </About>
                </AboutBox>
                <AboutBox>
                    <About>
                        <AboutIcon>
                            <BiHeadphone />
                        </AboutIcon>
                        <AboutDetail>
                            <h3>Customer Support</h3>
                            <p>Every Time Call Support</p>
                        </AboutDetail>
                    </About>
                </AboutBox>
            </AboutContainer>
            <HomeProductContainer>
                <HomeProductTitle>
                    <h2>Best Seller</h2>
                </HomeProductTitle>
                <HomeProductBox>
                    {homeProducts.map((item) => {
                        return (
                            <HomeProducts key={item.id}>
                                <HomeProductImage>
                                    <img src={item.img} alt={item.name}></img>
                                    <HomeProductIcon>
                                        <AiOutlineShoppingCart />
                                        <BsEye />
                                        <AiOutlineHeart />
                                    </HomeProductIcon>
                                </HomeProductImage>
                                <HomeProductDetail>
                                    <h3>{item.Title}</h3>
                                    <p>price : {item.Price}</p>
                                </HomeProductDetail>
                            </HomeProducts>
                        )
                    }
                    )}
                </HomeProductBox>
            </HomeProductContainer>
        </HomeContainer>
    )
}

export default Home