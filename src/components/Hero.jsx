import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import myResume from '../assets/resume/CV_Updated.pdf';
import myImage from '../assets/img/jobayed.png';
import Vect1 from '../assets/img/Vector1.png';
import Vect2 from '../assets/img/Vector2.png';

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Designer", "Full Stack Developer", "Programmer", "Tech Enthusiast", "Freelancer"],
    loop: true, 
    typeSpeed: 60,  
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <section id='home' className='lg:h-screen flex items-center bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6 sm:px-12 md:px-20 overflow-hidden'>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p className='text-xl mb-4 text-gray-300' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Welcome to my Portfolio
          </motion.p>
          
          <h1 className='text-4xl sm:text-5xl font-extrabold text-pink-500'>
            Hi, I'm <span className='text-cyan-400'>Jobayed Hossain</span>
          </h1>
          
          <motion.h2 className="text-2xl sm:text-3xl font-semibold mt-3" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className='text-white'>a </span>
            <span className='text-pink-400'>{text}</span>
            <Cursor cursorBlinking cursorStyle="|" cursorColor="#ff014f" />
          </motion.h2>
          
          <p className='mt-6 text-gray-300 leading-relaxed'>
            Passionate about coding and designing seamless digital experiences. I love building interactive and user-friendly applications. 
            With a strong foundation in front-end and back-end technologies, I specialize in creating modern, scalable applications.
          </p>
          
          <div className="flex items-center justify-center lg:justify-start mt-8 gap-4">
            <a href={myResume} download="Jobayed_resume" className='btn bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300'>Download CV</a>
            <a href='#contact' className='btn bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300'>Hire Me</a>
          </div>
        </div>

        {/* Right Section - Improved with Professional Animation */}


        <div className="flex-1 flex justify-center lg:justify-end relative">
  <motion.div 
    className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
    initial={{ opacity: 0, scale: 0.8 }} 
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.7 }}
    whileHover={{ scale: 1.05, rotate: 5 }}
  >
    <motion.img 
      src={myImage} 
      alt="Jobayed Hossain" 
      className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-lg object-cover" 
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    />
    <motion.img 
      src={Vect1} 
      alt="" 
      className="absolute -top-10 left-0 w-16 opacity-75" 
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    />
    <motion.img 
      src={Vect2} 
      alt="" 
      className="absolute bottom-0 right-0 w-16 opacity-75" 
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    />
    <motion.div 
      className="absolute w-24 h-24 bg-white bg-opacity-10 rounded-full" 
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    ></motion.div>
    
    
  </motion.div>
</div>





      </div>
    </section>
  );
};

export default Hero;