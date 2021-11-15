import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Slider from '../components/Slider'
import CategoryGrid from '../components/CategoryGrid'
import Statistics from '../components/Statistics'
import Footer from '../components/Footer'

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [numOfItems, setNumOfItems] = useState(0);

    useEffect(() => {
        handleLoggedInUser();
        console.log(loggedIn);

    }, [loggedIn])

    useEffect(() => {
        handleNumOfItems();
        console.log(numOfItems);
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

    return (
        <div>
            <Navbar logged={loggedIn} handleLogin={handleLoggedInUser} numOfItems={numOfItems}/>
            <HeroImage />
            <Slider />
            <CategoryGrid />
            <Statistics />
            <Footer />
        </div>
    )
}

export default Home
