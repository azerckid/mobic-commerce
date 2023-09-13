import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin, CiLogout } from 'react-icons/ci';

const NavContainer = styled.div`
`;
const TopMessage = styled.div`
    width: 100vw;
    display: flex;
    background-color: #010f1c;
    p {
        margin-left: 10px;
        margin-top: 8px;
        font-size: 14px;
        font-weight: 500;
        color: #f6f7f9;
    }
`;
const Icon = styled.div`        
    font-size: 32px;
    color: #f3b123;
`;
const MainHeader = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
`;
const Logo = styled.div`
    margin-left: 30px;
    font-size: 32px;
    font-weight: 900;
    color:hotpink;
`;
const SearchBox = styled.div`
button {
    padding: 10px 30px;
    background-color: #f3b123;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
}

`;
const SearchInput = styled.input`
width: 300px;
padding: 10px 30px;
outline: none;
border: 1px solid #e5e5e5;
`;
const IconHeartBag = styled.div`
    display: flex;
    margin-right: 30px;
`;
const AccountBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    p {
        font-size: 14px;
        font-weight: 500;
        color: #010f1c;
}`;
const HeartBox = styled.div`
    width: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    font-size: 20px;
    color: #010f1c;
    cursor: pointer;
    a {
        color: #0989FF;
    }
`;
const IconUser = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 12px;
    cursor: pointer;
`;
const ContactBox = styled.div`
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
   
`;
const Contact = styled.div`
    margin-left: 30px;
 ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    li {
        margin: 0 10px;
        list-style: none;
        font-size: 14px;
        font-weight: 500;
        color: #010f1c;
        cursor: pointer;
        a {
            text-decoration: none;
        }
        a:hover {
            color: #0989FF;
        }

    }
    }
`;
const AuthBox = styled.div`
    margin-right: 30px;
    font-size: 20px;
    cursor: pointer;
    button {
        margin-right: 30px;
        font-size: 20px;
        border: none;
        outline: none;
        background-color: transparent;
        color: #010f1c;
        cursor: pointer;
    }
`;

const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <NavContainer>
            <TopMessage>
                <Icon>
                    <FaTruckMoving></FaTruckMoving>
                </Icon>
                <p>
                    Free Shipping when shopping upto 1,000,000.00
                </p>
            </TopMessage>
            <MainHeader>
                <Logo>
                    <div>M.mall</div>
                </Logo>
                <SearchBox>
                    <SearchInput type="text" placeholder="Search for products" autoComplete='off' />
                    <button>Search</button>
                </SearchBox>
                <IconHeartBag>
                    {
                        isAuthenticated &&
                        <AccountBox>
                            <IconUser>
                                <AiOutlineUser></AiOutlineUser>
                            </IconUser>
                            <p>
                                Hello, {user.name}
                            </p>
                        </AccountBox>
                    }

                    <HeartBox>
                        <Link to="/" >
                            <AiOutlineHeart />
                        </Link>
                        <Link to="/cart">
                            <BsBagCheck />
                        </Link>
                    </HeartBox>
                </IconHeartBag>

            </MainHeader>
            <ContactBox>
                <Contact>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/product">PRODUCT</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </Contact>
                <AuthBox>
                    {
                        isAuthenticated ?
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                            :
                            <button onClick={() => loginWithRedirect()}><CiLogin /></button>
                    }


                </AuthBox>
            </ContactBox>
        </NavContainer>
    )
}

export default Nav