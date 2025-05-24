"use client";

import React from 'react';
import { socialMedia } from '@/data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='py-20' id="contact">
      <h1 className='heading text-center mb-32'>
        Let's <span className='text-purple'>connect</span>
      </h1>

      <div className='flex flex-wrap justify-center gap-8 px-4 md:px-8 lg:px-12'>
        {socialMedia.map(({ id, img, link }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center justify-center w-16 h-16 rounded-full bg-black-100 border border-white/[0.2] hover:border-purple transition-colors duration-300'
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className='w-full h-full flex items-center justify-center'
            >
              <img src={img} alt="social" className='w-8 h-8' />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact; 