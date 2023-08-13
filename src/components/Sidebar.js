import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem'




const Sidebar = () => {

  const {isOpen, handleClose} = useContext(SidebarContext);
  const {}=useContext(CartContext)

  return <div className={ `${isOpen? 'right-0':'-right-full'} w-full md:w-1/4 h-full bg-slate-200 fixed top-0 z-20`}>
    <div>Shoping Bag(0)</div>
    <div onClick={handleClose}>Back</div>
    </div>;
};

export default Sidebar;
