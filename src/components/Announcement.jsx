import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-left: 30px;
    padding-top: 5px;
    height: 30px;
    background-color: #620282;
    color: white;
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
