// Import
import { useState } from 'react';

// Types
interface Props {
    onChange: (value: string) => void;
    value: string;
    placeHolder: string;
    icon: string;
}

// Component
const Input = (props: Props) => {
    return (
        <div className='px-5'>
            <div className='flex items-center my-5 bg-[#1b1c2c] w-full h-[45px] rounded-md'>
                <i className={`${props.icon} text-2xl ml-3`}></i>
                <input
                    className={`bg-transparent outline-none border-none w-full h-full px-3 font-medium pb-0.5`}
                    onChange={(e) => props.onChange(e.target.value)}
                    placeholder={props.placeHolder}
                    value={props.value || ''}
                    type='text'
                />
            </div>
        </div>
    );
};

// Export
export default Input;
