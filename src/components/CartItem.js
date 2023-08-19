import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const {id, title, image, price, amount} = item;

  const {removeFromCart, increaseAmount, decreaseAmount }= useContext(CartContext)

  return(  <div className='flex'>
    <div className='w-full flex flex-row items-center h-64 gap-x-4'>
      <Link to={`/product/${id}`} >
        <img src={image} alt='me' className='w-32'/>
      </Link>
      <div>
        <div>
          <Link to={`/product/${id}`}>{title}
          </Link>
        </div>
        <div onClick={()=>{decreaseAmount(id)}}>-</div>
        <div>{amount}</div>
        <div onClick={()=>{increaseAmount(id)}}>+</div>
        <div>{price}</div>
        <div>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        <div onClick={()=>{removeFromCart(id)}}>x</div>
      </div>
    </div>
    
  </div>);
};

export default CartItem;
