import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoCallOutline, IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="z-40 fixed top-0 w-full shadow bg-white backdrop-blur-md px-4 sm:px-12 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="logo-wrapper text-lg">
                <h2 className="lg:text-xl sm:text-sm md:text-base font-bold">
                    N<span className="text-orange-400">S</span>{' '}
                    <span className="">FABRICATION</span>
                </h2>
            </div>

            {/* Navigation Links */}
            <ul
                className={`links hidden md:flex  items-center xl:gap-5 sm:gap-2 xl:text-xl sm:text-sm font-medium transition-all ease duration-500`}
            >

                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onClick={handleLinkClick}
                        activeClass="border-b-[3px] border-orange-400 text-orange-500 font-medium"
                        className="hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all cursor-pointer"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about-us"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-120}
                        onClick={handleLinkClick}
                        activeClass="border-b-[3px] border-orange-400 text-orange-500 font-medium"
                        className="hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all cursor-pointer"
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onClick={handleLinkClick}
                        activeClass="border-b-[3px] border-orange-400 text-orange-500 font-medium"
                        className="hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all cursor-pointer"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact-us"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onClick={handleLinkClick}
                        activeClass="border-b-[3px] border-orange-400 text-orange-500 font-medium"
                        className="hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all cursor-pointer"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>


            {/* Mobile Navbar */}

            <ul
                className={`${isMenuOpen ? 'translate-y-14' : '-translate-y-full'} links flex md:hidden flex-col items-center xl:gap-5 sm:gap-2 xl:text-xl sm:text-sm font-medium transition-all ease duration-500 fixed w-full py-20 gap-5 text-white bg-black top-0 left-0 `}
            >

                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onClick={handleLinkClick}
                        activeClass="border-b-[3px] border-orange-400 text-orange-500 font-medium"
                        className="hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all cursor-pointer"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about-us"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-120}
                        onClick={handleLinkClick}
                        activeClass="border-b-[3px] border-orange-400 text-orange-500 font-medium"
                        className="hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all cursor-pointer"
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onClick={handleLinkClick}
                        activeClass="border-b-[3px] border-orange-400 text-orange-500 font-medium"
                        className="hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all cursor-pointer"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact-us"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onClick={handleLinkClick}
                        activeClass="border-b-[3px] border-orange-400 text-orange-500 font-medium"
                        className="hover:text-orange-600 hover:border-b-[3px] hover:border-orange-400 rounded-full px-4 py-1 duration-300 transition-all cursor-pointer"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>


            {/* Call Button */}
            <div className="hidden md:block">
                <a
                    href="tel:+919337820993"
                    className="xl:text-lg sm:text-sm flex gap-1 items-center font-medium px-3 py-1 border bg-orange-400 text-white transition-all duration-300 hover:text-orange-400 hover:bg-transparent hover:shadow-sm hover:shadow-orange-400 border-orange-400 rounded-full"
                >
                    <IoCallOutline className="animate-vibration" />
                    +91 9337820993
                </a>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden flex items-center duration-500">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
                    {isMenuOpen ? <IoClose className='duration-300' /> : <IoMenu className='duration-300' />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
