import React from 'react';
import Projects from './Projects';
import { motion } from 'framer-motion';

const Portfolio = () => {
    return (
        <section id='project' className='section bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen relative'>
            <div className="container mx-auto mt-16 lg:mt-0 px-8">
                {/* Title and Subtitle */}
                <div className="text-center mb-16">
    {/* Title Animation with Typing Effect */}
    <motion.h2
        className="text-6xl lg:text-8xl font-extrabold text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
    >
        <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" }}
        >
            My Projects
        </motion.span>
    </motion.h2>

    {/* Subtitle with Fade-in Effect */}
    <motion.p
        className="text-xl lg:text-3xl text-gray-300 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
    >
        Showcasing my latest work and development projects
    </motion.p>
</div>


                {/* Key Features Section */}
                {/* Key Features Section */}
<motion.div
    className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-8 rounded-xl shadow-xl text-white lg:block hidden" // Hide on mobile devices
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
>
    <h3 className="text-3xl font-bold text-center mb-8">Key Features</h3>
    <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, staggerChildren: 0.2 }}
    >
        {/* Key Features with Hover Effects */}
        <motion.div
            className="flex flex-col items-center p-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
        >
            <i className="fas fa-code text-4xl mb-4"></i>
            <h4 className="text-xl font-semibold">Clean Code</h4>
            <p className="text-md">Well-structured and maintainable code for scalability and performance.</p>
        </motion.div>
        <motion.div
            className="flex flex-col items-center p-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
        >
            <i className="fas fa-mobile-alt text-4xl mb-4"></i>
            <h4 className="text-xl font-semibold">Responsive Design</h4>
            <p className="text-md">Mobile-first, fully responsive interfaces for all devices.</p>
        </motion.div>
        <motion.div
            className="flex flex-col items-center p-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
        >
            <i className="fas fa-cogs text-4xl mb-4"></i>
            <h4 className="text-xl font-semibold">Advanced Features</h4>
            <p className="text-md">Leveraging the latest technologies to create impactful user experiences.</p>
        </motion.div>
    </motion.div>
</motion.div>


                {/* Projects Section */}
                <div className="mt-24">
                    <Projects />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
