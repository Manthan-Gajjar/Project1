import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';

function App() {
    return (
        <Router>
            <Navbar /> {/* Move Navbar outside of Routes */}
            <Routes>
                <Route path="/" basname="" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Service" element={<Service />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
