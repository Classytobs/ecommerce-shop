import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem'
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'




const Sidebar = () => {

  const {isOpen, handleClose} = useContext(SidebarContext);
  
  const {cart, clearCart, total, itemAmount}=useContext(CartContext);

  return <div className={ `${isOpen? 'right-0':'-right-full'} w-full md:w-96 h-full bg-slate-100 fixed top-0 z-50  font-serif`}>
    <div className='flex flex-row justify-between p-6 shadow-lg items-center uppercase text-xl text-semibold'>
    <div>{`Shoping Bag (${itemAmount})`}</div>
    <IoMdArrowForward onClick={handleClose} className='cursor-pointer'/>
    </div>

    <div className='h-96 overflow-y-auto pl-2 flex flex-col justify-start border'>{cart.map((item)=>{
      return<CartItem item={item} key={item.id} />

    })}</div>

      <div className='flex justify-between items-center pt-4 pl-2 pr-2'>

      <div className='uppercase'>{`Total: $ ${parseFloat(total).toFixed(2)}`}</div>
        <div onClick={clearCart} className='cursor-pointer bg-red-500 text-white w-12 h-12 flex items-center justify-center'><FiTrash2 className='text-xl'/></div>
      
        </div>

        <Link to='/' className='bg-gray-400 flex justify-center items-center p-4 m-2 font-medium'>View cart</Link>
        <Link to='/' className='bg-primary text-white flex justify-center items-center p-4 m-2 font-medium'>Checkout</Link>
        


    </div>;
};

export default Sidebar;
