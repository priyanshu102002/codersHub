import React from "react";

const Card = ({ title, logo, children }) => {
    return (
        <div className="bg-backgroundSecondary rounded-lg p-12 text-center flex flex-col gap-8">
            <div className="flex items-center justify-center gap-4">
                <img className="w-8" src={`/images/${logo}.png`} alt="" />
                <span className="font-bold text-2xl">{title}</span>
            </div>
            {children}
        </div>
    );
};

export default Card;
