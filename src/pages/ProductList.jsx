import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import sunglasses from '../images/glasses/sunglasses.jpg'
import { axios_ } from '../axios/base_url';

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin-top: 15px;
`

const SideMenu = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px 0 0 20px;
    border-right: 1px solid #aaaaaa;
`

const Category = styled.h2`
    margin-bottom: 30px;
    font-weight: 500;
    letter-spacing: 2px;
`

const Item = styled.a`
    margin-bottom: 14px;
    font-size: 0.9rem;
    color: #999999;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
    margin: 0px 20px;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    background-image: url(${sunglasses});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 15px 0px 20px 0px;
`

const Title = styled.h2`
    position: absolute;
    color: #FFFFFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.7rem;
    letter-spacing: 1px;
`

const List = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
`

const ProductList = () => {
    const [filter, setFilter] = useState('');
    const [products, setProducts] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [numOfItems, setNumOfItems] = useState(0);
    const location = useLocation();
    const category = location.pathname.split("/")[3];

    useEffect(() => {
        handleCategory(category);
        //console.log(filter);
        const getProducts = async () => {
            try {
                const res = await axios_.get(`/products/cat/${category}`);
                setProducts(res.data);
            } catch (err) {
                console.log("Error: " + err);
            }
        }
        getProducts()
        //console.log(products);
    }, [category]);

    useEffect(() => {
        handleLoggedInUser();

    }, [loggedIn])

    useEffect(() => {
        handleNumOfItems();
    }, [loggedIn, numOfItems])


    const handleNumOfItems = () => {
        if (loggedIn) {
            const items = JSON.parse(localStorage.getItem('ShoppingCart'));
            setNumOfItems(Object.entries(items).length);
        } else {
            setNumOfItems(0);
        }
    }

    const handleLoggedInUser = () => {
        const user = JSON.parse(localStorage.getItem('LoggedIn'));
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }

    const handleCategory = (category) => {
        let title = '';
        // eslint-disable-next-line default-case
        switch(category) {
            case 'women':
                title = 'WOMEN\'S GLASSES';
                break;
            case 'men':
                title = 'MEN\'S GLASSES';
                break;
            case 'kids':
                title = 'KIDS\' GLASSES';
                break;
            case 'sunglasses':
                title = 'SUNGLASSES';
                break;
            case 'aesthetic':
                title = 'AESTHETIC GLASSES';
                break;
        }
        setFilter(title);
    }

    return (
        <div>
            <Navbar logged={loggedIn} handleLogin={handleLoggedInUser} numOfItems={numOfItems}/>
            <Wrapper>
                <SideMenu>
                    <Category>CATEGORIES</Category>
                    <Link to="/products/cat/women"><Item>Women's Glasses</Item></Link>
                    <Link to="/products/cat/men"><Item>Men's Glasses</Item></Link>
                    <Link to="/products/cat/kids"><Item>Kids' Glasses</Item></Link>
                    <Link to="/products/cat/sunglasses"><Item>Sunglasses</Item></Link>
                    <Link to="/products/cat/aesthetic"><Item>Aesthetic Glasses</Item></Link>
                </SideMenu>
                <ListWrapper>
                    <ImageWrapper>
                        <Title>{filter}</Title>
                    </ImageWrapper>
                    <List>
                        {products.map((prod) => {
                            return <ProductCard arr={prod}/>
                        })}
                    </List>
                </ListWrapper>
            </Wrapper>
        </div>
    )
}

export default ProductList
