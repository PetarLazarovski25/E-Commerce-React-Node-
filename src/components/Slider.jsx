import React from 'react'
import styled from 'styled-components'
import { ArrowRightOutlined, ArrowLeftOutlined, Description } from '@material-ui/icons';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`
const Slide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height:80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 90px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Decsription = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;    
    letter-spacing: 3px;

    `
const Button = styled.button`
    border-radius: 10%;
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://www.kindpng.com/picc/m/37-375157_dress-png-images-free-download-girl-in-dress.png" style={{ backgroundColor: 'white' }} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Decsription>DON'T YOU HESITATE! GET YOUR ORDER, AND GET FREE WORLD WIDE SHIPPING, NOW!</Decsription>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
