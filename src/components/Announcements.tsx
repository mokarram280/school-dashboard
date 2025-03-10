import React from 'react';

const Announcements = () => {
  return (
    <div className='bg-white rounded-md p-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold my-4'>Announcements</h2>
          <span className='text-xs text-gray-400'>View All</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='rounded-md bg-lamaSkyLight p-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-semibold'>Lorem, ipsum dolor.</h3>
                    <span className='text-xs text-gray-400 bg-white rounded-md p-1'>
                        2025-01-01
                    </span>
                </div>
                <p className='text-sm text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='rounded-md bg-lamaPurpleLight p-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-semibold'>Lorem, ipsum dolor.</h3>
                    <span className='text-xs text-gray-400 bg-white rounded-md p-1'>
                        2025-01-01
                    </span>
                </div>
                <p className='text-sm text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='rounded-md bg-lamaYellowLight p-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-semibold'>Lorem, ipsum dolor.</h3>
                    <span className='text-xs text-gray-400 bg-white rounded-md p-1'>
                        2025-01-01
                    </span>
                </div>
                <p className='text-sm text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  );
};

export default Announcements;