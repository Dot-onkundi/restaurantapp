import React, {useState} from 'react'
import {BsChevronCompactRight, BsChevronCompactLeft} from 'react-icons/bs'
import {RxDotFilled } from 'react-icons/rx'

const Slider = () => {
    const slides=[
        {
            url:'https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1609167921178-e295a98f808f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1626804475315-9644b37a2fe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
      
    ];

    const [currentIndex, setCurrentIndex]=useState(0)

    const prevSlide=()=>{
        const isFistSlide=currentIndex===0;
        const newIndex=isFistSlide? slides.length-1:currentIndex-1;
        setCurrentIndex(newIndex);
        
    };
    const nextSlide=()=>{
        const isLastSlide=currentIndex===slides.length-1;
        const newIndex=isLastSlide? 0 :currentIndex+1;
        setCurrentIndex(newIndex);
        

    };

    const goToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex);

    };
         
    //     useEffect(()=>{
    //     setTimeout(()=>{
    //         nextSlide();
    //     }, 3500);
    // });


  return (
    <div  
    className='max-w-[1640px] h-[780px] mx-auto px-4 py-10 relative group'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url}) ` }} className='w-full h-full rounded-xl bg-center bg-cover duration-500 '>

        </div>
        {/* Left Arrow  */}
        <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>



        {/* Right Arrow  */}
        <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex)=>(
                
                    <RxDotFilled key={slideIndex}
                    onClick={()=>goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'/>
                
                


            ))}
            



        </div>     
    </div>
  )
}

export default Slider
