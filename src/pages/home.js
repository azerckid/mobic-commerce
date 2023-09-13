import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'

const HomeContainer = styled.div`
    margin:0;
    padding:0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    background-color: #f3b123;
`
const HomeBox = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;

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
    }
`
const ImageBox = styled.div`
   margin-top: 12%;
   margin-right: 6%;
   margin-bottom: 6%;
`
const home = () => {
    return (
        <HomeContainer>
            <HomeBox>
                <Detail>
                    <div>The best mobic wallet Collection 2023</div>
                    <Link to="/product">Shop Now <BsArrowRight /> </Link>
                </Detail>
                <ImageBox>
                    <img src="./img/slider-img.png" alt='sliderImage'></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </ImageBox>
            </HomeBox>
        </HomeContainer>
    )
}

export default home