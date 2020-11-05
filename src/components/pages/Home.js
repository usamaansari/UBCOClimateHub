import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import AboutComponent from '../AboutComponent';
import { homeObjOne } from './HomeData';

function Home () {

    return (
        <>
        <HeroSection/>
        <Cards/>
        <AboutComponent {...homeObjOne}/>
        <Footer />
        </>
    );
    
}

export default Home;