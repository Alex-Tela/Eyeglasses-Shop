import { makeStyles } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.PNG';

const nav = ["Home", "Products", "About", "Contact"];

const NavContainer = styled.nav`
    background-color: FFFFFF;
    height: 10vh;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.img`
    height: 100%;
`

const Menu = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    flex: 2;
    margin-bottom: 0;
    color: #FF5757;
    font-weight: 600;
    cursor: pointer;
`

const Item = styled.li`
    display: inline-block;
    padding: 1.1rem;
`

const Details = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.1rem;
    justify-content: flex-end;
    flex: 1;
`

const Login = styled.div`
    padding: 1.1rem;
`

const Register = styled.div`
    padding: 1.1rem 2.2rem 1.1rem 1.1rem;
`

const Search = styled.input`
    border-width: 0px 0px 2px 0px;
    border-bottom-color: #d9d9d9;
    border-bottom-style: solid;
    padding: 5px;
    margin-left: 1.1rem;
    transition: border-bottom-color 0.5s ease;

    &:focus {
        outline: none;
        border-bottom-color: 1px solid #b3b3b3;
    }
`

const useStyles = makeStyles({
    root: {
        marginRight: '-10px',
        fontSize: '1.3rem',

    }
})

const Navbar = () => {
    const classes = useStyles();
    return (
        <NavContainer>
            <Menu>
                <Logo src={logo}></Logo>
                {nav.map((item) => {
                    return(<Item>{item}</Item>)
                })}
            </Menu>
            <Details>
                <Login>Login</Login>
                <Register>Register</Register>
                <SearchOutlined className={classes.root}></SearchOutlined>
                <Search placeholder="Search..."></Search>
            </Details>
        </NavContainer> 
    )
}

export default Navbar;