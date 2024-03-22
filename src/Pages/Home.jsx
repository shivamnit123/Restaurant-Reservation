import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Qualities from '../Components/Qualities'
import Menu from '../Components/Menu'
import Whoarewe from '../Components/Whoarewe'
import Team from '../Components/Team'
import Footer from '../Components/Footer'
import Reservation from '../Components/Reservation'

const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Qualities />
            <Menu />
            <Whoarewe />
            <Team />
            <Reservation />
            <Footer />
        </>
    )
}

export default Home