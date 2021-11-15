import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { axios_ } from '../axios/base_url';
import one from '../images/glasses/1.png';
import { useHistory } from 'react-router';

const Container = styled.div`
    padding-top: 25px;   
    background-color: #FFFFFF;
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 0 5%;
`

const List = styled.div`
    display: grid;
    grid-auto-rows: 200px;
    grid-row-gap: 20px;
    margin-right: 20px;
`

const ListItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

const Image = styled.img`
    flex: 0.7;
    height: 100%;
    width: auto;
    display: block;
`

const Details = styled.div`
    flex: 1.3;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 1px;
`

const Price = styled.p`
    font-size: 1.5rem;
    padding: 10px 0px;
`

const Button = styled.button`
    font-size: 1rem;
    font-weight: 600;
    padding: 10px;
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

const CheckoutInfo = styled.div`
    border: 2px solid #d9d9d9;
    border-radius: 10px;
    padding: 1em;
    position: relative;
    height: 400px;
`

const TitleTotal = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding-bottom: 10px;
`

const Subtotal = styled.h3`
    padding-bottom: 15px;
`

const Total = styled.h3`
    font-size: 2rem;
`

const ButtonTotal = styled(Button)`
    position: absolute;
    bottom: 15px;
    width: 85%;
    left: 50%;
    transform: translate(-50%, 0);
    margin: auto;
`

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [numOfItems, setNumOfItems] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const history = useHistory();

    /*useEffect(() => {
        const getProductDetails = async () => {
            try {
                const res = await axios_.get(`/products/${productID}`);
                console.log(res.data);
                setProduct(res.data);
            } catch (err) {
                console.log("Error: " + err);
            }
        }
        console.log(product);
        getProductDetails();
    }, [])*/

    useEffect(() => {
        handleNumOfItems();
        console.log(numOfItems);
        console.log(products);
    }, [loggedIn, numOfItems, subtotal])

    useEffect(() => {
        handleLoggedInUser();
        console.log(loggedIn);

    }, [loggedIn])


    const handleNumOfItems = () => {
        const items = JSON.parse(localStorage.getItem('ShoppingCart'));
        setNumOfItems(Object.entries(items).length);
        setProducts(items);
        handleSubtotal();
        handleTotal();
    }

    const handleRemoveItem = (e) => {
        const itemToRemove = e.target.dataset.remove;
        const newObj = {};
        let counter = 0;

        for (const item in products) {
            console.log(products[item]);
            if (products[item][0] !== itemToRemove) {
                newObj[counter] = products[item];
            } else {
                continue;
            }
            counter++;
        }

        console.log(newObj);

        localStorage.setItem('ShoppingCart', JSON.stringify(newObj));
        setProducts(newObj);
        handleNumOfItems();
    }

    const handleLoggedInUser = () => {
        const user = JSON.parse(localStorage.getItem('LoggedIn'));
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
            history.push('/');
        }
    }

    const handleSubtotal = () => {
        let sub = 0;
        for (const item in products) {
            sub += products[item][2];
        }
        
        setSubtotal(sub);
    }

    const handleTotal = () => { 
        if (subtotal !== 0) {
            setTotal(subtotal + 5);
        } else {
            setTotal(0);
        }
        console.log(total);
    }

    return (
        <div>
            <Navbar logged={loggedIn} handleLogin={handleLoggedInUser} numOfItems={numOfItems}/>
            <Container>
                <List>
                    { products !== undefined && Object.values(products).map((item) => {
                        return (
                            <ListItem key={item[0]}>
                                <Image src={one}></Image>
                                <Details>
                                    <Title>{item[1]}</Title>
                                    <Price>$ {item[2]}</Price>
                                    <Button onClick={handleRemoveItem} data-remove={item[0]}>Remove</Button>
                                </Details>
                            </ListItem>
                        )
                    }) }
                </List>
                <CheckoutInfo>
                    <TitleTotal>My Cart</TitleTotal>
                    <Subtotal>Subtotal: $ {subtotal}</Subtotal>
                    <Subtotal>Shipping: $ 5.00</Subtotal>
                    <hr style={{margin: '5px 0', backgroundColor: '#000000'}}/>
                    <Total>TOTAL: $ {total}</Total>
                    <ButtonTotal>CHECKOUT</ButtonTotal>
                </CheckoutInfo>
            </Container>
        </div>
    )
}

export default Cart