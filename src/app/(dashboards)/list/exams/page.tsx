import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { examsData, role } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

type Exam = {
    id:number;
    subject:string;
    class:string;
    teacher:string;
    date:string;
}

const columns = [
    {
        header:'Subject Name',
        accessor:'subject'
    },
    {
        header:'Class',
        accessor:'class',
    },
    {
        header:'Teacher',
        accessor:'teacher',
        className:'hidden md:table-cell'
    },
    {
        header:'Date',
        accessor:'date',
        className:'hidden md:table-cell'
    },
    {
        header:'Actions',
        accessor:'actions'
    }
];

const ExamListPage = () => {
    const renderRow = (item: Exam) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>{item.subject}</td>
            <td>{item.class}</td>
            <td className='hidden md:table-cell'>{item.teacher}</td>
            <td className='hidden md:table-cell'>{item.date}</td>
            <td>
                <div className='flex items-center gap-2'>
                    {role === 'admin' && (
                        <>
                        <FormModal table='exam' type='update' data={item} />
                        <FormModal table='exam' type='delete' id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    )
  return (
    <div className='bg-white p-4 rounded-md m-4 mt-0 flex-1'>
        {/* top */}
        <div className='flex items-center justify-between'>
            <h2 className='hidden md:block text-lg font-semibold'>All Exams</h2>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                <TableSearch />
                <div className='flex items-center gap-4 self-end'>
                    <button className='w-8 h-8 bg-lamaYellow rounded-full flex items-center justify-center'>
                        <Image src='/filter.png' alt='filter' width={14} height={14} />
                    </button>
                    <button className='w-8 h-8 bg-lamaYellow rounded-full flex items-center justify-center'>
                        <Image src='/sort.png' alt='sort' width={14} height={14} />
                    </button>
                    {role === 'admin' && (
                        <FormModal table='exam' type='create' />
                )}
                </div>
            </div>
        </div>
        {/* left */}
        <Table columns={columns} renderRow={renderRow} data={examsData} />
        {/* pagination */}
        <Pagination />
    </div>
  );
};

export default ExamListPage;