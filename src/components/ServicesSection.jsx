import React from 'react'
import servicesData from '../servicesData.json'
import ServiceCard from './Cards/ServiceCard'
import CallToAction from './CallToAction'

const ServicesSection = () => {
    return (
        <>
            <div id='services' className='services-section min-h-screen md:px-12 px-4 py-8 lg:py-24'>
                <h2 className="lg:text-4xl text-2xl font-semibold text-center text-white"><span className='fire-text'>Our</span> <span className="relative after:contents-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-orange-500">Services</span></h2>

                <div className="services-list md:my-10 my-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center flex-wrap gap-4 lg:gap-7 justify-center items-center">
                    {
                        servicesData.map((data) => {
                            return <ServiceCard key={data.id} data={data} />
                        })
                    }
                </div>
            </div>

            {/* ========Call to action========= */}

            <CallToAction />

        </>

    )
}

export default ServicesSection