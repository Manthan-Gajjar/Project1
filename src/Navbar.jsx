import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import MenuItems from './Menitems';

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(false);
    };

    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Trippy</h1>

            <div className='menu-icons' onClick={() => setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={`nav-menu ${clicked ? 'active' : ''}`}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link className={item.cName} to={item.url} onClick={handleClick}>
                            <i className={item.icon}></i> {item.title}
                        </Link>
                    </li>
                ))} 
                
                     

                     <Link onClick={handleClick} className='button' to="./Signup">Signup</Link> 
                    
            </ul>
        </nav>
    );
}

export default Navbar;
