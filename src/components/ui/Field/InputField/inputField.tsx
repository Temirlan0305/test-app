import { forwardRef } from "react";
import { IField } from "./inputField.type";

const InputField = forwardRef<HTMLInputElement, IField>(
    ({ error, style, className, ...rest }, ref) => {
        return (
            <label className="w-full h-full">
                <input
                    ref={ref}
                    {...rest}
                    className='text-xl font-medium leading-6 border-b  py-[10px] px-[20px] rounded-md bg-input border-black w-full h-full px-15 py-15"'
                />
                {error && (
                    <div className="text-[12px] text-red font-normal">
                        {error.message}
                    </div>
                )}
            </label>
        );
    }
);

export default InputField;
