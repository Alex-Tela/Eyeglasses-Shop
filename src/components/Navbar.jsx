import { Badge, makeStyles } from '@material-ui/core';
import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.PNG';
import { navLinksStyle, otherButtonsStyle } from '../styles/styles';

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
    cursor: pointer;
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
    },

    cart: {
        cursor: 'pointer'
    },

    badge: {
        marginRight: '2.2rem'
    }
})

const Navbar = (props) => {

    const classes = useStyles();
    //console.log(props.logged);


    const handleLink = (elem) => {
        let linkElem = '/';
        switch(elem.toLowerCase()) {
            case 'home':
                linkElem = '/';
                break;
            case 'products':
                linkElem = '/products/cat/women';
                break;
            case 'about':
                linkElem = '/';
                break;
            case 'contact':
                linkElem = '/';
                break;
            default:
                linkElem = '/';
        }
        return linkElem;
    }

    const handleLogout = () => {
        localStorage.removeItem('LoggedIn');
        localStorage.removeItem('ShoppingCart');
        props.handleLogin();
    }


    return (
        <NavContainer>
            <Menu>
                <Logo src={logo}></Logo>
                {nav.map((item) => {
                    return(<Link style={navLinksStyle} to={()=>handleLink(item)}><Item>{item}</Item></Link>)
                })}
            </Menu>
            <Details>
                { props.logged === true ?
                    <Login onClick={handleLogout}>Log Out</Login> : 
                    <Link style={otherButtonsStyle} to='/login'><Login>Login</Login></Link>}
                <Link style={otherButtonsStyle} to='/register'><Register>Register</Register></Link>
                { props.logged === true && <Badge className={classes.badge} badgeContent={props.numOfItems} color='primary'><Link style={otherButtonsStyle} to='/cart'><ShoppingCartOutlined className={classes.cart}/></Link></Badge>}

                <SearchOutlined className={classes.root}></SearchOutlined>
                <Search placeholder="Search..."></Search>
            </Details>
        </NavContainer> 
    )
}

export default Navbar;
