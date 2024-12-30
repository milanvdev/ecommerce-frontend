import React from "react";

const Input = ({placeholder, type, label, className}) => {
    return (
        <div className={`relative ${className}`}>
            <input
                type={type}
                placeholder={placeholder}
                className=" border-alto w-full text-sm py-3 font-inter-regular text-mine-shaft border bg-transparent px-4 rounded-xl focus:outline-none "
            />
            <label
                className="absolute left-4 font-inter-regular text-xs transform -translate-y-1/2 text-gray-500 bg-white px-1"
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
