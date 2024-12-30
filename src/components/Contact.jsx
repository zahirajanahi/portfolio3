import React, { useRef, useState } from 'react';
import { Github, Linkedin, Facebook, Send } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const contactRef = useRef(null);
    const isInView = useInView(contactRef, { once: true, amount: 0.2 });
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false); // State to handle the success message

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const nameVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const socialVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_285k4k7',
                'template_6oj2zlo',
                form.current,
                { publicKey: 'FyhT020zdNVAzrJ4D' }
            )
            .then(
                () => {
                    setMessageSent(true); // Show the success message
                    setTimeout(() => setMessageSent(false), 3000); // Hide it after 3 seconds
                    form.current.reset(); // Reset the form
                },
                (error) => {
                    console.error('FAILED...', error.text);
                }
            );
    };

    return (
        <motion.div 
            ref={contactRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className='mt-20 flex gap-32 pb-7'
        >
            <div className='ms-10 pt-20'>
                <motion.h1 
                    variants={nameVariants}
                    className='text-9xl font-mono'
                >
                    Zahira
                </motion.h1>
                <motion.div 
                    variants={nameVariants}
                    className='flex gap-16 items-center'
                >
                    <h5 className='text-zinc-400 text-xl pt-5'>Full stack <br /> developer</h5>
                    <h1 className='text-9xl font-mono'>Janahi</h1>
                </motion.div>
                <motion.div 
                    variants={socialVariants}
                    className="flex space-x-2 py-8"
                >
                    {/* Social Links */}
                </motion.div>
            </div>
            <motion.div variants={formVariants}>
                <motion.h3 
                    variants={formVariants}
                    className='font-mono pb-8'
                >
                    .../Contact ...
                </motion.h3>
                <motion.p 
                    variants={formVariants}
                    className='font-mono text-zinc-500 text-sm pt-2'
                >
                    Feel free to contact me any time. I'll get back to you as soon as I can.
                </motion.p>
                
                <motion.form
                    ref={form} 
                    onSubmit={sendEmail} 
                    variants={formVariants}
                    className='mt-5 space-y-6 font-mono'
                >
                    <motion.div
                        variants={formVariants}
                        whileHover={{ y: -2 }}
                    >
                        <label htmlFor="name" className="block text-sm text-zinc-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-4 py-2 text-sm border-b border-gray-400 bg-transparent focus:outline-none focus:border-purple-500"
                            placeholder="Your Name"
                            required
                        />
                    </motion.div>
                    <motion.div
                        variants={formVariants}
                        whileHover={{ y: -2 }}
                    >
                        <label htmlFor="email" className="block text-sm text-zinc-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 text-sm border-b border-gray-400 bg-transparent focus:outline-none focus:border-purple-500"
                            placeholder="Your Email"
                            required
                        />
                    </motion.div>
                    <motion.div
                        variants={formVariants}
                        whileHover={{ y: -2 }}
                    >
                        <label htmlFor="message" className="block text-sm text-zinc-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-1 block w-full px-4 py-2 text-sm border-b border-gray-400 bg-transparent focus:outline-none focus:border-purple-500"
                            placeholder="Your Message"
                            required
                        />
                    </motion.div>
                    <motion.div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgb(24 24 27)' }}
                            className="border border-zinc-400 rounded-full px-6 py-2 text-sm text-white"
                        >
                            Send Message
                        </motion.button>
                    </motion.div>
                </motion.form>
                {/* Success Message */}
                {messageSent && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 text-green-500 font-mono"
                    >
                        Your message was sent successfully!
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Contact;
