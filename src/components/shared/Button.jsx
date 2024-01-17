import React from "react";

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center bg-blue py-2 px-4 border-none outline-none rounded-full hover:bg-[#014a9c] hover:transition-colors ">
            <span className="font-bold mr-2">{text}</span>
            <img className="w-6" src="/images/arrow_forward.png" alt="arrow" />
        </button>
    );
};

export default Button;
