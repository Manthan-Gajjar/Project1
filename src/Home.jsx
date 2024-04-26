import React from 'react';
import Hero from './Hero';
import Homeimg from './Images/Home.jpg';
import Destination from './Destination';
import Footer from './Footer';
import Trip from './Trip';
function Home() {
    return (
        <>
            <Hero
                cName="hero"
                Heroimg={Homeimg}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination"
                buttontext="Travel Plan"
                url="/Service"
                btnclass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    );
}

export default Home;
