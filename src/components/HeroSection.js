import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src = "/videos/ClimateHub_Home.mp4" autoPlay loop muted />
            <h1>Okanagan Climate Hub</h1>
            <p>Many Voices, One Action-Climate Action</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
                
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('Hey')}>
                    Watch trailer <i className='far fa-play-circle' />
                </Button>
            </div>
            
        </div>
    );
}

export default HeroSection;
