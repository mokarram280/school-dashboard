'use client'

import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 900,
    expence: 2500,
  },
  {
    name: 'Feb',
    income: 3000,
    expence: 2000,
  },
  {
    name: 'Mar',
    income: 2000,
    expence: 2400,
  },
  {
    name: 'Apr',
    income: 2700,
    expence: 1900,
  },
  {
    name: 'May',
    income: 1850,
    expence: 1200,
  },
  {
    name: 'Jun',
    income: 2500,
    expence: 2600,
  },
  {
    name: 'Jul',
    income: 3500,
    expence: 2000,
  },
  {
    name: 'Aug',
    income: 2600,
    expence: 1000,
  },
  {
    name: 'Sep',
    income: 3000,
    expence: 1900,
  },
  {
    name: 'Oct',
    income: 2500,
    expence: 1500,
  },
  {
    name: 'Nov',
    income: 3200,
    expence: 1000,
  },
  {
    name: 'Dec',
    income: 3000,
    expence: 950,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white h-full rounded-lg p-4'>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Finance</h2>
            <Image src='/moreDark.png' alt='more' width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend 
          align='center'
          verticalAlign='top'
          wrapperStyle={{paddingTop:'10px',paddingBottom:'30px'}}
          />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={3} />
          <Line type="monotone" dataKey="expence" stroke="#CFCEFF" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;