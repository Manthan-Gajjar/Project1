// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';  // Import the Contact.css file
import Hero from './Hero';
import Contactimg from './Images/diana-krotova-7GIOxNS15hY-unsplash.jpg';
import Footer from './Footer';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        setShowAlert(true);
    };

    const handleAlertOk = () => {
        setShowAlert(false);
    };

    return (
        <>
            <Hero
                cName="hero"
                Heroimg={Contactimg}
                title="Contact"
                text=""
                buttontext=""
                url="#"
                btnclass=""
            />
            <div className="contact-form-container">
                <h2>Send a message to Us !</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            value={message}
                            onChange={handleMessageChange}
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                    {showAlert && (
                <div className="thank-you-alert">
                    Thank you, {name}! 😊
                    <button onClick={handleAlertOk}>OK</button>
                </div>
            )}
                </form>
            </div>
            
            <Footer />
        </>
    );
}

export default Contact;
