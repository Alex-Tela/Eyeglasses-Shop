import { ArrowBack } from '@material-ui/icons';
import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import background from '../images/background.png'
import { axios_ } from '../axios/base_url';

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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    const formData = {};

    const handleClick = () => {
        handleForm();
        console.log(JSON.stringify(formData));
        getUsers();
    };

    const handleChange = ({ target }) => {
        switch (target.name) {
            case 'username':
                setUsername(target.value);
                break;
            case 'password':
                setPassword(target.value);
                break;
            case 'email':
                setEmail(target.value);
                break;
            default:
                console.log("Nothing happened");
        }
    };

    const handleForm = () => {
        formData['username'] = username;
        formData['password'] = password;
        formData['email'] = email;
        formData['type'] = 'register';
    };

    const getUsers = async () => {
        try {
            /*const params = {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({}), 
                headers: {
                    'Content-Type': 'application/json'
                }               
            }*/
            const res = await axios_.post(`/users`, JSON.stringify(formData));
            console.log("Response: " + res.data);
        } catch (err) {
            console.log("Error: " + err);
        }
    };

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <Container>
            <Bar>
                <ArrowBack style={style} onClick={handleGoBack}/>Go Back
            </Bar>
            <Form>
                <Title>SIGN UP</Title>
                <Label>Email</Label>
                <Input onChange={handleChange} type="email" name="email" required autoComplete="off"/>
                <Label>Username</Label>
                <Input onChange={handleChange} type="text" name="username" required autoComplete="off"/>
                <Label>Password</Label>
                <Input onChange={handleChange} type="password" name="password" required autoComplete="off"/>
                <Button type="submit" onClick={handleClick}>Sign up</Button>
            </Form>
        </Container>
    )
}

export default Register
