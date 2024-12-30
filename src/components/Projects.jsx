import React from 'react';
import { Images } from "../constant";
import { SiRefinedgithub } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    
    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const isInView3 = useInView(ref3, { once: true });

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className='mt-20'>
            <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='font-mono text-center'
            >
                .../Projects ... 
            </motion.h3>
            
            <motion.div 
                ref={ref1}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.6 }}
                className='flex justify-evenly ms-10'
            >
                <div className='me-28 mt-16'>
                    <h3 className='pb-5 text-lg font-mono text-gray-200'>SocialGeeks</h3>
                    <div className='flex gap-3'>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>React Js</div>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>Tailwind</div>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>Css</div>
                    </div>
                    <div className='flex gap-3 mt-2'>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>TypeScript</div>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>Material UI</div>
                    </div>
                    <p className='text-sm w-[25vw] text-gray-400 pt-5'><span className='text-white'>SocialGeeks :</span> A React-based social platform featuring hardcoded authentication using <span className='text-white'>JavaScript</span>, where users log in with predefined credentials to access the app.</p>
                    <div className="relative flex items-center justify-center w-12 h-12 mt-3">
                        <button className="absolute w-10 h-10 border border-zinc-500 rounded-full flex items-center justify-center z-0">
                            <SiRefinedgithub />
                        </button>
                        <a href="https://clinquant-klepon-54950b.netlify.app/" 
               target="_blank" 
               rel="noopener noreferrer" className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-400 translate-x-6 z-10">
                            <GoArrowUpRight className='text-gray-800' />
                        </a>
                    </div>
                </div>
                <div>
                    <img src={Images.sg} alt="" className='h-[50vh] mt-10' />
                </div>
            </motion.div>

            <motion.div 
                ref={ref2}
                initial="hidden"
                animate={isInView2 ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.6 }}
                className='flex justify-evenly mt-24'
            >
                <div>
                    <img src={Images.hh} alt="" className='h-[75vh] w-[55vw] mt-10' />
                </div>
                <div className='mt-48'>
                    <h3 className='pb-5 text-lg font-mono text-gray-200'>Hear Her</h3>
                    <div className='flex gap-3'>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>React Js</div>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>Tailwind</div>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>Css</div>
                    </div>
                    <div className='flex gap-3 mt-2'>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>TypeScript</div>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>Material UI</div>
                    </div>
                    <p className='text-sm w-[25vw] text-gray-400 pt-5'><span className='text-white'>Hear Her :</span> Platform dedicated to raising awareness about violence against women. Built with React and Tailwind, our website offers resources, support, and a safe space for survivors and advocates to connect. Through informative content and empowering stories.</p>
                    <div className="relative flex items-center justify-center w-12 h-12 mt-3">
                        <button className="absolute w-10 h-10 border border-zinc-500 rounded-full flex items-center justify-center z-0">
                            <SiRefinedgithub />
                        </button>
                        <a href="https://vilence-project.vercel.app/" 
               target="_blank" 
               rel="noopener noreferrer" className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-400 translate-x-6 z-10">
                            <GoArrowUpRight className='text-gray-800' />
                        </a>
                    </div>
                </div>
            </motion.div>
            
            <motion.div 
                ref={ref3}
                initial="hidden"
                animate={isInView3 ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.6 }}
                className='flex justify-evenly ms-10 mt-20'
            >
                <div className='me-28 mt-16'>
                    <h3 className='pb-5 text-lg font-mono text-gray-200'>Fash</h3>
                    <div className='flex gap-3'>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>React Js</div>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>Tailwind</div>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>Css</div>
                    </div>
                    <div className='flex gap-3 mt-2'>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>TypeScript</div>
                        <div className='border border-zinc-600 rounded-full px-5 py-1 font-mono text-zinc-400 hover:bg-zinc-900'>Material UI</div>
                    </div>
                    <p className='text-sm w-[25vw] text-gray-400 pt-5'><span className='text-white'>Fash :</span> An interactive online store built with React, offering users a smooth and intuitive shopping experience. The app allows customers to browse through a range of products with detailed descriptions, images, and prices, ensuring easy navigation.</p>
                    <div className="relative flex items-center justify-center w-12 h-12 mt-3">
                        <button className="absolute w-10 h-10 border border-zinc-500 rounded-full flex items-center justify-center z-0">
                            <SiRefinedgithub />
                        </button>
                        <a href="https://fash-zahira-janahis-projects.vercel.app/" 
               target="_blank" 
               rel="noopener noreferrer"  className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-400 translate-x-6 z-10">
                            <GoArrowUpRight className='text-gray-800' />
                        </a>
                    </div>
                </div>
                <div>
                    <img src={Images.ff} alt="" className='h-[50vh] mt-10' />
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;