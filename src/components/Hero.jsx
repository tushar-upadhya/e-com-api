import React from "react";

import pro from "../image/gril.png";

const Hero = () => {
    return (
        <section className="bg-orange-200 h-[648px] bg-center py-24">
            <div className="container mx-auto flex justify-around  h-full">
                {/* text */}
                <div className="flex flex-col justify-center ">
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-800 mr-3"></div>
                        New Trend
                        <h1 className="text-[70px] leading-[1.1] font-light mb-4">
                            SUMMER SALE <br />
                            <span className="font-semibold">women's</span>
                        </h1>
                    </div>
                </div>
                {/* image */}
                <div>
                    <img
                        className="hidden lg:block h-[550px]"
                        src={pro}
                        alt="profile pic"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
