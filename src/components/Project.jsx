import React from 'react';
import { Image } from 'antd';

import thesisFile from '../assets/Thesis/thesis_paper.pdf';

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center mt-2">
      <style jsx>{`
        /* Responsive Image styles for Ant Design Image component */
        .responsive-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 1rem;
        }

        /* Mobile Devices */
        @media (max-width: 640px) {
          .responsive-image {
            width: 90%; /* Adjust for mobile */
            height: 180px; /* Adjust for mobile */
          }
        }

        /* Tablet Devices */
        @media (min-width: 641px) and (max-width: 768px) {
          .responsive-image {
            width: 80%; /* Adjust for tablets */
            height: 220px; /* Adjust for tablets */
          }
        }

        /* Small Desktop */
        @media (min-width: 769px) and (max-width: 1024px) {
          .responsive-image {
            width: 75%; /* Adjust for small desktops */
            height: 250px; /* Adjust for small desktops */
          }
        }

        /* Large Desktop */
        @media (min-width: 1025px) {
          .responsive-image {
            width: 60%; /* Adjust for large desktops */
            height: 300px; /* Adjust for large desktops */
          }
        }
      `}</style>

      <div className="mb-3">
        <Image
          className="responsive-image "
          src={item.image}
          preview={false} // Disable image preview when clicked
          alt={item.name} // Provide alt text for accessibility
        />
      </div>

      <p  className=" text-teal-500 capitalize text-accent text-lg font-semibold">
        {item.category}
      </p>
      <h3 className="text-[1.2rem] font-semibold capitalize" data-aos="fade-left">
        {item.name}
      </h3>

      <div>
        {item.id === 9 ? (
          <a className="mt-20 text-red-400" href={thesisFile} download="Cancer Subtype Classification">
            Download File
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Project;
