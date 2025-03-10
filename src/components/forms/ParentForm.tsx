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
    sex: z.enum(['male','female'],{message:'Sex is required!'}),
  });

  type Inputs = z.infer<typeof schema>

const ParentForm = ({
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
        <h2 className="text-xl font-medium">Create a new parent</h2>
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
        <div className="flex flex-col gap-2 w-1/3 md:w-1/4">
        <label className="text-xs text-gray-500">Sex</label>
        <select 
        className="ring-[1px] ring-gray-300 p-2 text-sm rounded-md w-full"
        {...register('sex')}
        defaultValue={data?.sex}
        >
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        </select>
        {errors.sex?.message && <p className="text-xs text-red-400">{errors.sex.message.toString()}</p>}
      </div>
    </div>
        <button className="bg-blue-400 text-white p-2 rounded-md font-medium">
            {type === 'create' ? 'Create' : 'Update'}
        </button>
    </form>
  );
};

export default ParentForm;