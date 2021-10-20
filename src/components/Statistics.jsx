import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #FF5757;
    height: 300px;
    display: flex;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    flex: 1;
    color: #FFFFFF;
`

const Title = styled.h2`
    font-size: 3rem;
    padding: 5px;
`

const Subtitle = styled.p`
    padding: 5px;
`

const Bar = styled.div`
    height: 200px;
`

const Wrapper = styled.div``

const desc = [
    {
        title: " in 10",
        sub: "people have eyesight issues"
    },
    {
        title: "%",
        sub: "of adults wear eyeglasses"
    },
    {
        title: " billion",
        sub: "people wear eyeglasses"
    }
];

const stats = [6, 64, 2.2];

const Statistics = () => {

    const [inView, setInView] = useState(false);
    const [inView1, setInView1] = useState(false);
    const [inView2, setInView2] = useState(false);
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const containerRef = useRef(null);
    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    useEffect(() => {
        let intervalID = '';

        if (inView && num <= 5) {
            intervalID = setInterval(() => {
                setNum((num) => num + 1);
            }, 200);
        } else {
            clearInterval(intervalID);
        }

        return () => {
            clearInterval(intervalID);
        }
    }, [inView, num])

    useEffect(() => {
        let intervalID1 = '';

        if (inView1 && num1 <= 63) {
            intervalID1 = setInterval(() => {
                setNum1((num1) => num1 + 2);
            }, 40);
        } else {
            clearInterval(intervalID1);
        }

        return () => {
            clearInterval(intervalID1);
        }
    }, [inView1, num1])

    useEffect(() => {
        let intervalID2 = '';

        if (inView2 && num2 <= 2.0) {
            intervalID2 = setInterval(() => {
                setNum2((num2) => (num2 * 10 + (0.2 * 10))/10);
            }, 100);
        } else {
            clearInterval(intervalID2);
        }

        return () => {
            clearInterval(intervalID2);
        }
    }, [inView2, num2])

    const onScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight
        if (containerRef) {
            const topPosition = containerRef.current.getBoundingClientRect().top;
            if (topPosition < scrollPosition) {
                setInView(true);
                //console.log(inView === undefined);
            } else {
                setInView(false);
            }
        }

        if (containerRef1) {
            const topPosition = containerRef1.current.getBoundingClientRect().top;
            if (topPosition < scrollPosition) {
                setInView1(true);
                //console.log(inView === undefined);
            } else {
                setInView1(false);
            }
        }

        if (containerRef2) {
            const topPosition = containerRef2.current.getBoundingClientRect().top;
            if (topPosition < scrollPosition) {
                setInView2(true);
                //console.log(inView === undefined);
            } else {
                setInView2(false);
            }
        }
    }

    return (
        <Wrapper>
            <Container>
                <Content className="stats" ref={containerRef}>
                    <Title><span className="stats-text">{num}</span>{desc[0].title}</Title>
                    <Subtitle>{desc[0].sub}</Subtitle>
                </Content> 
                <Content className="stats" ref={containerRef1}>
                    <Title><span className="stats-text">{num1}</span>{desc[1].title}</Title>
                    <Subtitle>{desc[1].sub}</Subtitle>
                </Content> 
                <Content className="stats" ref={containerRef2}>
                    <Title><span className="stats-text">{num2}</span>{desc[2].title}</Title>
                    <Subtitle>{desc[2].sub}</Subtitle>
                </Content> 
            </Container>
            <Bar>

            </Bar>
        </Wrapper>
    )
}

export default Statistics
