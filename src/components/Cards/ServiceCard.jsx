import React from 'react'

const ServiceCard = ({ data }) => {
    const { id, title, description, image } = data
    return (
        <>
            <div className="service-card max-w-md overflow-hidden p-3 md:p-4 bg-gray-700/70 backdrop-blur-sm rounded-md flex flex-col min-h-full group">
                <div className="img-wrapper md:h-[400px] h-[240px] w-full overflow-hidden rounded-md">
                    <img src={image} alt={title} className='h-full w-full object-cover group-hover:scale-110 duration-300' />
                </div>
                <div className="">

                    <h2 className="md:text-3xl text-xl font-semibold fire-text my-2">{title}</h2>
                    <h5 className="md:text-xl text-base text-white">{description}</h5>
                </div>

            </div>

        </>
    )
}

export default ServiceCard