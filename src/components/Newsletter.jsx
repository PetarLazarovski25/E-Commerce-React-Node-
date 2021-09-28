import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 50vh;
    background-color: #fef7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.div`
    padding: 10px;
    font-size: 24px;;
    font-weight: 300;
`
const InputContainer = styled.div`
    padding: 25px;
    display: flex;
    align-items: center;
`
const Input = styled.input`
    border: 1px solid gray;
    width: 370px;
    height:30px;
    outline: none;
`
const Button = styled.button`
    background-color: #110016;
    border: none;
    height: 33px;
    color: white;
`


const Newsletter = () => {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Description>SIGN UP FOR OUR NEWSLETTER, AND RECEIVE THE LATEST OFFERS AND PROMOTIONS!</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
