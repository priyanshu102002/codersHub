import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="container py-4">
            <Link to="/" className="flex gap-2 items-center">
                <img className="w-8" src="/images/Emoji.png" alt="logo" />
                <span className="font-bold text-2xl">CodersHouse</span>
            </Link>
        </nav>
    );
};

export default Navigation;
