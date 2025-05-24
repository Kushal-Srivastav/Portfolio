'use client'
import { projects } from '@/data'
import React, { useState } from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

  const toggleDescription = (id: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className='py-20' id="projects">
      <h1 className='heading text-center mb-32'>
        Projects that I have <span className='text-purple'>built so far.</span>
      </h1>

      {/* ✅ Use flex layout for wider cards */}
      <div className='flex flex-wrap justify-center gap-8 px-4 md:px-8 lg:px-12 relative'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className='w-full sm:w-[85%] md:w-[45%] lg:w-[40%] xl:w-[35%] flex justify-center mb-20'
          >
            <PinContainer title={link} href={link}>
              {/* ✅ Image Section */}
              <div className='relative w-full h-[300px] mb-8'>
                <div className='absolute inset-0 overflow-hidden rounded-2xl bg-[#13162d]'>
                  <img src="/bg.png" alt="bg-img" className='w-full h-full object-cover' />
                </div>
                <img
                  src={img}
                  alt={title}
                  className='absolute bottom-0 z-10 max-h-full object-contain'
                />
              </div>

              <div className='px-4'>
                <h1 className='font-bold text-2xl lg:text-3xl line-clamp-1 mb-4'>{title}</h1>

                <div className='mb-6'>
                  <p className={`text-base lg:text-lg text-gray-300 ${!expandedDescriptions[id] ? 'line-clamp-2' : ''}`}>
                    {des}
                  </p>
                  {des.length > 100 && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDescription(id);
                      }}
                      className='text-purple text-sm mt-2 hover:underline focus:outline-none'
                    >
                      {expandedDescriptions[id] ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    {iconLists.map((icon) => (
                      <div
                        key={icon}
                        className='border border-white/[0.2] rounded-full bg-black w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center'
                      >
                        <img src={icon} alt={icon} className='p-2.5' />
                      </div>
                    ))}
                  </div>

                  <div className='flex items-center'>
                    <p className='text-purple text-base lg:text-lg'>Check Live Site</p>
                    <FaLocationArrow className='ml-2' color="#CBACE9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
