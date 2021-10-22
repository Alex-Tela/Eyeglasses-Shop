import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Slider from '../components/Slider'
import CategoryGrid from '../components/CategoryGrid'
import Statistics from '../components/Statistics'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImage />
            <Slider />
            <CategoryGrid />
            <Statistics />
            <Footer />
        </div>
    )
}

export default Home
