import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import sunglasses from '../images/glasses/sunglasses.jpg'

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin-top: 15px;
`

const SideMenu = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px 0 0 20px;
    border-right: 1px solid #aaaaaa;
`

const Category = styled.h2`
    margin-bottom: 30px;
    font-weight: 500;
    letter-spacing: 2px;
`

const Item = styled.a`
    margin-bottom: 14px;
    font-size: 0.9rem;
    color: #999999;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
    margin: 0px 20px;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    background-image: url(${sunglasses});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 15px 0px 20px 0px;
`

const Title = styled.h2`
    position: absolute;
    color: #FFFFFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.7rem;
    letter-spacing: 1px;
`

const List = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
`


const ProductList = () => {
    return (
        <div>
            <Navbar />
            <Wrapper>
                <SideMenu>
                    <Category>CATEGORIES</Category>
                    <Item>Women's Glasses</Item>
                    <Item>Men's Glasses</Item>
                    <Item>Kids' Glasses</Item>
                    <Item>Sunglasses</Item>
                    <Item>Aesthetic Glasses</Item>
                </SideMenu>
                <ListWrapper>
                    <ImageWrapper>
                        <Title>MEN'S GLASSES</Title>
                    </ImageWrapper>
                    <List>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </List>
                </ListWrapper>
            </Wrapper>
        </div>
    )
}

export default ProductList
