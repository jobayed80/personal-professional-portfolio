import React from 'react'
import { services } from './data'

import DIU from './assets/img/Education/diu.jpeg'
import AUSC from './assets/img/Education/ausc.jpg'
import OnlineCourses from './assets/img/Education/diu.jpeg'

const Services = () => {
  return (
    <div id='education' className='section bg-secondary relative'>
      <div className="container mx-auto">

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "12rem",
            left: "-9rem",
          }}
        ></div>

        {/* Section Title */}
        <div className="flex flex-col items-center text-center mt-8 lg:-mt-2" data-aos="fade-up" data-aos-duration="2000">
          <div className='contactTitle uppercase font-extrabold font-sans text-6xl lg:text-9xl -z-10'>
            <h2>Education</h2>
            <h2>Education</h2>
          </div>
          <p className='text-xl lg:text-3xl z-30 text-white'>Educational Qualification</p>
          <p className='subtitle mt-10'>
            Education is the key to unlocking human potential and fostering societal progress. It goes beyond classrooms, encompassing formal learning institutions and informal avenues for knowledge acquisition...
          </p>
        </div>

        {/* Educational Cards */}
        <div className="items-center lg:justify-between flex flex-col lg:flex-row gap-10 gap-y-14" data-aos="zoom-out-down" data-aos-duration="2000">
          <div className="shadow-lg shadow-cyan-500/80 bg-slate-900 relative flex flex-col mt-6 text-gray-700 bg-clip-border rounded-xl w-96 transition-all hover:scale-105">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={DIU} alt="Daffodil University" />
            </div>
            <div className="p-6">
              <h5 className="items-center gap-3 flex mb-2 font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                Daffodil International University
              </h5>
              <p className="italic text-justify text-gray-400 font-sans text-sm">
                In 2024, I completed a Bachelor's degree in <span className='text-md text-white'>Software Engineering</span> with a major in <span className='text-white'>Data Science</span>. The program provided me with a strong foundation in software development and advanced skills in data analysis, machine learning, and statistical modeling.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button className="bg-slate-700 text-white px-6 py-3 rounded-lg shadow-md">
                <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer">Read More</a>
              </button>
            </div>
          </div>

          <div className="shadow-lg shadow-cyan-500/80 bg-slate-900 relative flex flex-col mt-6 text-gray-700 bg-clip-border rounded-xl w-96 transition-all hover:scale-105">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={AUSC} alt="Aftab Uddin School & College" />
            </div>
            <div className="p-6">
              <h5 className="flex items-center gap-3 mb-2 font-sans text-xl font-semibold text-blue-gray-900">
                Aftab Uddin School & College
              </h5>
              <p className="block text-justify text-gray-400 font-sans text-sm">
                I completed my <span className='text-white'>SSC</span> exam in 2016 and my <span className='text-white'>HSC</span> exam in 2018, both from the science group. I attended the same institution for both my school and college education.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button className="bg-slate-700 text-white px-6 py-3 rounded-lg shadow-md">
                <a href="https://ausc.edu.bd/" target="_blank" rel="noopener noreferrer">Read More</a>
              </button>
            </div>
          </div>

          {/* Add New Section for Online Courses or Certifications */}
          <div className="shadow-lg shadow-cyan-500/80 bg-slate-900 relative flex flex-col mt-6 text-gray-700 bg-clip-border rounded-xl w-96 transition-all hover:scale-105">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={OnlineCourses} alt="Online Courses" />
            </div>
            <div className="p-6">
              <h5 className="flex items-center gap-3 mb-2 font-sans text-xl font-semibold text-blue-gray-900">
                Online Courses & Certifications
              </h5>
              <p className="block text-justify text-gray-400 font-sans text-sm">
                I have also pursued various online courses to expand my knowledge in fields like web development, data science, and machine learning. These platforms include Coursera, Udemy, and edX, helping me stay up-to-date with industry trends.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button className="bg-slate-700 text-white px-6 py-3 rounded-lg shadow-md">
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">Explore Courses</a>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Education Goals */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-white">Future Educational Goals</h3>
          <p className="mt-4 text-lg text-gray-300">
            I aim to pursue a Master's degree in Data Science and Artificial Intelligence in the near future. I am also looking into certifications in advanced machine learning techniques, and I'm committed to lifelong learning in the field of software engineering.
          </p>
        </div>

        {/* Styling for responsiveness */}
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "27rem",
            width: "21rem",
            height: "12rem",
            right: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Services;
