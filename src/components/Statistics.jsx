import React from 'react'
import styled from 'styled-components'

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


const data = document.getElementsByClassName('stats');
const text = document.getElementsByClassName('stats-text');

// We record the heights of our Content elements
const getDimensionsOfContents = () => {
    const dims = {};

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        dims[`el${i}`] = data[i].clientHeight;
        console.log(dims[data[i]])
    }

    console.log(Object.values(dims));
    return dims;
}

const something = getDimensionsOfContents();
console.log(something);

// const getScrollPosition = () => {
//     const dims = getDimensionsOfContents(); 

//     // We get the height of our window, and how much we scrolled (not of our screen)
//     let windowHeight = window.innerHeight;
//     let scrollY = window.scrollY || window.pageYOffset;
//     let scrollPosition = scrollY + windowHeight;

//     const elemPositions = {}

//     // We now check the position of each element (Content) on the page
//     for (let i = 0; i < data.length; i++) {
//         elemPositions[`el${i}`] = data[i].getBoundingClientRect().top + scrollY + dims[`el${i}`];
//     }

//     console.log(Object.values(elemPositions));

//     // Object that stores integers pointing to whether an element (Content) is in viewpoint or not, and to trigger an animation
//     const checks = {}

//     for (let elem in elemPositions) {
//         if (scrollPosition > elem) {
//             checks[elem] = 1;
//         } else {
//             checks[elem] = 0;
//         }
//     }

//     console.log(Object.values(checks));
//     return checks;
// }

// // Check if the animation should start
// const checkAnimationStart = () => {
//     const checks = getScrollPosition();
//     const array = Object.values(checks);

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             typewriterAnimation(i, text[i].innerHTML);
//         }
//     }
// }

// // The actual animation changing the text
// const typewriterAnimation = (indexofElement, number) => {
//     let n = 0;
//     let num = Number(number);

//     while (n < num) {
//         setTimeout((n) => {
//             text[indexofElement].innerHTML = n;    
//             n++;
//         }, 700);
//     }
// }

//window.addEventListener("scroll", checkAnimationStart());

const Statistics = () => {
    return (
        <Wrapper>
            <Container>
                <Content className="stats">
                    <Title><span className="stats-text">6</span> in 10</Title>
                    <Subtitle>people have eyesight issues</Subtitle>
                </Content>
                <Content className="stats">
                    <Title>Over <span className="stats-text">64</span>%</Title>
                    <Subtitle>of adults wear eyeglasses</Subtitle>
                </Content>
                <Content className="stats">
                    <Title><span className="stats-text">2.2</span> billion</Title>
                    <Subtitle>people wear eyeglasses</Subtitle>
                </Content>
            </Container>
            <Bar>

            </Bar>
        </Wrapper>
    )
}

export default Statistics
