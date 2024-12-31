import React from 'react'
import { BsRocketTakeoff } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5'
import { Link } from 'react-scroll'

const CallToAction = () => {
    return (
        <>
            <div className="call-to-action-wrapper md:h-388 h-auto md:py-10 py-10 flex justify-center flex-col text-center">
                <div className="">
                    <h1 className='md:text-4xl lg:text-5xl text-4xl text-white mb-2 md:mb-4 font-semibold'>Your <span className="fire-text">Vision</span>, Our <span className="fire-text">Precision</span>.</h1>
                    <p className="mb-3 md:text-xl text-sm md:w-13/20 text-center mx-auto text-white">Let's build something extraordinary together. Partner with us for reliable, efficient, and innovative metal fabrication services.</p>
                </div>
                <div className="buttons">
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
            </div>
        </>
    )
}

export default CallToAction