import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/LandingPage/NavBar';
import Features from '../components/LandingPage/Feature';
import Services from '../components/LandingPage/Services';
const Hero = lazy(() => import('../components/LandingPage/Hero'));
const AboutUs = lazy(() => import('../components/LandingPage/AboutUs'));
const ContactUs = lazy(() => import(('../components/LandingPage/ContactUs')));
import Footer from '../components/common/Footer';
// import { Helmet } from 'react-helmet-async';




export default function Landing() {
    return (
        <div className='overflow-x-hidden '>
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Services/>
                <AboutUs />
                <ContactUs />
                <Footer/>
            </main>
            {/* <Footer /> */}
        </div>

    )
};
