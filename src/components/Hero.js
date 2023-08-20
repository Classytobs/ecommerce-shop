import React from 'react';
import ecommerce from '../img/ecommerce.jpg'

const Hero = () => {
  return <div className='bg-slate-100 flex flex-col md:flex-row 
  lg:flex-row text-black justify-between min-h-screen 
  max-w-full items-center font-serif px-4 md:px-16 lg:px-40'>
    <div className='mb-8 w-2/4 h-full flex flex-col justify-center gap-y-4 h-screen'>
              <h1 className='text-5xl 
              md:text-6xl font-semibold tracking-wide leading-loose mb-8'>Do you love comfort, authenticity and style?</h1>

              <h2 className='text-2xl'>Then it is clear we are the right store for you</h2>   

              <div className='border-solid mt-6 p-3 max-w-fit rounded-md text-white text-xl md:text-2xl 
              bg-blue-500 hover:bg-blue-400 cursor-pointer'>
                <a href='#contact' >Find Out More</a>
            </div>
      </div>

      
      
    <div className='w-2/4 h-screen flex items-center'>
        <img src={ecommerce} alt='ecommerce' className='rounded-md h-4/6 shadow-lg' />
      </div>
  </div>;
};

export default Hero;
