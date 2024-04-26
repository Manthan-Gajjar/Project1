import React from 'react';
import "./Hero.css";
import { Link } from 'react-router-dom';

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt='Heroimg' src={props.Heroimg} width="100%" />
            </div>
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link className={props.btnclass} to={props.url}>{props.buttontext}</Link>
            </div>
        </>
    );
}

export default Hero;
