import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import one from '../images/glasses/1.png';
import two from '../images/glasses/2.png';
import three from '../images/glasses/3.png';
import four from '../images/glasses/4.png';
import five from '../images/glasses/5.png';

const data = [
    {
        src: one,
        sub: 'Ray-Ban Glasses 1'
    },
    {
        src: two,
        sub: 'Ray-Ban Glasses 2'
    },
    {
        src: three,
        sub: 'Ray-Ban Glasses 3'
    },
    {
        src: four,
        sub: 'Ray-Ban Glasses 4'
    },
    {
        src: five,
        sub: 'Ray-Ban Glasses 5'
    },
    {
        src: one,
        sub: 'Ray-Ban Glasses 1'
    },
    {
        src: two,
        sub: 'Ray-Ban Glasses 2'
    },
    {
        src: three,
        sub: 'Ray-Ban Glasses 3'
    },
    {
        src: four,
        sub: 'Ray-Ban Glasses 4'
    },
    {
        src: five,
        sub: 'Ray-Ban Glasses 5'
    }
]

const Cont = styled.div`
    display: flex;
    position: relative;
`

const Container = styled.div`
    height: 300px;
    width: 80%;
    margin: auto;
    display: flex;
    overflow: hidden;
    position: relative;
`

const ArrowContainer = styled.div`
    width: 10%;
    position: relative;
`

const Arrow = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: background-color 0.3s ease, margin-left 0.3s ease;

    &:hover {
        background-color: #cccccc;
    }

    &:active {
        margin-left: ${props=>props.direction === "left" ? "-10px" : "10px"};
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
    transform: translateX(${props=>props.slideIndex * -252}px);
`

const Card = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 15px;
    background-color:#f2f2f2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    
`

const Image = styled.img`    
    width: 100%;
`

const Subtitle = styled.p`
    font-size: 0.9rem;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "right") {
            setSlideIndex(slideIndex >= 7 ?  7 : slideIndex + 1);
        } else if (direction === "left") {
            setSlideIndex(slideIndex <= 0 ?  0 : slideIndex - 1);
        }
    }

    return (
        <Cont>
            <ArrowContainer>
                <Arrow direction="left" onClick={()=>handleClick("left")}><ArrowLeftOutlined /></Arrow>
            </ArrowContainer>
            <Container>
                <Wrapper slideIndex={slideIndex}>
                    {data.map(item => {
                        return(
                            <Card>
                                <Image src={item.src}></Image>
                                <Subtitle>{item.sub}</Subtitle>
                            </Card>
                        )
                    })}
                    <Card>
                        <Subtitle>More +</Subtitle>
                    </Card>
                </Wrapper>
            </Container>
            <ArrowContainer>
                <Arrow direction="right" onClick={()=>handleClick("right")}><ArrowRightOutlined /></Arrow>
            </ArrowContainer>
        </Cont>
    )
}

export default Slider;
