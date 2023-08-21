import React from 'react';

const Footer = () => {
  return <div className='flex flex-col w-full justify-between items-center  px-6 md:px-16 lg:px-32 gap-y-8 py-5 bg-slate-100 text-dark font-serif'>

        <div href="#home"className='text-3xl md:text-4xl cursor-pointer flex flex-row '>
          <div>Classy</div>
          <div className="text-blue-600">Store</div>
        </div>


      <div className='flex flex-row  gap-x-2 justify-start'>
        <div className='underline'><h2> Terms of Service</h2></div>
        <div><h2>.</h2></div>
        <div className='underline'><h2> Privacy Policy</h2></div>
        
      </div>
      
      <div>
          <small>Copyright @ Classystore.</small>
      </div>
    
  </div>
};

export default Footer;
