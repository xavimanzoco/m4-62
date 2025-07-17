import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    children?: React.ReactNode;
    error?: string;
    }

const Input = ({ label, id, className, children, error, ...rest}: InputProps) => {
  return (
        <div>
          <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        <div className="flex">
            <input
                id={id}
                className={clsx(
                    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ' +
                    'focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' +
                    'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ' +
                    'dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                    className,
                    children ? 'pr-10' : ''
                )}
                {...rest}
            />
            {children && (
                <span
                  className="flex items-center px-3 bg-primary-300 text-white text-sm rounded-r-lg h-full -ml-2"
                  style={{ height: "42px" }}
                >
                    {children}
                </span>
            )}
        </div>
        
        </label>
        {error && <span className="text-red-500">{error}</span>}
        </div>
    
  );
};

export default Input;