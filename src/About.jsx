import React from 'react'
import Hero from './Hero';
import Aboutimg from './Images/About.jpg.jpg';
import Footer from './Footer';
import AboutUs from './AboutUs';


function About() {
    return ( <>

         <Hero
                cName="hero"
                Heroimg={Aboutimg}
                title="About"
                text=""
                buttontext=""
                url=""
                btnclass=""
            />
            <AboutUs/>
            <Footer/>
    </> );
}

export default About;