import React from 'react'
import DiatPlanCard from './DiatPlanCard'

const DiatPlanContainer = () => {
  return (
    <div className='px-[15%] mt-28 py-16 bg-black h-max'>
      <h5 className='text-[#E0B985]'>Services</h5>
        <h3 className='text-5xl my-12 mb-16 text-center font-bold'>Personalized Diet & Workout Plans</h3>
        <div className='w-full flex justify-center gap-8'>
            <DiatPlanCard />
            <DiatPlanCard />
            <DiatPlanCard />
        </div>
    </div>
  )
}

export default DiatPlanContainer