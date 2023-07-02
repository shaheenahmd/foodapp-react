import React, { useState } from 'react'
import {data} from "../data/data.js";


const Food = () => {
   console.log(data);

   const [foods,setFoods]= useState(data)

//  filter type function 
    const filterType = (category)=>{
        setFoods(
            data.filter((item)=>{
            return item.category===category;
        })

        );
    };

    // filter price function 

    const filterPrice = (rate)=>{
       setFoods(
        data.filter((item)=>{
            return item.price===rate;
        })
       )
       
    }





  return (
   <div className='px-4 max-w-[1640px] mx-auto py-12'>
    <h1 className='text-orange-600 font-bold text-2xl lg:text-4xl pb-16 text-center'>Top rated items</h1>

    
    <div className='flex flex-col lg:flex-row justify-between'>
        {/* filter row */}
    <div className='max-width-[390px]'>
        <p className='ms-2 font-bold text-gray-800'>Filter type</p>
        <button onClick={()=>setFoods(data)} className='py-1 px-2 m-2 hover:bg-orange-500 hover:text-white shadow-none'>All</button>
        <button onClick={()=>filterType('burger')} className='py-1 px-2 m-2 hover:bg-orange-500 hover:text-white shadow-none'>Burgurs</button>
        <button onClick={()=>filterType('pizza')} className='py-1 px-2 m-2 hover:bg-orange-500 hover:text-white shadow-none'>Pizza's</button>
        <button onClick={()=>filterType('chicken')}  className='py-1 px-2 m-2 hover:bg-orange-500 hover:text-white shadow-none'>Chicken's</button>
        <button onClick={()=>filterType('salad')}  className='py-1 px-2 m-2 hover:bg-orange-500 hover:text-white shadow-none'>Salads</button>
    </div>
    {/* filter price */}
    <div className='mt-4 lg:mt-0 max-width-[390px]'>
        <p  className='ms-2 font-bold text-gray-800'>Filter Price</p>
        <button onClick={()=>filterPrice('$')} className='py-1 px-2 m-2 hover:bg-orange-500 hover:text-white shadow-none'>$</button>
        <button onClick={()=>filterPrice('$$')} className='py-1 px-2 m-2 hover:bg-orange-500 hover:text-white shadow-none'>$$</button>
        <button onClick={()=>filterPrice('$$$')} className='py-1 px-2 m-2 hover:bg-orange-500 hover:text-white shadow-none'>$$$</button>
        <button onClick={()=>filterPrice('$$$$')} className='py-1 px-2 m-2 hover:bg-orange-500 hover:text-white shadow-none'>$$$$</button>
    </div>
    </div>

    {/* display foods */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
        {foods.map((item, index)=> (
            <div key={index} className='border shadow-lg text-center hover:scale-105 duration-300 rounded-lg'>
                <img className='w-full h-[300px] object-cover rounded-t-lg' src={item.image} alt={item.name}/>
                <div className='flex justify-between items-center px-4 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p></p>
                    <span className='bg-orange-600 text-white p-2 rounded-full'>{item.price}</span>
                </div>
            </div>
            
        ))}
    </div>

   </div>
  )
}

export default Food