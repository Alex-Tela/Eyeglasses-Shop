import { formatMs } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { axios_ } from '../axios/base_url'
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

const Error = styled.p`
    color: red;
    background-color: #ffcccc;
    padding: 10px;
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

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const history = useHistory();
    const formData = {};
    const products = {};


    useEffect(() => {
        localStorage.removeItem("LoggedIn");
        localStorage.removeItem("ShoppingCart");
    }, [])

    useEffect(() => {
        handleRedirect();
    }, [redirect])

    useEffect(() => {

    }, [invalid])


    const handleClick = () => {
        handleForm();
        //console.log(JSON.stringify(formData));
        getUsers()
        .then((message) => {
            return checkLogin(message);
        })
        .then((resolvedVal) => {
            handleRedirect();
        })
        .catch((rejectedVal) => {
            console.log(rejectedVal);
        });
    };

    const handleRedirect = () => {
        console.log(redirect);
        if (redirect === true) {
            history.push('/products/cat/women');
        }
    }

    const checkLogin = (message) => {
        console.log(message);
        if (message === `User ${formData['username']} is logged in`) {
            localStorage.setItem("LoggedIn", JSON.stringify(formData));
            localStorage.setItem("ShoppingCart", JSON.stringify(products));
            setRedirect(true);
            setInvalid(false);
            console.log(invalid);
        } else {
            setInvalid(true);
        }
        console.log(JSON.parse(localStorage.getItem("LoggedIn")));
        console.log("Shopping cart:" + localStorage.getItem("ShoppingCart"));
    }

    const handleChange = ({ target }) => {
        switch (target.name) {
            case 'username':
                setUsername(target.value);
                break;
            case 'password':
                setPassword(target.value);
                break;
            default:
                console.log("Nothing happened");
        }
    };

    const handleForm = () => {
        formData['username'] = username;
        formData['password'] = password;
        formData['type'] = 'login';
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
            return res.data;
        } catch (err) {
            console.log("Error: " + err);
            return "Error";
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
                <Title>LOGIN</Title>
                { invalid && <Error>Invalid Credentials</Error> }
                <Label>Username</Label>
                <Input onChange={handleChange} type="text" name="username" required autocomplete="off"/>
                <Label>Password</Label>
                <Input onChange={handleChange} type="password" name="password" required autocomplete="off"/>
                <Button onClick={handleClick} type="submit">Log in</Button>
            </Form>
        </Container>
    )
}

export default Login
