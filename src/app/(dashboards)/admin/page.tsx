import Announcements from '@/components/Announcements';
import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import EventCalendar from '@/components/EventCalendar';
import FinanceChart from '@/components/FinanceChart';
import UserCard from '@/components/UserCard';

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      {/* left side */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* user cards */}
      <div className='flex justify-between gap-4 flex-wrap'>
        <UserCard type='students' />
        <UserCard type='teachers' />
        <UserCard type='parents' />
        <UserCard type='staffs' />
      </div>
      {/* middle charts */}
      <div className='flex flex-col lg:flex-row gap-4'>
        {/* count charts */}
        <div className='w-full lg:w-1/3 h-[400px]'>
        <CountChart />
        </div>
        {/* attendance charts */}
        <div className='w-full lg:w-2/3 h-[400px]'>
        <AttendanceChart />
        </div>
      </div>
      {/* bottom charts */}
      <div className='w-full h-[450px]'>
        <FinanceChart />
      </div>
      </div>
      {/* right side */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <EventCalendar />
      <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;