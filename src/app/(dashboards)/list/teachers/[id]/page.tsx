import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import FormModal from '@/components/FormModal';
import Performance from '@/components/Performance';
import Image from 'next/image';
import Link from 'next/link';

const SingleTeacherPage = () => {
  return (
    <div className='flex flex-col xl:flex-row flex-1 gap-4 p-4'>
        {/* left */}
        <div className='w-full xl:w-2/3'>
        {/* top */}
        <div className='flex flex-col lg:flex-row gap-4'>
            {/* user info card */}
            <div className='flex flex-1 gap-4 bg-lamaSky px-6 py-4 rounded-md'>
                <div className='w-1/3'>
                <Image src='/teachers.jpg' alt='teacher' width={144} height={144} className='w-36 h-36 rounded-full object-cover' />
                </div>
                <div className='w-2/3 flex flex-col justify-between gap-4'>
                <div className='flex items-center gap-2'>
                <h3 className='text-xl font-semibold'>Ophelia Castro</h3>
                <FormModal table='teacher' type='update' />
                </div>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className='flex flex-wrap items-center justify-between gap-2 text-xs font-medium'>
                    <div className='w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2'>
                        <Image src='/blood.png' alt='blood' width={14} height={14} />
                        <span>A+</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2'>
                        <Image src='/date.png' alt='date' width={14} height={14} />
                        <span>January 2025</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2'>
                        <Image src='/mail.png' alt='mail' width={14} height={14} />
                        <span>user@gmail.com</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2'>
                        <Image src='/phone.png' alt='phone' width={14} height={14} />
                        <span>+1234567</span>
                    </div>
                  </div>
                </div>
            </div>
            {/* small card */}
            <div className='flex flex-1 justify-between flex-wrap gap-4'>
                <div className='flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[47%]'>
                    <Image src='/singleAttendance.png' alt='singleAttendance' width={24} height={24} className='w-6 h-6' />
                    <div>
                        <h3 className='text-xl font-semibold'>90%</h3>
                        <span className='text-sm text-gray-400'>Attendance</span>
                    </div>
                </div>
                <div className='flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[47%]'>
                    <Image src='/singleBranch.png' alt='singleBranches' width={24} height={24} className='w-6 h-6' />
                    <div>
                        <h3 className='text-xl font-semibold'>2</h3>
                        <span className='text-sm text-gray-400'>Branches</span>
                    </div>
                </div>
                <div className='flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[47%]'>
                    <Image src='/singleLesson.png' alt='singleLesson' width={24} height={24} className='w-6 h-6' />
                    <div>
                        <h3 className='text-xl font-semibold'>6</h3>
                        <span className='text-sm text-gray-400'>Lessons</span>
                    </div>
                </div>
                <div className='flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[47%]'>
                    <Image src='/singleClass.png' alt='singleClasses' width={24} height={24} className='w-6 h-6' />
                    <div>
                        <h3 className='text-xl font-semibold'>6</h3>
                        <span className='text-sm text-gray-400'>Classes</span>
                    </div>
                </div>
            </div>
        </div>
        {/* bottom */}
        <div className='bg-white mt-4 rounded-md p-4 h-[800px]'>
            <h2>Teacher&apos;s Schedule</h2>
            <BigCalendar />
        </div>
        </div>
        {/* right */}
        <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        <div className='bg-white p-4 rounded-md'>
            <h2 className='text-xl font-semibold'>Shortcuts</h2>
            <div className='mt-4 flex flex-wrap gap-4 text-xs text-gray-500'>
                <Link className='p-3 rounded-md bg-lamaSkyLight' href='/'>Teacher&apos;s Classes</Link>
                <Link className='p-3 rounded-md bg-lamaPurpleLight' href='/'>Teacher&apos;s Students</Link>
                <Link className='p-3 rounded-md bg-lamaYellowLight' href='/'>Teacher&apos;s Lessons</Link>
                <Link className='p-3 rounded-md bg-pink-50' href='/'>Teacher&apos;s Exams</Link>
                <Link className='p-3 rounded-md bg-lamaSkyLight' href='/'>Teacher&apos;s Assignments</Link>
            </div>
          </div>
          <Performance />
          <Announcements />
        </div>
    </div>
  );
};

export default SingleTeacherPage;