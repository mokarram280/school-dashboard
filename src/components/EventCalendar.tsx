"use client";
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const eventsData = [
    {
        id: 1,
        title: 'Lorem ipsum dolor.',
        time: '12:00 PM - 2:00 PM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor.',
        time: '12:00 PM - 2:00 PM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor.',
        time: '12:00 PM - 2:00 PM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white rounded-md p-4'>
        <Calendar onChange={onChange} value={value} />
        <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold my-4'>Events</h2>
            <Image src='/moreDark.png' alt='more' width={20} height={20} />
        </div>
        <div className='flex flex-col gap-4'>
            {eventsData.map((item)=>(
                <div key={item.id} className='border-2 border-gray-100 rounded-md p-5 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-gray-600 font-semibold'>{item.title}</h2>
                        <span className='text-gray-300 text-xs'>{item.time}</span>
                    </div>
                    <p className='text-gray-400 text-sm mt-2'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default EventCalendar;