import React from "react";
import { Link } from "react-scroll";
import StepSection from "./StepSection";

const AboutSection = () => {
    return (
        <>
            <StepSection />
            <div
                className="about-us-section md:px-12 px-4 flex lg:flex-row flex-col-reverse lg:gap-7 gap-3 py-4 lg:py-20"
                id="about-us"
            >
                <div className="grid grid-cols-4 lg:w-1/2 w-full gap-2">
                    <div className="relative col-span-2 rounded-md shadow-sm  overflow-hidden group">
                        <h2 className="absolute md:left-[18%] -bottom-full group-hover:bottom-10 duration-300 tracking-wider z-20 md:text-2xl text-xl text-center font-bold text-white px-2">Main Gate Design</h2>
                        <img
                            src="/Images/products/pr-1.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center group-hover:scale-110 duration-300 brightness-100 group-hover:brightness-50"
                        />
                    </div>
                    <div className="relative col-span-2 row-span-2 rounded-md shadow-sm overflow-hidden group">
                        <h2 className="absolute md:left-[18%] -bottom-full group-hover:bottom-10 duration-300 tracking-wider z-20 md:text-2xl text-xl text-center font-bold text-white px-2">Balcony Frame Border</h2>
                        <img
                            src="/Images/products/pr-2.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center group-hover:scale-110 duration-300 brightness-100 group-hover:brightness-50"
                        />
                    </div>
                    <div className="relative rounded-md shadow-sm overflow-hidden group">
                        <h2 className="absolute md:left-[18%] -bottom-full group-hover:bottom-10 duration-300 tracking-wider z-20 md:text-xl text-xs text-center font-bold text-white px-2">Window Design</h2>
                        <img
                            src="/Images/products/pr-3.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center group-hover:scale-110 duration-300 brightness-100 group-hover:brightness-50"
                        />
                    </div>
                    <div className="relative rounded-md shadow-sm overflow-hidden group">
                        <h2 className="absolute md:left-[18%] -bottom-full group-hover:bottom-10 duration-300 tracking-wider z-20 md:text-xl text-xs text-center font-bold text-white px-2">Metal Furniture</h2>
                        <img
                            src="/Images/products/pr-4.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center group-hover:scale-110 duration-300 brightness-100 group-hover:brightness-50"
                        />
                    </div>
                    <div className="relative col-span-4 rounded-md shadow-sm overflow-hidden group">
                        <h2 className="absolute md:left-[18%] left- -bottom-full group-hover:bottom-10 duration-300 tracking-wider z-20 md:text-2xl text-xl text-center font-bold text-white px-2">Custom Metal Staircase Railing</h2>
                        <img
                            src="/Images/products/pr-5.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center group-hover:scale-110 duration-300 brightness-100 group-hover:brightness-50"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h1 className="lg:text-6xl text-3xl font-semibold">
                        <span className="relative after:contents-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-gradient-to-r after:from-orange-700 after:to-orange-400 ">
                            About
                        </span>{" "}
                        <span className="fire-text">Us</span>
                    </h1>

                    <p className="lg:text-xl text-base mt-6 tracking-wide">
                        We <span className="fire-text font-semibold">Odisha Fabrication</span>, Located in the heart of Bhubaneswar, Odisha, our metal fabrication company is dedicated to delivering top-quality solutions that cater to your unique needs. We take pride in our craftsmanship, blending precision and durability to create products that stand the test of time. With a strong focus on quality, we ensure every project meets the highest industry standards.
                    </p>
                    <p className="lg:text-xl text-base my-4 tracking-wide">We provide affordable, high-quality solutions with efficient processes to ensure timely, exceptional results.</p>
                    <p className="lg:text-xl text-base my-4 tracking-wide">Driven by innovation and cutting-edge technology, we bring your ideas to life with expert guidance and superior craftsmanship. Contact us at <a href="tel:9193327820993" className="text-blue-500 font-semibold">+91 9337820993</a> to discuss your metal fabrication needs today.</p>
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">

                        <div className="backdrop-blur-sm border rounded-md shadow-sm flex flex-col justify-center items-center p-3 bg-orange-900/5">
                            <h2 className="lg:text-6xl text-3xl font-semibold fire-text">10+</h2>
                            <h6 className="mt-2 lg:text-3xl text-xl text-center font-semibold">Industy Experience</h6>
                        </div>
                        <div className="backdrop-blur-sm border rounded-md shadow-sm flex flex-col items-center justify-center p-3 bg-orange-900/5">
                            <h2 className="lg:lg:text-6xl text-3xl font-semibold fire-text">1000+</h2>
                            <h6 className="mt-2 lg:text-3xl text-xl text-center font-semibold">Projects Done</h6>
                        </div>
                        <div className="backdrop-blur-sm border rounded-md shadow-sm flex flex-col justify-center items-center p-3 bg-orange-900/5 col-span-2 lg:col-auto">
                            <h2 className="lg:text-6xl text-3xl font-semibold fire-text">100+</h2>
                            <h6 className="mt-2 lg:text-3xl text-xl text-center font-semibold">Happy Customers</h6>
                        </div>
                        <div className="mt-1 col-span-3 flex items-center justify-center w-full overflow-hidden">
                            <Link to="contact-us" className="w-full text-center lg:text-xl text-lg bg-gradient-to-r from-orange-600 to-orange-400 text-white transition-all duration-300  border-orange-400 hover:bg-gradient-to-l cursor-pointer lg:py-4 py-2 rounded-md">Book an Appointment</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AboutSection;
