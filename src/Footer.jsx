import React from 'react';
import './Footer.css';  // Create a new CSS file named "Footer.css" for styling
import { SocialIcon } from 'react-social-icons';
function Footer() {
    return (
        <>
            <footer className="custom-footer text-light text-center py-3 mt-5">
                <p className="mb-3">
                    © This Website Is Created By Manthan Gajjar
                </p>
                {/* Instagram Icon */}
                <a href="https://www.instagram.com/mblabz.in/" className="custom-social-icon">
                <SocialIcon url="https://www.instagram.com/mblabz.in/" />  

                </a>
            </footer>
        </>
    );
}

export default Footer;
