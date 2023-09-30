import React from 'react';
import ecommerce from '../img/ecommerce.jpg'

const Hero = () => {
  return <div className='bg-slate-100 flex flex-col md:flex-col 
  lg:flex-row text-black justify-start min-h-screen 
  max-w-full items-center font-serif px-4 md:px-16 lg:px-40 gap-y-12 pt-16 pb-8'>
    <div className=' flex flex-col justify-center gap-y-2 w-full h-full'>
              <h1 className='text-4xl 
              lg:text-6xl font-semibold tracking-normal leading-normal mb-6'>Do you love comfort, authenticity and style?</h1>

              <h2 className='text-xl'>Then it is clear we are the right store for you</h2>   

              <div className='mt-8'>
                <a href='#product' className='border-solid p-3 max-w-fit rounded-md text-white text-xl md:text-2xl 
              bg-blue-500 hover:bg-blue-400 cursor-pointer'>Find Out More</a>
            </div>
      </div> 
      
    <div className='flex items-center w-full h-full'>
        <img src={ecommerce} alt='ecommerce' className='rounded-md shadow-lg' />
      </div>
  </div>;
};

export default Hero;
