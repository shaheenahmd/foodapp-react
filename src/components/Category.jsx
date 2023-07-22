import React from 'react'
import {categories} from '../data/data.js'


const Category = () => {

    console.log(categories.name);


  return (
    <div className='max-w-[1640px] mx-auto py-12 px-4'>
        <h1 className='text-orange-600 text-center font-bold text-2xl lg:text-4xl pb-12'>Top Rated Menu Items</h1>

        {/* categories */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 '>
            {categories.map((item,index)=>(
                <div className='shadow-lg justify-center items-center flex flex-col rounded py-4 bg-gray-100 hover:scale-105 duration-400'>
                    <img className='w-20 object-cover' src={item.image} alt={item.name} />
                    <h2 className='font-bold text-1xl '>{item.name}</h2>

                </div>
           ) )}
        </div>



    </div>
  )
}

export default Category