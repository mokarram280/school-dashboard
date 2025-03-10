import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import EventCalendar from '@/components/EventCalendar';
import React from 'react';

const StudentPage = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-4 p-4'>
      {/* left side */}
      <div className='w-full xl:w-2/3'>
      <div className='h-full rounded-md bg-white p-4'>
        <h3 className='text-xl font-semibold'>Schedule (A4)</h3>
        <BigCalendar />
      </div>
      </div>
      {/* right side */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      <EventCalendar />
      <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;