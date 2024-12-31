import React from 'react'
import { BsRocketTakeoff } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5'
import { Link } from 'react-scroll'

const HeroSection = () => {
    return (
        <>
            <div id='home' className="hero-section w-full flex items-center lg:px-12 lg:py-56 md:px-10 px-4 pt-24 pb-10">
                <div className="lg:w-[60%] md:w-[80%] w-full">
                    <h4 className="lg:text-2xl sm:text-lg font-medium text-white mb-2 ">We Build the <span className="fire-text font-bold">Best.</span></h4>
                    <h2 className="lg:text-7xl md:text-5xl text-4xl text-white font-bold"><span className="fire-text">Odisha's</span> Best <span className="fire-text">Fabrication</span> Services <span className="fire-tex">-</span> <span className="">Built</span> for <span className="fire-text">Excellence.</span></h2>

                    <p className="mt-2 text-slate-200 md:text-lg text-xs">
                        At Your Company Name, We're Odisha's go-to for custom fabrication, expert repairs, and bringing your ideas to life—all at unbeatable prices. Let's create something amazing together!
                    </p>


                    <div className='md:my-6 my-4'>
                        <Link to="contact-us" className='cursor-pointer md:text-lg text-sm inline-flex gap-1 items-center font-medium px-3 py-1 border bg-gradient-to-r from-orange-600 to-orange-400 text-white transition-all duration-300 hover:bg-gradient-to-l hover:shadow-sm hover:shadow-orange-400 border-orange-400  rounded-full'>
                            <BsRocketTakeoff />
                            Book Now</Link>
                        <a
                            href="tel:+919337820993"
                            className="xl:text-lg sm:text-sm inline-flex gap-1 items-center font-medium px-3 py-1 border text-orange-400 backdrop-blur-sm transition-all duration-300 ml-4 border-orange-400 rounded-full"
                        >
                            <IoCallOutline className="animate-vibration" />
                            +91 9337820993
                        </a>
                    </div>
                    <h4 className="md:text-2xl md:my-3 my-1 text-white">Follow Us on:</h4>
                    <div className="flex gap-2">
                        <a href="" target='_blank'>
                            <img src="/instagram.png" alt="instagram" className='md:w-10 w-8 hover:scale-125 duration-300' />
                        </a>
                        <a href="" target='_blank'>
                            <img src="/facebook.png" alt="facebook" className='md:w-10 w-8 hover:scale-125 duration-300' />
                        </a>
                        <a href="" target='_blank'>
                            <img src="/pintrest.png" alt="pintrest" className='md:w-10 w-8 hover:scale-125 duration-300' />
                        </a>
                        <a href="" target='_blank'>
                            <img src="/twitter.png" alt="twitter" className='md:w-10 w-8 hover:scale-125 duration-300' />
                        </a>
                        <a href="" target='_blank'>
                            <img src="/youtube.png" alt="youtube" className='md:w-10 w-8 hover:scale-125 duration-300' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection