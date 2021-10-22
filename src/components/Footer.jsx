import { Copyright, Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 250px;
    background-color: #FF5757;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #FFFFFF;
    flex: 1;
    padding-top: 1.5rem;
`

const Title = styled.h2`
    text-align: center;
`

const Icons = styled.div`
    display: flex;
    justify-content: center;
`

const Menu = styled.ul`
    list-style-type: none;
    padding: 0.6rem;
`

const Item = styled.li`
    padding-bottom: 10px;
`

const SmallTitle = styled.h3`
    color: #FFFFFF;
    padding: 0.6rem;
`

const CopyrightSection = styled.div`
    background-color: #FF5757;
    text-align: center;
    color: #FFFFFF;
    padding: 1rem 0;
`

const Text = styled.p`

`

const Footer = () => {
    return (
        <>
            <Container>
                <Column>
                    <Title>Check us out on Social Media:</Title>
                    <Icons>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                    </Icons>    
                </Column>
                <Column>
                    <SmallTitle>Menu</SmallTitle>
                    <Menu>
                        <Item>Home</Item>
                        <Item>Products</Item>
                        <Item>About</Item>
                        <Item>Contact</Item>
                    </Menu>
                </Column>
                <Column>
                    <SmallTitle>Legal</SmallTitle>
                    <Menu>
                        <Item>Privacy Policy</Item>
                        <Item>Terms and Conditions</Item>
                        <Item>FAQ</Item>
                    </Menu>
                </Column>
            </Container>
            <CopyrightSection>
                <Text><Copyright/> OPTIQUE 2020 - 2021. All rights reserved.</Text>
            </CopyrightSection>
        </>
    )
}

export default Footer
