import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, LayoutGroup } from 'framer-motion';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';


const AnimatedLink = () => {

    const location = useLocation();

    return (
        <LayoutGroup >
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </LayoutGroup>

    );
}

export default AnimatedLink;

