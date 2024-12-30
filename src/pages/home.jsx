 import React from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
// import { Images } from "../constant";
import '../css/home.css';
import 'animate.css';
import Hero from '../components/Hero';
import ProjectSlider from '../components/ProjectSlider';
import AboutSection from '../components/AboutSection';
import Projects from '../components/Projects';
import  Contact from '../components/Contact';

const Home = () => {
  // const [emailStatus, setEmailStatus] = useState('');

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setEmailStatus('sending');

  //   emailjs
  //     .sendForm(
  //       'service_jjholjd',
  //       'template_kkwidrs',
  //       form.current,
  //       'SGSsbQH6QTgD-nzNq'
  //     )
  //     .then(
  //       (result) => {
  //         setEmailStatus('success');
  //         form.current.reset();
  //         setTimeout(() => setEmailStatus(''), 3000);
  //       },
  //       (error) => {
  //         setEmailStatus('error');
  //         console.error('Failed to send email:', error);
  //         setTimeout(() => setEmailStatus(''), 3000);
  //       }
  //     );
  // };

  

  return (
   <>
     <div className="min-h-screen bg-[#121212] text-white">
     <div id="hero-section">
          <Hero />
        </div>
        <ProjectSlider />
        <div id="about-section">
          <AboutSection />
        </div>
        <div id="projects-section">
          <Projects />
        </div>
        <div id="contact-section">
          <Contact />
        </div>
    </div>
   </>
  );
};

export default Home;