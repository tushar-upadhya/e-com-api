import React from "react";

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-primary py-8">
            <div className="flex text-white flex-col gap-y-6 lg:flex-row items-center justify-between">
                <p className="text-white text-center">
                    Copyright &copy;{new Date().getFullYear()} E-com All right
                    reserved
                </p>

                <div className="text-center ">
                    <a
                        href="https://tusharupadhyay.vercel.app/"
                        target="_blank"
                        className="text-orange-300  hover:text-orange-400"
                    >
                        Tushar Upadhyay
                    </a>

                    <div className="flex gap-x-3 mt-3 ">
                        <div
                            href="https://www.linkedin.com/in/tusharupadhya/"
                            target="_blank"
                            className=" text-orange-300  hover:text-orange-400 cursor-pointer"
                        >
                            <AiFillLinkedin />
                        </div>

                        <div
                            href="#"
                            target="_blank"
                            className="flex gap-x-2  text-orange-300  hover:text-orange-400 cursor-pointer"
                        >
                            <AiFillGithub />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
