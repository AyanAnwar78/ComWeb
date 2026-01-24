import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsTree from '../components/ProjectsTree';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="space-y-0">
            <Hero />
            <About />
            <Services />
            <Process />
            <WhyChooseUs />
            <ProjectsTree />
            <Pricing />
            <Testimonials />
            <Team />
            <Contact />
        </div>
    );
};

export default Home;
