import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem'




const Sidebar = () => {

  const {isOpen, handleClose} = useContext(SidebarContext);
  
  const {cart, clearCart, total}=useContext(CartContext);

  return <div className={ `${isOpen? 'right-0':'-right-full'} w-full md:w-1/4 h-full  bg-slate-200 fixed top-0 z-20`}>
    <div>
    <div>Shoping Bag(0)</div>
    <div onClick={handleClose}>Back</div>
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
