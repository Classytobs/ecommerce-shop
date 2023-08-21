import React,{useContext} from 'react';
import { BsBag } from 'react-icons/bs';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Header = () => {

  const{handleClose} = useContext(SidebarContext)

  const {itemAmount}=useContext(CartContext)
  return <div className='relative'>
  <div className='flex flex-row fixed z-20 w-full justify-between items-center content-center px-4 md:px-16 lg:px-40 py-5 bg-slate-100 shadow-lg text-dark font-serif'>
    <div className='text-4xl cursor-pointer flex flex-row' >
        <div>Classy</div>
        <div className="text-blue-600">Store</div>
    </div>
        <div>   
            <div onClick={handleClose} className='cursor-pointer'><BsBag className='text-2xl'/></div>
            <div>{itemAmount}</div>
            </div>     
        </div>
        </div>
};

export default Header;
