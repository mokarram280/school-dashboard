"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Total',
      count: 100,
      fill: 'white',
    },
    {
        name: 'Girls',
        count: 43,
        fill: '#FAE27C',
    },
    {
      name: 'Boys',
      count: 57,
      fill: '#C3EBFA',
    },
  ];

const CountChart = () => {
  return (
    <div className='w-full h-full bg-white rounded-xl p-4'>
        {/* title */}
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Students</h2>
            <Image src='/moreDark.png' alt='more' width={20} height={20} />
        </div>
        {/* charts */}
        <div className='relative w-full h-[70%]'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image 
        src='/maleFemale.png' 
        alt='Male-Female' 
        width={50} 
        height={50}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
         />
        </div>
        {/* bottoms */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaSky rounded-full' />
                <h3 className='font-bold'>1,234</h3>
                <h4 className='text-xs text-gray-300'>Boys (57%)</h4>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaYellow rounded-full' />
                <h3 className='font-bold'>1,234</h3>
                <h4 className='text-xs text-gray-300'>Girls (43%)</h4>
            </div>
        </div>
    </div>
  );
};

export default CountChart;