import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Slider from '../components/Slider'
import CategoryGrid from '../components/CategoryGrid'
import Statistics from '../components/Statistics'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImage />
            <Slider />
            <CategoryGrid />
            <Statistics />
        </div>
    )
}

export default Home
