import React from 'react'
import HeroText from './HeroText';
import HeroImg from './HeroImg';
import Header from './Header';

const Hero = () => {
  return (
    <>
    

    <div className=' z-10 min-h-screen min-w-screen justify-center  flex py-[10%]  overflow-y-hidden'>
        <div className='text-white relative -ml-[20%] z-20 mx-[10%] flex justify-center w-[30%]'>
        <HeroText />    
        </div>
        

        <div className='absolute -mr-[30%] -mt-[10%] flex  justify-center w-[40%] h-full'>
        <HeroImg />
        </div>
        
    </div>
    </>
  )
}

export default Hero