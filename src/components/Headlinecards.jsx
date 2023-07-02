import React from 'react'

const Headlinecards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {/* card */}
        <div className="rounded-xl relative flex ">
            {/* layer */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold pt-4 px-2 text-2xl'>Suns'out,Bogo's out</p>
                <p className='px-2'>through 8/26</p>
                <button className='border-white ml-2 px-2 py-0 bg-white text-black absolute bottom-4'>order now</button>
            </div>
            <img className='rounded-xl max-h-[180px] md:max-h-[250px] object-cover w-full' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className="rounded-xl relative flex ">
            {/* layer */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold pt-4 px-2 text-2xl'>New resuarent</p>
                <p className='px-2'>through 15/26</p>
                <button className='border-white ml-2 px-2 py-0 bg-white text-black absolute bottom-4'>order now</button>
            </div>
            <img className='rounded-xl max-h-[180px] md:max-h-[250px] object-cover w-full' src="https://images.pexels.com/photos/8753672/pexels-photo-8753672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className="rounded-xl relative flex ">
            {/* layer */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold pt-4 px-2 text-2xl'>We deliver desserts</p>
                <p className='px-2'>through 12/26</p>
                <button className='border-white ml-2 px-2 py-0 bg-white text-black absolute bottom-4'>order now</button>
            </div>
            <img className='rounded-xl max-h-[180px] md:max-h-[250px] object-cover w-full' src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

    </div>

    
  )
}

export default Headlinecards