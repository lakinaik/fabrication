import React from 'react'

const StepCard = ({ number, title, desc, img }) => {
    return (
        <>
            <div className="step-card text-white relative lg:p-4 group
            ">
                <div className="lg:text-7xl  text-6xl text-slate-50 font-sans font-bold opacity absolute top-0
                after:contents-[''] after:absolute after:w-[120%] after:h-[2px] after:bg-white after:opacity-100 after:-bottom-1 after:left-2
                "><span className="opacity-10">{number}</span>
                    {/* <img src={img} alt={title} className='w-10 md:w-20 inline-block relative bottom-4' /> */}

                </div>
                <h3 className="fire-text font-medium text-2xl tracking-widest ml-2 lg:pt-20 pt-7 "> {title}</h3>
                <h5 className="text-lg text-slate-200 ml-2 lg:mt-2 mt-5">{desc}</h5>
            </div>
        </>
    )
}

export default StepCard