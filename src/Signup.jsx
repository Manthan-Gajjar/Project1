// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';  // Import the Contact.css file
import Hero from './Hero';
import Signupimg from './Images/Signup.jpg';
import Footer from './Footer';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !Password) {
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
                Heroimg={Signupimg}
                title="Signup"
                text=""
                buttontext=""
                url="#"
                btnclass=""
            />
            <div className="contact-form-container">
                <h2>Sign up</h2>
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
                        <label htmlFor="Password">Password</label>
                        <input
                            id="Password"
                            type='password'
                            name="Password"
                            placeholder="Enter your Password"
                            value={Password}
                            onChange={handlePasswordChange}
                        ></input>
                    </div>
                    <button className='submit' type="submit">Submit</button>
                    {showAlert && (
                <div className="thank-you-alert">
                    Signup Succesfull, {name}! 😊
                    <button className='ok' onClick={handleAlertOk}>OK</button>
                </div>
            )}
                </form>
            </div>
            
            <Footer />
        </>
    );
}

export default Contact;
