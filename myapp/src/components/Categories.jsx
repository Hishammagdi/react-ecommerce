import React from 'react'

import {categories} from '../data.js'

import {CategoryItem} from'./CategoryItem';

import  styled from 'styled-components';
import{mobile} from '../responsive';

const Container = styled.div`
    display:flex;
    padding : 20px;
    justify-content : center;
   ${mobile({padding:"0px" ,flexDirection:"column"})}
    
`;
const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
                <CategoryItem item = {item} key={item.id}/>
            ))}
        </Container>
    )
}
export default Categories;
