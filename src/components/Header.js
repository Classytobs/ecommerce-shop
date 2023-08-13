import React,{useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {

  const{handleClose} = useContext(SidebarContext)
  return <div>
            <div>Header</div>
            <div onClick={handleClose}>open/close</div>
        </div>
};

export default Header;
