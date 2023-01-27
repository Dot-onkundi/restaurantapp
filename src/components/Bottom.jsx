import React from 'react'
import {GiHearts} from 'react-icons/gi'

const Bottom = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <div className="flex flex-col gap-2 items-center mx-auto">
            <h1 className='text-black font-bold text-4xl text-center'> Share The Love </h1>
            <GiHearts size={30} className='text-red-700 animate-pulse '/>


        </div>
        <p className=' text-center text-xl py-5 leading-8 text-gray-800'> "Your food and pastries are so good, and you have an amazing selection and dairy free/vegetarian options. I have become such a loyal customer and almost everyone I know is starting to get under my Bistro Craze!    "  </p>
        <p className=' text-center text-md py-2 leading-8 text-gray-600'> Emmanuel-Nairobi</p>




    </div>
  )
}

export default Bottom