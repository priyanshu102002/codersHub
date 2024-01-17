import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/shared/Card";
import Button from "../components/shared/Button";

const Home = () => {
    const navigate = useNavigate();

    const startRegister = () => {
        navigate("/register");
    }

    return (
        <div className="w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Card title="Welcome to the Codershouse!" logo="emoji">
                <p className="text-secondaryText leading-9 text-xl">
                    We’re working hard to get Codershouse ready for everyone!
                    While we wrap up the finishing youches, we’re adding people
                    gradually to make sure nothing breaks
                </p>
                <div className="flex justify-center">
                    <Button onClick={startRegister} text="Get your username" />
                </div>
                <div className="text-blue ">
                    <span className="mr-2">Have an invite text?</span>
                    <Link to="/login" className="font-bold">
                        Sign in
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Home;
