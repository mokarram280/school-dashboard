import Image from 'next/image';
import React from 'react';

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[160px]'>
        <div className='flex items-center justify-between'>
            <span className='bg-white text-green-500 px-2 py-1 rounded-full'>2025/26</span>
            <Image src='/more.png' alt='more' width={20} height={20} />
        </div>
        <h3 className='text-2xl font-semibold my-4'>1,234</h3>
        <h3 className='text-sm font-medium text-gray-500 capitalize'>{type}</h3>
    </div>
  );
};

export default UserCard;