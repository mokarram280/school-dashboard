"use client"

import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 50,
    absent: 30,
  },
  {
    name: 'Wed',
    present: 60,
    absent: 40,
  },
  {
    name: 'Thu',
    present: 80,
    absent: 60,
  },
  {
    name: 'Fri',
    present: 85,
    absent: 50,
  },
];
const AttendanceChart = () => {
  return (
    <div className='bg-white h-full rounded-lg p-4'>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Attendance</h2>
            <Image src='/moreDark.png' alt='more' width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:'10px',borderColor:'lightgray'}} />
          <Legend
          align='left'
          verticalAlign='top'
          wrapperStyle={{paddingTop:'20px',paddingBottom:'40px'}}
           />
          <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;