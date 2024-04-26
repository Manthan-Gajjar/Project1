import React from 'react'
import Hero from './Hero';
import Serviceimg from './Images/Plan.jpg.jpg';
import Footer from './Footer';
import Trip from './Trip';

function Service() {
    return ( <>

<Hero
                cName="hero"
                Heroimg={Serviceimg}
                title="Service"
            />
       <Trip/>
<Footer/>

    </> );
}

export default Service;