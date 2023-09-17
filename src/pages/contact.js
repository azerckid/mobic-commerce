import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components'

const ContactContainer = styled.div``
const ContactContent = styled.div``
const ContactForm = styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input, textarea{
            width: 600px;
            margin-bottom:6px;
            padding: 10px 20px;
            border-radius: 5px;
            border: 1px solid #ddd;
            outline: none;
            transition: all 0.3s ease-in-out;
            &:focus{
                border: 1px solid dodgerblue;
            }
        }
        textarea{
            height: 200px;
            resize: none;
        }
        button{
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            outline: none;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover{
                background-color: dodgerblue;
                color: #fff;
            }
        }
    }
`

const Contact = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [users, setUser] = useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    })

    const data = (e) => {
        const { name, value } = e.target
        setUser({
            ...users,
            [name]: value
        })
    }
    const sendData = async (e) => {
        e.preventDefault()
        const { Name, Email, Subject, Message } = users
        if (Name && Email && Subject && Message) {
            const res = await fetch('https://mobic-ecommerce-contact-default-rtdb.firebaseio.com/Message.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name, Email, Subject, Message
                })
            })
            console.log(res)
            const data = await res.json()
            if (data.status === 201) {
                window.alert('message sent')
                setUser({
                    ...users,
                    Name: '',
                    Email: '',
                    Subject: '',
                    Message: ''
                })
            } else {
                window.alert('message not sent')
            }
        }
        else {
            window.alert('please fill the form')
        }
    }

    return (
        <ContactContainer>
            <ContactContent>
                <h1>Contact</h1>
                <ContactForm>
                    <form method="POST">
                        <input type='text' name='Name' value={users.Name} placeholder='enter your full name' required autoComplete='off' onChange={data}></input>
                        <input type='email' name='Email' value={users.Email} placeholder='enter your e-mail name' required autoComplete='off' onChange={data}></input>
                        <input type='text' name='Subject' value={users.Subject} placeholder='enter your Subject' required autoComplete='off' onChange={data}></input>
                        <textarea name='Message' value={users.Message} placeholder='enter your Message' required autoComplete='off' onChange={data}></textarea>
                        {isAuthenticated ?
                            <button type='submit' onClick={sendData}>Send</button>
                            :
                            <button onClick={() => loginWithRedirect()}>Login</button>
                        }
                    </form>
                </ContactForm>
            </ContactContent>
        </ContactContainer>
    )
}

export default Contact