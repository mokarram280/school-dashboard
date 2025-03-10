import { FieldError } from "react-hook-form";

type InputFieldProps = {
    lable:string;
    type?:string;
    register:any;
    name:string;
    defaultValue?:string;
    error?:FieldError;
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>;
}

const InputFields = ({
    lable,
    type = 'text',
    register,
    name,
    defaultValue,
    error,
    inputProps
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-xs text-gray-500">{lable}</label>
        <input 
        type={type} 
        {...register(name)} 
        className="ring-[1px] ring-gray-300 p-2 text-sm rounded-md w-full"
        {...inputProps}
        defaultValue={defaultValue}
        />
        {error?.message && <p className="text-xs text-red-400">{error.message.toString()}</p>}
    </div>
  );
};

export default InputFields;