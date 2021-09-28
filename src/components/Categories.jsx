import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background-color: #f7f7f7;
`

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} />
            ))}
        </Container>
    )
}

export default Categories
