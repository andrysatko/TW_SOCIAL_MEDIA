import { type } from 'os';
import React, { useState } from 'react';

type Props = {
  size: 'sm' | 'md' | 'lg';
  type: 'text' | 'password' | 'email' | 'number';
  placeholder: string;
  disabled: boolean;
  onChange: (value: string) => void;
}
const Input = ({ size, type, placeholder, disabled, onChange, ...props }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const getClassName = () => {
    switch (size) {
      case 'sm':
        return 'text-sm rounded-md px-2 py-1 w-full ';
      case 'md':
        return 'text-base rounded-md px-3 py-2 w-2/3 border border-black outline-none m-2 bg-gray-100 hover:bg-gray-200';
      case 'lg':
        return 'text-lg rounded-md px-4 py-3 w-full';
      default:
        return 'text-base rounded-md px-3 py-2 w-full';
    }
  };

  return (
    <input
      className={`${getClassName()} ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''} text-black`}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

export default Input;