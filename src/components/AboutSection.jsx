import React, { useRef } from 'react';
import { Images } from "../constant";
import { SiRefinedgithub } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: 5
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
        opacity: { duration: 1 },
        rotate: { duration: 1 }
      }
    }
  };

  const iconGroupVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.4
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="overflow-hidden"
    >
      <motion.div
        className='flex flex-col md:flex-row justify-between mx-auto md:me-60 md:ms-20 items-center pt-10 md:pt-20 space-y-8 md:space-y-0'
        variants={itemVariants}
      >
        <motion.h3
          className='font-mono text-xl md:text-2xl'
          variants={itemVariants}
        >
          .../About me ...
        </motion.h3>
        <motion.p
          className='text-gray-400 text-sm md:text-base pt-4 md:pt-0'
          variants={itemVariants}
        >
          Hello! I'm Zahira. I'm a <span className='text-white'>full-stack developer.</span> <br />
          More than <span className='text-white'>2 years</span> experience.
        </motion.p>
      </motion.div>
      <div className='flex flex-col lg:flex-row justify-between items-center pb-10  ms-20 '>
        <div className='w-full lg:w-2/3 space-y-5'>
          <motion.div
            className='bg-[#f5f5f5] w-full md:w-[42vw] h-auto rounded-3xl px-6 py-4 text-gray-700 text-lg mt-10 '
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h4>Front-end</h4>
            <p className='text-sm font-mono pt-2'>TypeScript / React Js / Javascript / Html / Next js</p>
          </motion.div>
          <div className='flex flex-col md:flex-row gap-4'>
            <motion.div
              className='border border-zinc-700 rounded-3xl w-full md:w-[20vw] h-auto px-6 py-4 text-zinc-500'
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className='text-lg'>Styles</h4>
              <p className='text-sm font-mono pt-2'>SCSS / SASS / CSS / Bootstrap / Tailwind</p>
            </motion.div>
            <div className="relative flex items-center justify-center w-12 h-12 mt-4 md:mt-0 mx-auto">
              <div className="absolute w-12 h-12 border border-zinc-500 rounded-full flex items-center justify-center z-0">
                <SiRefinedgithub />
              </div>
              <a href="https://github.com/zahirajanahi"
                target="_blank"
                rel="noopener noreferrer" className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-400 translate-x-6 z-10">
                <GoArrowUpRight className='text-gray-800' />
              </a>
            </div>
          </div>
          <motion.div
            className='border border-zinc-700 w-full md:w-[42vw] h-auto rounded-3xl px-6 py-4 text-zinc-500 text-lg'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h4>Back-end</h4>
            <p className='text-sm font-mono pt-2'>Laravel / SqLite / MySql </p>
          </motion.div>
        </div>
        <motion.div
          variants={imageVariants}
          whileHover={{
            scale: 1.03,
            rotate: -2,
            transition: { duration: 0.3 }
          }}
          className="mt-10 "
        >
          <img src={Images.me} alt="" className='h-auto lg:h-[60vh] w-auto rounded-3xl lg:me-40' />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
