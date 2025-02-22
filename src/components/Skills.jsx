import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Updated import path for styles

// Importing the skill images
import SkillImg1 from '../assets/img/skills/c.png';
import SkillImg2 from '../assets/img/skills/java.png';
import SkillImg3 from '../assets/img/skills/js1.png';
import SkillImg4 from '../assets/img/skills/reactjs.png';
import SkillImg5 from '../assets/img/skills/nextjs.png';
import SkillImg6 from '../assets/img/skills/nodejs.png';
import SkillImg7 from '../assets/img/skills/git.png';
import SkillImg8 from '../assets/img/skills/figma.png';

const skills = [
  { name: "MERN Stack", image: SkillImg1 },
  { name: "React", image: SkillImg2 },
  { name: "Web Development", image: SkillImg3 },
  { name: "Java", image: SkillImg4 },
  { name: "C Programming", image: SkillImg5 },
  { name: "Data Science", image: SkillImg6 },
  { name: "Git", image: SkillImg7 },
  { name: "Figma", image: SkillImg8 }
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">My Technical Skills</h2>
          <p className="text-lg text-white mt-4">
            I specialize in various technologies. Here's a glimpse of the tools and technologies I work with regularly to create exceptional web and mobile apps.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          effect="fade" // Add fade effect for smooth transitions
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2000, // Slide changes every 2 seconds
            disableOnInteraction: false, // Autoplay continues even after user interaction
          }}
          className="swiper-container"
        >
          {skills.map((skill, index) => {
            return (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="skill-item flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform hover:scale-110">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain shadow-lg rounded-full transition-all duration-300 ease-in-out hover:rotate-12"
                  />
                  <p className="mt-4 text-white text-lg font-medium">{skill.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

       
      </div>
    </section>
  );
};

export default Skills;
