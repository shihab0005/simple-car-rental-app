import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import CarDetails from '../Pages/CarDetails';
import CarListing from '../Pages/CarListing';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import BlogDetalis from '../Pages/BlogDetalis';
import Contact from '../Pages/Contact';

const Routers = () => {
    return (
        <Routes >
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cars' element={<CarListing />} />
            <Route path='/cars/:slug' element={<CarDetails />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/blogs/:slug' element={<BlogDetalis />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Routers;