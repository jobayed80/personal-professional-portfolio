import React, { useEffect } from 'react';
import image from '../assets/img/about4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaDatabase, FaGithub, FaCode } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <section id="about" className="section bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 lg:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 mt-8">

          {/* Left Section: Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-right" data-aos-duration="1500">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              About Me
            </h2>
            <p className="text-2xl text-gray-300 mb-4 animate__animated animate__fadeInUp animate__delay-1s">Md. Jobayed Hossain Rabbi</p>
            <p className="text-lg text-gray-400 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              I am a passionate and detail-oriented Software Engineer currently pursuing my B.Sc. in Software Engineering (SWE) at Daffodil International University.
              With a strong background in both back-end and front-end technologies, I specialize in <span className="text-teal-500 font-bold">Full Stack Web Development</span>.
            </p>
            <p className="text-lg text-gray-400 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              I am proficient in modern technologies like <span className="font-semibold text-white">ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, and Tailwind CSS</span>, and passionate about building scalable, high-performance web applications.
              I am committed to writing clean, maintainable code while continually staying updated with the latest technologies and industry best practices.
            </p>
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg mt-8 hover:bg-teal-600 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s" data-aos="fade-up" data-aos-duration="600">
              <a href="#contact">Contact Me</a>
            </button>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-duration="2000">
            <img className="rounded-xl shadow-xl w-full lg:w-[400px] h-[450px] object-cover transform hover:scale-110 transition-transform duration-500 border-4 border-teal-500" src={image} alt="Md. Jobayed Hossain Rabbi" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 mb-8 animate__animated animate__fadeInUp">
            Skills & Expertise
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div
              className="bg-gray-800 p-8 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-xl hover:bg-indigo-700"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <FaReact className="text-4xl mb-3 text-teal-400" />
              <h4 className="text-xl font-semibold mb-3 text-teal-300">Web Development</h4>
              <p>ReactJS, NodeJS, ExpressJS, Tailwind CSS, HTML5, CSS3</p>
            </div>
            <div
              className="bg-gray-800 p-8 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-xl hover:bg-indigo-700"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <FaCode className="text-4xl mb-3 text-orange-500" />
              <h4 className="text-xl font-semibold mb-3 text-teal-300">Programming Languages</h4>
              <p>C, Java, Python, JavaScript</p>
            </div>
            <div
              className="bg-gray-800 p-8 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-xl hover:bg-indigo-700"
              data-aos="fade-up"
              data-aos-duration="1900"
            >
              <FaDatabase className="text-4xl mb-3 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-3 text-teal-300">Database Management</h4>
              <p>MongoDB, MySQL</p>
            </div>
            <div
              className="bg-gray-800 p-8 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-xl hover:bg-indigo-700"
              data-aos="fade-up"
              data-aos-duration="2100"
            >
              <FaGithub className="text-4xl mb-3 text-gray-400" />
              <h4 className="text-xl font-semibold mb-3 text-teal-300">Version Control</h4>
              <p>Git, GitHub</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 mb-6 animate__animated animate__fadeInUp">
            Featured Projects
          </h3>

          <p className="text-lg text-gray-300 mb-8 animate__animated animate__fadeInUp">
            Below are some of the projects I've worked on, demonstrating my expertise and passion for technology.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div
              className="bg-gray-800 p-8 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-xl hover:bg-indigo-700"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h4 className="text-xl font-semibold mb-3 text-teal-300">Cycle Zone</h4>
              <p>A full-stack application for managing cycle rentals with user authentication and payment integration.</p>
            </div>
            <div
              className="bg-gray-800 p-8 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-xl hover:bg-indigo-700"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <h4 className="text-xl font-semibold mb-3 text-teal-300">Super Shop</h4>
              <p>An e-commerce platform built with React and Supabase, featuring product catalog and payment gateway integration.</p>
            </div>
            <div
              className="bg-gray-800 p-8 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-xl hover:bg-indigo-700"
              data-aos="fade-up"
              data-aos-duration="1900"
            >
              <h4 className="text-xl font-semibold mb-3 text-teal-300">Personal Portfolio</h4>
              <p>A personal website showcasing my projects, skills, and experience in web development.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
