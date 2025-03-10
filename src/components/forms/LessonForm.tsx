"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputFields from "../InputFields";

const schema = z.object({
    username: z.string()
    .min(3, { message: 'Username must be at least 3 characters long!' })
    .max(20, { message: 'Username must be at most 20 characters long!' }),
    email: z.string().email({message:'Invalid email address!'}),
    password: z.string().min(8, {message:'Username must be at least 8 characters long!'}),
    firstName: z.string().min(1, {message:'First name is required!'}),
    lastName: z.string().min(1, {message:'Last name is required!'}),
    phone: z.string().min(1, {message:'Phone number is required!'}),
    address: z.string().min(1, {message:'Address is required!'}),
  });

  type Inputs = z.infer<typeof schema>

const LessonForm = ({
    type,data
}:{
    type:'create' | 'update';
    data?:any;
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>({
        resolver: zodResolver(schema),
      });

      const onSubmit = handleSubmit(data=>{
        console.log(data)
      })
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <h2 className="text-xl font-medium">Create a new lesson</h2>
        <span className="text-xs text-gray-400 font-medium">Authentication Information</span>
        <div className="flex items-center justify-between flex-wrap gap-2">
        <InputFields
        lable='Username'
        name='username'
        defaultValue={data?.username}
        register={register}
        error={errors?.username}
        />
        <InputFields
        lable='Email'
        name='email'
        type='email'
        defaultValue={data?.email}
        register={register}
        error={errors?.email}
        />
        <InputFields
        lable='Password'
        name='password'
        type='password'
        defaultValue={data?.password}
        register={register}
        error={errors?.password}
        />
        </div>
        <span className="text-sm text-gray-400 font-medium">Personal Information</span>
        <div className="flex items-center justify-between flex-wrap gap-2">
        <InputFields
        lable='First Name'
        name='firstname'
        defaultValue={data?.firstname}
        register={register}
        error={errors?.firstName}
        />
        <InputFields
        lable='Last Name'
        name='lastname'
        defaultValue={data?.lastname}
        register={register}
        error={errors?.lastName}
        />
        <InputFields
        lable='Phone'
        name='phone'
        defaultValue={data?.phone}
        register={register}
        error={errors?.phone}
        />
        <InputFields
        lable='Address'
        name='address'
        defaultValue={data?.address}
        register={register}
        error={errors?.address}
        />
    </div>
        <button className="bg-blue-400 text-white p-2 rounded-md font-medium">
            {type === 'create' ? 'Create' : 'Update'}
        </button>
    </form>
  );
};

export default LessonForm;