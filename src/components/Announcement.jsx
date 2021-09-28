import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-left: 30px;
    padding-top: 2px;
    padding-bottom: 2px;
    height: 10px;
    background-color: #f7f7f7;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
`

const Announcement = () => {
    return (
        <Container>
            SUPER DEAL! DON'T MISS OUT!
        </Container>
    )
}

export default Announcement
