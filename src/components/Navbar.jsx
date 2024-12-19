import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoCallOutline, IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="z-30 fixed top-0 w-full shadow bg-white backdrop-blur-md px-4 sm:px-12 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="logo-wrapper text-lg">
                <h2 className="lg:text-xl sm:text-sm md:text-base font-bold">
                    N<span className="text-orange-400">S</span>{' '}
                    <span className="">FABRICATION</span>
                </h2>
            </div>

            {/* Navigation Links */}
            <ul
                className={`links items-center xl:gap-5 sm:gap-2 xl:text-xl sm:text-sm  font-medium duration-500 transition-all ease-in-out 
    ${isMenuOpen ? 'fixed top-[60px] flex flex-col gap-4 left-0 bg-black text-white backdrop-blur-md shadow w-full py-10' : 'hidden sm:flex z-10'}
    `}
            >
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-[3px] border-orange-400 text-orange-500 font-medium px-4 py-1 rounded-full duration-300"
                                : "hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-[3px] border-orange-400 text-orange-500 font-medium px-4 py-1 rounded-full duration-300"
                                : "hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300"
                        }
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-[3px] border-orange-400 text-orange-500 font-medium px-4 py-1 rounded-full duration-300"
                                : "hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all"
                        }
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-[3px] border-orange-400 text-orange-500 font-medium px-4 py-1 rounded-full duration-300"
                                : "hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all"
                        }
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>


            {/* Call Button */}
            <div className="hidden sm:block">
                <Link
                    to={'tellto:+919337820993'}
                    className="xl:text-lg sm:text-sm flex gap-1 items-center font-medium px-3 py-1 border bg-orange-400 text-white transition-all duration-300 hover:text-orange-400 hover:bg-transparent hover:shadow-sm hover:shadow-orange-400 border-orange-400 rounded-full"
                >
                    <IoCallOutline className="animate-vibration" />
                    +91 9337820993
                </Link>
            </div>

            {/* Hamburger Menu */}
            <div className="sm:hidden flex items-center duration-500">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
                    {isMenuOpen ? <IoClose className='duration-300' /> : <IoMenu className='duration-300' />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
