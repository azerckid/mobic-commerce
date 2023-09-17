import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components"

const CartContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const CartContent = styled.div``
const CartItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
`
const CartCover = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const CartImg = styled.div``
const CartDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const CartEmpty = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 30px;
        font-weight: 600;
    }
    a{
        text-decoration: none;
    
        font-size: 20px;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: 5px;
        margin-top: 20px;
        color: #fff;
        background-color: dodgerblue;
        transition: all 0.3s ease-in-out;
        &:hover{
            background-color: hotpink;
            color: #fff;
        }
}
`
const CartQuantity = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`
const CartIncrease = styled.div`
    button{
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: dodgerblue;
        }
        transition: all 0.3s ease-in-out;
        &:hover{
            color: hotpink;
        }
`
const CartDecrease = styled.div`
    button{
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: dodgerblue;
        }
        transition: all 0.3s ease-in-out;
        &:hover{
            color: hotpink;
        }
`
const TotalPrice = styled.div`
    font-size: 2rem;
`
const CartCloseButton = styled.div`
    width: 200px;
    height: 40px;
    margin-top: 20px;
    background-color: red;
    cursor: pointer;
    button{
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #fff;
        }
    transition: all 0.3s ease-in-out;
    &:hover{
        color: red;
    }
`
const Checkout = styled.button``

const Cart = ({ cart, setCart }) => {
    // eslint-disable-next-line
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    const cartIncrease = (item) => {
        const exist = cart.find((i) => i.id === item.id);
        if (exist) {
            setCart(
                cart?.map((i) => i.id === item.id ? { ...exist, qty: exist.qty + 1 } : i)
            )
        }

    }
    const cartDecrease = (item) => {
        const exist = cart.find((i) => i.id === item.id);
        if (exist.qty === 1) {
            setCart(cart.filter((i) => i.id !== item.id))
        }
        else {
            setCart(
                cart?.map((i) => i.id === item.id ? { ...exist, qty: exist.qty - 1 } : i)
            )
        }

    }
    const removeProduct = (item) => {
        const exist = cart.find((i) => i.id === item.id);
        if (exist.qty > 0) {
            setCart(cart.filter((i) => i.id !== item.id))
        }
    }
    const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.Price, 0)

    return (
        <CartContainer>
            {cart?.length === 0 ?
                (<CartEmpty>
                    <h1>Cart is empty</h1>
                    <Link to="/product">Shop Now</Link>
                </CartEmpty>)
                :
                (<CartContent>
                    {cart?.map((item) => {
                        return (
                            <CartItem key={item.id}>
                                <CartCover>
                                    <CartImg>
                                        <img src={item.img} alt="" />
                                    </CartImg>
                                    <CartDetail>
                                        <div>
                                            <h4>{item.Title}</h4>
                                            <h4>{item.cat}</h4>
                                            <p>price : {item.Price}</p>
                                        </div>
                                        <CartQuantity>
                                            <CartIncrease>
                                                <button onClick={() => cartIncrease(item)}>+</button>
                                            </CartIncrease>
                                            <div>
                                                <input type='text' value={item.qty} />
                                            </div>
                                            <CartDecrease>
                                                <button onClick={() => cartDecrease(item)} >-</button>
                                            </CartDecrease>
                                        </CartQuantity>
                                        <h4>sub total : {item.qty * item.Price}</h4>
                                    </CartDetail>
                                </CartCover>
                                <CartCloseButton>
                                    <button onClick={() => removeProduct(item)}><AiOutlineClose /></button>
                                </CartCloseButton>

                            </CartItem>
                        )
                    }
                    )}
                    {cart.length > 0 && <>
                        <TotalPrice>TOTAL PRICE :{totalPrice}</TotalPrice>
                        <Checkout>CHECKOUT</Checkout>
                    </>
                    }

                </CartContent>)}
        </CartContainer>
    )
}

export default Cart 