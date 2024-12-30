import React from 'react';
import { Github, Linkedin, Facebook, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <div className="ms-20">
        <div className=''>
          <div className='flex gap-32 items-center'>
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='text-7xl font-mono leading-tight font-bold ms-20'
            >
              Full-stack
            </motion.h1>
            <div className='flex gap-2 mt-20'>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-black px-28 py-4 rounded-full flex items-center space-x-2 mb-12 hover:bg-gray-100'
              >
                Projects
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-black px-5 py-4 rounded-full flex items-center space-x-2 mb-12 hover:bg-gray-100'
              >
                →
              </motion.button>
            </div>
          </div>
      
          <div className='flex gap-40 items-center ms-20'>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-400"
            >
              My goal is to <span className='text-white'>write maintainable, clean </span> <br />  and
              <span className='text-white'> understandable code</span>  to process <br /> development was enjoyable.
            </motion.p>
            <motion.h1 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='text-7xl font-mono leading-tight font-bold'
            >
              Developer
            </motion.h1>
          </div>
        </div> 

        <div className="flex space-x-2 py-8">
    <a a href="https://github.com/zahirajanahi"  target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-500 rounded-full px-14 hover:bg-zinc-800">
     <div className='flex space-x-2 items-center'><Github className="w-5 h-5" /> <p>github</p></div> 
    </a>
    <a a href="https://www.linkedin.com/in/zahira-janahi-4a4590263/"  target="_blank"  rel="noopener noreferrer" className="p-3 border border-gray-500 rounded-full px-14 hover:bg-zinc-800">
    <div className='flex space-x-2 items-center'><Linkedin className="w-5 h-5" /> <p>Linkedin</p></div> 
    </a>
    <a a href="https://github.com/zahirajanahi"  target="_blank"  rel="noopener noreferrer" className="p-3 border border-gray-500 rounded-full px-14 hover:bg-zinc-800">
    <div className='flex space-x-2 items-center'><Send className="w-5 h-5" /> <p>Telegram</p></div> 
    </a>
    <a a href="https://www.facebook.com/za.hera.5648?mibextid=wwXIfr&mibextid=wwXIfr"  target="_blank"  rel="noopener noreferrer" className="p-3 border border-gray-500 rounded-full px-14 hover:bg-zinc-800">
    <div className='flex space-x-2 items-center'><Facebook className="w-5 h-5" /> <p>Facebook</p></div> 

    </a>
    <a a href="https://www.instagram.com/__zahirae?igsh=cXR2NTE3d3cwZjBm"  target="_blank"  rel="noopener noreferrer" className="p-3 border border-gray-500 rounded-full px-14 hover:bg-zinc-800">
    <div className='flex space-x-2 items-center'><Instagram className="w-5 h-5" /> <p>Instagram</p></div> 

    </a>
  </div>
      </div>
    </>
  );
};

export default Hero;