import React from 'react'

import {popularProducts} from '../data.js'
import  styled from 'styled-components';


import Product from './Product';


const Container = styled.div`
    padding : 20px;
    display : flex;
    flex-wrap:wrap ;
    justify-content: space-between;
`;


 const Products = () => {
  return (
    <Container>
      {popularProducts.map((item)=>(
          <Product item = {item}  />
      ))}
    </Container>
  )
}

export default Products;
