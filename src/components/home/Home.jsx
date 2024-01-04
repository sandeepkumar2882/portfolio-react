import React from 'react';
import Header from '../header/Header';
import Contact from '../contact/Contact';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';
import Footer from '../footer/Footer';
import Intro from '../intro/Intro';
import Portfolio from '../portfolio/Portfolio';
import Testimonials from '../testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Header />
            <Intro />
            <Skills />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;