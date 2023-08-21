import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const {id, title, image, price, amount} = item;

  const {removeFromCart, increaseAmount, decreaseAmount }= useContext(CartContext)

  return(  <div className='flex mt-2 border border-gray-200 font-light shadow-md'>
    <div className='w-full flex items-center'>
    <div className='w-full flex flex-row items-center gap-x-4'>
      <Link to={`/product/${id}`} >
        <img src={image} alt='me' className='w-32 h-full'/>
      </Link>
      <div className='w-full flex flex-col pr-2'>
        <div className='flex flex-row justify-between items-center '>
          <Link to={`/product/${id}`} className='uppercase text-sm mb-2 font-medium hover:underline w-48'>{title}
          </Link>
          <div onClick={()=>{removeFromCart(id)}} className='text-xl cursor-pointer text-grey-50'>x</div>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex gap-x-4 items-center border shadow-lg pl-2 pr-2 pt-1 pb-1'>
      <div onClick={()=>{decreaseAmount(id)}} className='cursor-pointer'>-</div>
        <div>{amount}</div>
        <div onClick={()=>{increaseAmount(id)}} className='cursor-pointer'>+</div>
        </div>
        <div className='flex items-center'>{price}</div>
        <div className='flex items-center font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
    </div>
        
      </div> 

      
      </div>
      
    </div>
    
    
  </div>);
};

export default CartItem;
