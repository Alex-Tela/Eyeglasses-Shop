import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import one from '../images/glasses/1.png';
import { axios_ } from '../axios/base_url';

const Container = styled.div`
    height: 90vh;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    margin: 0 5%;
`

const ImageWrapper = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
`

const Info = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 25px;
    font-weight: 400;
    letter-spacing: 1px;
`

const Desc = styled.p`
    font-size: 0.9rem;
    margin-bottom: 20px;
`

const Price = styled.p`
    font-size: 1.7rem;
    margin-bottom: 20px;
`

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 20px;
    border: 2px solid #FF5757;
    background-color: #FF5757;
    color: #FFFFFF;
    font-weight: 500; 
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

    &:hover {
        background-color: #FFFFFF;
        color: #FF5757;
        border: 2px solid #FF5757;
    }
`

const Product = () => {
    const [product, setProduct] = useState([]);
    const location = useLocation();
    const productID = location.pathname.split('/')[2];

    useEffect(() => {
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
    }, [])



    return (
        <div>
            <Navbar />
            <Container>
                <ImageWrapper>
                    <Image src={one}></Image>
                </ImageWrapper>
                <Info>
                    <Title>{product[0] === undefined ? "" : product[0][1]}</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut esse provident vitae officia nulla, 
                        perferendis distinctio ipsa sapiente enim quos quaerat porro fuga minus deserunt excepturi natus tempora suscipit aliquam?
                    </Desc>
                    {/* <Price>$ 90.<span style={{fontSize: '1.0rem'}}>99</span></Price> */}
                    <Price>$ {product[0] === undefined ? "" : product[0][2]}</Price>
                    {product[0] === undefined ? "" : (product[0][4] ? <Button>ADD TO CART</Button> : <Button>NOT IN STOCK</Button>)}
                </Info>
            </Container>
        </div>
    )
}

export default Product
