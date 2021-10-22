import React from 'react';
import styled from 'styled-components';
import one from '../images/glasses/1.png';

const Box = styled.div`
    width: 260px;
    height: auto;
    border: 1px solid #aaaaaa;
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
`

const ProductImage = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    
`

const ProductInfo = styled.div`
    background-color: #f8f8f8;
    position: relative;
    z-index: -1;
`

const ProductTitle = styled.h2`
    text-align: left;
    padding: 15px 0 0 15px;
    font-weight: 300;
    font-size: 1.3rem;
`

const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

const ProductStock = styled.p`
    color: #00cc00;
`

const Price = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
`


const ProductCard = () => {
    return (
        <Box>
            <ProductImage>
                <Image src={one}></Image>
            </ProductImage>
            <ProductInfo>
                <ProductTitle>Men's Glasses</ProductTitle>
                <InfoWrapper>
                    <Price>$90.<span style={{fontSize: '0.9rem'}}>99</span></Price>
                    <ProductStock>In Stock</ProductStock>
                </InfoWrapper>
            </ProductInfo>
        </Box>
    )
}

export default ProductCard
