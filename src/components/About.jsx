import React from 'react'
import { BsYoutube,BsInstagram, BsTwitterX } from "react-icons/bs";

const About = () => {
  return (
    <div className='px-[15%] py-28'>
        <h3 className='my-12 text-[#E0B985]'>About</h3>
        <div className='w-full flex  gap-28 '>
            {/* IMAGE  */}
            <div className='w-[35%] h-max  border-4 border-white rounded-xl'>
                <img src="https://scontent.cdninstagram.com/v/t39.30808-6/396047305_18209441494265371_1257821676910484508_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=FHAEIpK-PksAX9O5C_h&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIyMTkwODIzNDA5NDkxNDk1Mg%3D%3D.2-ccb7-5&oh=00_AfBWl-LZSm8TH7CK0wsx31uVGW4RAzuMB2qWd-dceXzdog&oe=65CFF980&_nc_sid=10d13b" alt="Prem Joshi" className='w-full rounded-xl object-cover origin-center -rotate-12 transition-all hover:rotate-0'/>
            </div>

            {/* TEXT  */}
            <div className='w-[60%]'>
                <h1 className='text-8xl font-bold mb-6 '>Prem Joshi</h1>
                <p className='leading-8'>Hello, My name is Prem Joshi. It all started when I was 11 years old. My brother and I joined a group of athletes, taught by a professional coach. My goal was to break the 400m running world record. I was obsessed. But in 2020, I shifted to calisthenics, realizing my genetics weren&apos;t suited for running. Since 2021, I&apos;ve been learning how to maximize strength, muscle mass, and proper diet. After 2 years, I noticed my genetic potential for muscle growth and gained knowledge in bodybuilding. Now, my dream is to become one of India&apos;s top fitness influencers, helping others on their self-development journey.</p>

                {/* FOLLOWERS  */}
                <div className='border p-8 w-max my-8'>
                    <h5 className='font-bold text-white text-2xl my-1'>Social Media</h5>
                    <p>Followers on different platforms</p>
                    <div className='mt-8 flex flex-col gap-4'>
                        <div className='flex gap-4 items-center'>
                            <span className='text-[#E0B985] text-2xl'><BsYoutube /></span>
                            <span className='font-bold text-white'>Youtube</span>
                            <span className=' text-gray-400'>Subscribers</span>
                            <span className='font-bold text-white'>75K+</span>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <span className='text-[#E0B985] text-2xl'><BsInstagram /></span>
                            <span className='font-bold text-white'>Instagram</span>
                            <span className=' text-gray-400'>Subscribers</span>
                            <span className='font-bold text-white'>126K+</span>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About