import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-1/2 h-full text-white max-h-[500px] bg-black/75 flex flex-col justify-center'>
                <h1 className='font-bold px-4 text-5xl md:text-6xl lg:text-7xl'>The <span className='text-orange-400'>Best</span></h1> <br/>
                <h1 className='font-bold px-4 text-5xl md:text-6xl lg:text-7xl'>Food <span className='text-orange-400'>Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Hero