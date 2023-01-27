import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {/* Card */}
      <div className=" rounded-xl relative ">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className='font-bold text-2xl px-2 pt-4 '> Fish Salad Dish </p>
          <p className='px-2'> Bistro's Favorite</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4' > Order Now</button>
       </div>
       <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl 'src='https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="none"/>
      </div>        
      <div className=" rounded-xl relative ">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className='font-bold text-2xl px-2 pt-4 '> Pastry and Boiled Egg on Plate </p>
          <p className='px-2'> Yummy</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4' > Order Now</button>
       </div>
       <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl 'src='https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="none"/>
      </div>        
      <div className=" rounded-xl relative ">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className='font-bold text-2xl px-2 pt-4 '> Grilled Barbeque </p>
          <p className='px-2'> Mouth-Watering</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4' > Order Now</button>
       </div>
       <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl 'src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="none"/>
      </div>        
    </div>
  )
}

export default HeadlineCards