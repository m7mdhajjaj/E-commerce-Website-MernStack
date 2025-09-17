import React from 'react'
import { assets } from '../assets/assets.js'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center bg-white py-10 px-6 sm:px-12">
        <div className="text-[#414141] w-full max-w-md">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]" />
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 mt-3">
            <p className="font-semibold text-sm md:text-base cursor-pointer hover:underline">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]" />
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 bg-pink-100 flex items-center justify-center">
        <img
          src={assets.hero_img}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
