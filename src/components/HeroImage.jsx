import React from 'react';
import styled from 'styled-components';
import roundGlasses from '../images/round-eyeglasses.png';
import background from '../images/background.png';
import back_unblurred from '../images/background-unblurred.png';

const HeroContainer = styled.div`
    height: 90vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
`

const Glass = styled.div`
    height: 90vh;
    position: absolute;
    display: flex;
    background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    backdrop-filter: blur(15px) saturate(180%);
`

const Circle = styled.div`
    position: absolute;
    z-index: -2;
    border-radius: 50%;
    width: 285px;
    height: 265px;
    background-image: url(${back_unblurred});
    background-repeat: no-repeat;
    background-position: ${props => props.position};
    background-size: cover;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    // How the blurred circles were made
    /*width: {props => props.size}px;
    height: {props => props.size}px;
    background-color: {props => props.color};
    top: {props => props.y}%;
    left: {props => props.x}%;*/
`

const GlassesImage = styled.div`
    flex: 1.1;
    position: relative;
    z-index: 2;
`

const Image = styled.img`
    position: relative;
    height: 100%;
    left: -200px;
    filter: drop-shadow(5px 20px 16px rgba(0, 0, 0, 0.5));
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 0.9;
    padding: 2rem 3rem 0 1rem;
    margin-left: -6rem;
    color: #FFFFFF;
`

const Title = styled.h1`
    font-size: 4.2rem;
    font-family: 'Poppins', sans-serif;
    filter: drop-shadow(5px 20px 16px rgba(0, 0, 0, 0.5));

    .tilted {
        font-style: italic;
    }
`

const Desc = styled.h3`
    font-weight: 300;
    padding: 1rem 0;
`

const Button = styled.button`
    cursor: pointer;
    z-index: 4;
    width: 150px;
    margin: 1rem auto 0 0;
    font-size: 1rem;
    padding: 7px;
    border: 2px solid #FFFFFF;
    background-color: transparent;
    color: #FFFFFF;
    border-radius: 20px;
    transition: background-color 0.5s ease, color 0.5s ease;

    &:hover {
        background-color: #FFFFFF;
        color: #FF5757;
    }
`

const HeroImage = () => {
    return (
        <HeroContainer>
            <GlassesImage>
                <Image src={roundGlasses}></Image>
                <Circle position="25% 60%" left="242" top="190"></Circle>
                <Circle position="-35% 0%" left="-150" top="190"></Circle>
            </GlassesImage>
            <Info>
                <Title>See the world <span className="tilted">as it is</span></Title>                
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius quibusdam voluptatem dolorum fuga ullam earum inventore iste minus itaque sunt aliquid quaerat, dolore, alias molestias veritatis quia, ipsum odio?</Desc>
                <Button>See our offers</Button>
            </Info>

        </HeroContainer>
    )
}

export default HeroImage;