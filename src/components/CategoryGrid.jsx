import React from 'react'
import styled from 'styled-components'
import aestheticGlasses from '../images/glasses/aesthetic-glasses.jpg'
import womenGlasses from '../images/glasses/women-glasses.jpg'
import menGlasses from '../images/glasses/men-glasses.jpg'
import kidsGlasses from '../images/glasses/kids-glasses.jpg'
import sunglasses from '../images/glasses/sunglasses.jpg'
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`

const Title = styled.h2`
    margin: 1rem 0;
    font-weight: 300;
    font-size: 2rem;
`

const ImageGrid = styled.div`
    display: grid;
    height: 600px;
    width: 80%;
    grid-gap: 5px;
    grid-template-areas: 
        "image1 image2 image2 image2"
        "image1 image3 image4 image4"
        "image1 image3 image5 image5"
        "image1 image3 image5 image5";
    //grid-template-columns: 1.5fr 1.2fr 1fr 1.2fr;
    grid-template-rows:  1.5fr 1.2fr 1fr 0.8fr;

`

const Image1 = styled.div`
    grid-area: image1;
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url(${womenGlasses});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const Image2 = styled(Image1)`
    grid-area: image2;
    background-image: url(${sunglasses});
`

const Image3 = styled(Image1)`
    grid-area: image3;
    background-image: url(${menGlasses});
`

const Image4 = styled(Image1)`
    grid-area: image4;
    background-image: url(${aestheticGlasses});
`

const Image5 = styled(Image1)`
    grid-area: image5;
    background-image: url(${kidsGlasses});
`

const InfoTitle = styled.h2`
    opacity: 0;
    color: #FFFFFF;
    margin: 0 15px 15px;
    text-align: center;
    transition: opacity 0.5s ease;
`

const Button = styled.button`
    border: 2px solid #FFFFFF;
    background-color: transparent;
    color: #FFFFFF;
    padding: 10px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.5s ease, color 0.3s ease, background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        color: #000000;
        background-color: #FFFFFF;
    }
`

const InfoHover = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: background-color 0.5s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:hover ${InfoTitle} {
        opacity: 1;
    }

    &:hover ${Button} {
        opacity: 1;
    }
`

const CategoryGrid = () => {
    return (
        <Container>
            <Title>Explore our categories</Title>
            <ImageGrid>
                <Image1>
                    <InfoHover>
                        <InfoTitle>WOMEN'S GLASSES</InfoTitle>
                        <Link to='/products/cat/women'>
                            <Button>SHOP</Button>
                        </Link>
                    </InfoHover>
                </Image1>
                <Image2>
                    <InfoHover>
                        <InfoTitle>SUNGLASSES</InfoTitle>
                        <Link to='/products/cat/sunglasses'>
                            <Button>SHOP</Button>
                        </Link>
                    </InfoHover>
                </Image2>
                <Image3>
                    <InfoHover>
                        <InfoTitle>MEN'S GLASSES</InfoTitle>
                        <Link to='/products/cat/men'>
                            <Button>SHOP</Button>
                        </Link>
                    </InfoHover>
                </Image3>
                <Image4>
                    <InfoHover>
                        <InfoTitle>AESTHETIC GLASSES</InfoTitle>
                        <Link to='/products/cat/aesthetic'>
                            <Button>SHOP</Button>
                        </Link>
                    </InfoHover>
                </Image4>
                <Image5>
                    <InfoHover>
                        <InfoTitle>KIDS'S GLASSES</InfoTitle>
                        <Link to='/products/cat/kids'>
                            <Button>SHOP</Button>
                        </Link>
                    </InfoHover>
                </Image5>
            </ImageGrid>
        </Container>
    )
}

export default CategoryGrid
