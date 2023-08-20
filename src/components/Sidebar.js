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

  return <div className={ `${isOpen? 'right-0':'-right-full'} w-full md:w-1/4 h-full bg-slate-100 fixed top-0 z-50  font-serif`}>
    <div className='flex flex-row justify-between p-6 shadow-lg items-center uppercase text-xl text-semibold'>
    <div>{`Shoping Bag (${itemAmount})`}</div>
    <IoMdArrowForward onClick={handleClose}/>
    </div>

    <div className='h-3/4 overflow-y-auto'>{cart.map((item)=>{
      return<CartItem item={item} key={item.id} />

    })}</div>

      <div>{`Total: $ ${parseFloat(total).toFixed(2)}`}</div>
        <div onClick={clearCart}>Clear Cart</div>
        <div>View cart</div>
        <div>Checkout</div>


    </div>;
};

export default Sidebar;
