"use client";

import Image from "next/image";
import { JSX, useState } from "react";
import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"),{
    loading: () => <h1>lodaing...</h1>,
});

const StudentForm = dynamic(() => import("./forms/StudentForm"),{
    loading: () => <h1>lodaing...</h1>,
});

const ParentForm = dynamic(() => import("./forms/ParentForm"));
const SubjectForm = dynamic(() => import("./forms/SubjectForm"));
const ClassForm = dynamic(() => import("./forms/ClassForm"));
const LessonForm = dynamic(() => import("./forms/LessonForm"));
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"));
const ResultForm = dynamic(() => import("./forms/ResultForm"));
const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"));
const EventForm = dynamic(() => import("./forms/EventForm"));
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"));

const forms: {
    [key: string]: (type: 'create' | 'update', data?: any) => JSX.Element;
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
    parent: (type, data) => <ParentForm type={type} data={data} />,
    subject: (type, data) => <SubjectForm type={type} data={data} />,
    class: (type, data) => <ClassForm type={type} data={data} />,
    lesson: (type, data) => <LessonForm type={type} data={data} />,
    assignment: (type, data) => <AssignmentForm type={type} data={data} />,
    result: (type, data) => <ResultForm type={type} data={data} />,
    attendance: (type, data) => <AttendanceForm type={type} data={data} />,
    event: (type, data) => <EventForm type={type} data={data} />,
    announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
};

const FormModal = ({table, type, data, id}:{
    table:
    | 'teacher'
    | 'student'
    | 'parent'
    | 'subject'
    | 'class'
    | 'lesson'
    | 'exam'
    | 'assignment'
    | 'result'
    | 'attendance'
    | 'event'
    | 'announcement';
    type: 'create' | 'update' | 'delete';
    data?:any;
    id?:number;
}) => {
    const size = type === 'create' ? 'w-8 h-8' : 'w-7 h-7';
    const bgColor = type === 'create' ? 'bg-lamaYellow' : type === 'update' ? 'bg-lamaSky' : 'bg-lamaPurple';

    const [open, setOpen] = useState(false);

    const Form = () => {
        return type === 'delete' && id ? (
        <form action='#' className='flex flex-col gap-4 p-4'>
            <span className='text-center font-medium'>All data will be lost. Are you sure you want to delete this {table}?</span>
            <button className='bg-red-700 text-white px-4 py-2 rounded-md border-none w-max self-center'>Delete</button>
        </form>
    ) : type === 'create' || type === 'update' ? (
        forms[table](type, data)
      ) : 'Form not found!';
    };

  return (
    <>
        <button onClick={()=> setOpen(true)} className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
            <Image src={`/${type}.png`} alt="type" width={16} height={16} />
        </button>
        {open && <div className="w-full md:h-screen absolute top-0 left-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center py-4 md:py-0">
            <div className="bg-white rounded-md p-4 relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                <Form />
                <div onClick={()=> setOpen(false)} className="absolute top-4 right-4 cursor-pointer">
                    <Image src='/close.png' alt='close' width={14} height={14} />
                </div>
            </div>
        </div>}
    </>
  );
};

export default FormModal;