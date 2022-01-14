import React from 'react'

const Banner: React.FC = ():JSX.Element => {
  return (
    <div className='flex flex-col md:flex-row '>
      <div className='relative flex-1'>
      <img src="/images/ellipse.png" className='md:w-5/2 md:-bottom-1/2 -z-50 absolute' alt="" />
        <div className="z-50 flex w-full h-full flex-col justify-center items-center">
        <h1 className='text-6xl font-urbanist font-semibold'>We Support your Hustle</h1>
        <p></p>
        </div>
      </div>
      <div className="flex-1">
      <img src="/images/coffee.png" className='w-full h-full' alt="" />
      </div>
    </div>
  )
}

export default Banner
