import React,{useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Header = () => {

  const{handleClose} = useContext(SidebarContext)

  const {itemAmount}=useContext(CartContext)
  return <div>
            <div>Header</div>
            <div onClick={handleClose}>open/close</div>
            <div>{itemAmount}</div>
        </div>
};

export default Header;
