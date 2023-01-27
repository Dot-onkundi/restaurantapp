import React from 'react'
import { useState } from 'react'
import {data} from '../data/Data.js'

const Foods = () => {

    const[foods, setFoods]=useState(data)

    // Filter type
    const filterType=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===category;

            })
        )


    }

    // Filter price
    const filterPrice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price===price;

            })
        )


    }

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-black font-bold text-4xl text-center'>Favorite Menu Items </h1>
        {/* Filter Row */}
        <div className=" flex flex-col lg:flex-row justify-between ">
            {/* Filter Type */}
            <div className="">
                <p className='font-bold text-gray-700 '>Filter Type</p> 
                <div className="flex justify-between flex-wrap md:gap-3">
                    <button onClick={()=>setFoods(data)} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'>All </button>
                    <button onClick={()=>filterType('burger')} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'>Burgers </button>
                    <button onClick={()=>filterType('pizza')} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'>Pizza </button>
                    <button onClick={()=>filterType('chicken')} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'>Chicken </button>
                    <button onClick={()=>filterType('salad')} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'>Salads </button>
                    
                </div>


            </div>
            {/* Filter Price */}
            
            <div className="">
                <p className='font-bold text-gray-700 '>Filter Price</p>
                <div className="flex  justify-between md:gap-3 ">
                <button onClick={()=>filterPrice('600')} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'> 600</button>
                <button onClick={()=>filterPrice('1500')} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'> 1500 </button>
                <button onClick={()=>filterPrice('2500')} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'> 2500</button>
                <button onClick={()=>filterPrice('3000')} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'> 3000</button>
                <button onClick={()=>filterPrice('6000')} className='text-white bg-gray-800 hover:bg-gray-300 hover:text-gray-800'> 6000</button>

                    
                </div>
                
            </div>


        </div> 
        {/* Display foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
            {foods.map((item,index)=>(
                <div className="border shadow-lg rounded-lg hover:scale-105 duration-500" key={index}>
                    <img className='w-full h-[280px] object-cover rounded-t-lg' src={item.image} alt={item.index}/>
                    <div className="flex justify-between px-2 py-4">
                        <p>{item.name}</p>
                        <p>
                            <span className='text-white bg-[#f08080] rounded-full'>{item.price}</span>
                        </p>

                    </div>


                </div>


            ))}
            


        </div>




    </div>
  )
}

export default Foods