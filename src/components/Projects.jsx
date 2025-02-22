import React, { useEffect, useState } from 'react';
import { projectsData } from '../data';
import { projectsNav } from '../data';

// import components
import Project from './Project';
import { motion } from 'framer-motion'; // Add Framer Motion for animations

const Projects = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [currentPage, setCurrentPage] = useState(0); // Track the current page
    const [projectsPerPage, setProjectsPerPage] = useState(8); // Default for desktop
    const projectsPerPageMobile = 4; // Number of projects to show per page on mobile
    const projectsPerPageTab = 6; // Number of projects to show per page on tablet
    const [selectedProject, setSelectedProject] = useState(null); // State for selected project
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

    // Update projectsPerPage based on window width
    const updateProjectsPerPage = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setProjectsPerPage(projectsPerPageMobile); // Mobile
        } else if (width >= 640 && width < 1024) {
            setProjectsPerPage(projectsPerPageTab); // Tablet
        } else {
            setProjectsPerPage(8); // Desktop
        }
    };

    // Set the appropriate number of projects per page on component mount and window resize
    useEffect(() => {
        updateProjectsPerPage(); // Set initial projects per page
        window.addEventListener('resize', updateProjectsPerPage); // Listen for window resize

        return () => {
            window.removeEventListener('resize', updateProjectsPerPage); // Cleanup event listener
        };
    }, []);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
        setCurrentPage(0); // Reset to the first page when category changes
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    const handleNext = () => {
        if ((currentPage + 1) * projectsPerPage < projects.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Get the projects to display on the current page
    const displayedProjects = projects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div>
            {/* ------- nav -------------- */}
            <nav className="mb-10 lg:mb-16 -mt-3 lg:-mt-12 max-w-5xl mx-auto">
            <motion.ul
                className="text-[0.78rem] lg:text-[1rem] font-bold flex flex-wrap justify-evenly items-center text-white bg-gradient-to-r from-gray-800 via-black to-green-600  rounded-lg shadow-lg transition-all duration-300 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {projectsNav.map((item, index) => {
                    return (
                        <motion.li
                            key={index}
                            onClick={(e) => handleClick(e, index)}
                            className={`cursor-pointer capitalize m-3 transition-all duration-200 ${active === index ? 'text-gray-900 bg-white px-5 py-2 rounded-full shadow-lg' : 'text-white'}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {item.name}
                        </motion.li>
                    );
                })}
            </motion.ul>
        </nav>

            {/* project grid with animation */}
            <section className='mb-16'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
                    {displayedProjects.map((project, index) => {
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => openModal(project)}
                                className="cursor-pointer"
                            >
                                <Project item={project} key={project.id} />
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Prev/Next Buttons at the bottom */}
            <div className='flex justify-center space-x-4'>
                <button
                    className='bg-teal-500 text-white px-6 py-2 cursor-pointer rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-teal-600 active:scale-95 shadow-lg hover:shadow-xl'
                    onClick={handlePrev}
                    disabled={currentPage === 0} // Disable prev button on the first page
                >
                    Prev
                </button>
                <button
                    className='bg-teal-500 text-white px-6 py-2 cursor-pointer rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-teal-600 active:scale-95 shadow-lg hover:shadow-xl'
                    onClick={handleNext}
                    disabled={(currentPage + 1) * projectsPerPage >= projects.length} // Disable next button at the last page
                >
                    Next
                </button>
            </div>



           {/* Modal for displaying image and details */}
           {isModalOpen && selectedProject && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <motion.div
                        className="bg-gradient-to-r from-white via-gray-300 to-gray-800 p-8 rounded-lg max-w-2xl w-full relative"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            className="absolute top-1 right-4 text-white-700 text-2xl font-semibold hover:text-teal-600"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <div className="flex flex-col items-center">
                            <motion.img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="max-w-full h-auto rounded-lg mb-4 shadow-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <h2 className="text-3xl font-semibold mb-2 text-teal-600">{selectedProject.name}</h2>
                            <p className="text-gray-700 mb-4 text-lg">{selectedProject.description}</p>

                            {/* Extra content */}
                            <div className="text-sm text-gray-500 mb-4 space-y-2">
                                <p><strong className="text-teal-600">Category:</strong> {selectedProject.category}</p>
                                <p><strong className="text-teal-600">Technologies:</strong> {selectedProject.technologies}</p>
                                <p><strong className="text-teal-600">Duration:</strong> {selectedProject.duration}</p>
                                <p><strong className="text-teal-600">Date:</strong> {selectedProject.date}</p>
                                {selectedProject.team && (
                                    <p><strong className="text-teal-600">Team Members:</strong> {selectedProject.team.join(', ')}</p>
                                )}
                            </div>

                            {/* Project Links */}
                            <div className="flex space-x-6 text-blue-500">
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-teal-600 transition-colors duration-300"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {selectedProject.demo && (
                                    <a
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-teal-600 transition-colors duration-300"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}




        </div>
    );
};

export default Projects;
