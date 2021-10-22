import { ArrowBack } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import background from '../images/background.png'

const style = {
    margin: '0px 10px'
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Bar = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #FFFFFF;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`   

const Form = styled.div`
    padding: 2rem;
    width: 300px;
    height: auto;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    color: #000000;
`

const Title = styled.h2`
    padding-bottom: 10px;
`

const Label = styled.p`
    padding: 10px 0;
`

const Input = styled.input`
    padding: 10px;
    margin-bottom: 6px;
    background-color: #f7f7f7;
    border: 1px solid #000000;
`

const Button = styled.button`
    font-size: 1rem;
    font-weight: 600;
    padding: 10px;
    margin-top: 13px;
    border: 2px solid #000000;
    background-color: #FFFFFF;
    color: #000000;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #000000;
        color: #FFFFFF;
    }
`

const Register = () => {
    return (
        <Container>
            <Bar>
                <ArrowBack style={style}/>Go Back
            </Bar>
            <Form>
                <Title>SIGN UP</Title>
                <Label>Email</Label>
                <Input type="email"/>
                <Label>Username</Label>
                <Input type="text"/>
                <Label>Password</Label>
                <Input type="password"/>
                <Button>Sign up</Button>
            </Form>
        </Container>
    )
}

export default Register
