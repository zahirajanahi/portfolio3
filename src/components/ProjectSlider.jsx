import React from 'react';
import { Images } from '../constant';
import { motion } from 'framer-motion';

const ProjectSlider = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className='flex gap-3 items-center mx-auto w-[90vw] ms-16 mb-5'>
        {/* Left Slide */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className='border border-gray-400 rounded-3xl w-[35vw] h-[40vh]'
        >
          <h3 className='text-xl font-bold text-gray-300 ps-5 pt-12'>Explore My Technical Skills </h3>
          <p className='text-sm text-gray-300 px-5 pt-3'>
            Discover my expertise in full-stack development, including front-end, back-end, and everything in between.
          </p>
          <div className='flex gap-2 mt-7 ms-5'>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about-section')}
              className='border border-gray-400 text-gray-200 px-7 py-2 rounded-full flex items-center space-x-2 mb-12 hover:bg-zinc-800'
            >
              Read More
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about-section')}
              className='border border-gray-400 text-gray-200 px-3 py-2 rounded-full flex items-center space-x-2 mb-12 hover:bg-zinc-800'
            >
              →
            </motion.button>
          </div>
        </motion.div>

        {/* Center Slide with Image and Right Overlay */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
          className='relative border border-gray-400 rounded-3xl w-[50vw] h-[40vh] overflow-hidden'
        >
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={Images.hero}
            alt=""
            className='w-full h-full object-cover rounded-3xl'
          />
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='absolute rounded-sm top-0 right-0 w-[25vw] h-full bg-black/70 text-white flex flex-col justify-center px-6 rounded-tr-3xl rounded-br-3xl'
          >
            <h3 className='text-xl font-bold pt-12'>Welcome to my portfolio</h3>
            <p className='mt-2 text-sm'>
              I am a full-stack developer with expertise in building dynamic and user-friendly web applications. Let's explore my work together!
            </p>
            <div className='flex gap-2 mt-10'>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('hero-section')}
                className='bg-white text-black px-7 py-2 rounded-full flex items-center space-x-2 mb-12 hover:bg-gray-100'
              >
                Read More
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('hero-section')}
                className='bg-white text-black px-3 py-2 rounded-full flex items-center space-x-2 mb-12 hover:bg-gray-100'
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Slide */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.4 }}
          className='border border-gray-400 rounded-3xl w-[35vw] h-[40vh]'
        >
          <h3 className='text-xl font-bold text-gray-300 ps-5 pt-12'>Explore My Projects </h3>
          <p className='text-sm text-gray-300 px-5 pt-3'>
            Dive into my portfolio of projects showcasing my skills in web development and creative problem-solving.
          </p>
          <div className='flex gap-2 mt-7 ms-5'>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects-section')}
              className='border border-gray-400 text-gray-200 px-7 py-2 rounded-full flex items-center space-x-2 mb-12 hover:bg-zinc-800'
            >
              Read More
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects-section')}
              className='border border-gray-400 text-gray-200 px-3 py-2 rounded-full flex items-center space-x-2 mb-12 hover:bg-zinc-800'
            >
              →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectSlider;