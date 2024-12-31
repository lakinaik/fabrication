import React from 'react'
import StepCard from './Cards/StepCard'

const StepSection = () => {
    return (
        <>
            <div className="step-wrapper md:w-[90%] w-full md:py-16 py-6 md:px-10 mx-auto relative lg:-top-28 md:-top-20 -stop-10 flex md:flex-row flex-col justify-center gap-4 p-4">
                <StepCard number={"01"} title={"GIVE US A CALL"} desc={"Your official source for 24/7 support"} img={"/support.png"} />
                <StepCard number={"02"} title={"Evaluate the cost"} desc={"Cost analysis helps evaluate contract profitability"} img={"/budget.png"} />
                <StepCard number={"03"} title={"Get the Job Done!"} desc={"To fulfil one's task, to do what is required to do"} img={"/thumbs-up.pnga"} />
            </div>
        </>
    )
}

export default StepSection