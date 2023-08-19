import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {BsPlus} from "react-icons/bs";
import { CartContext } from '../contexts/CartContext';


const Product = ({product}) => {

  const {id, image, price, title, category}=product
  const {addToCart}=useContext(CartContext)

  return <div  className='relative h-96 w-64 bg-slate-200 flex flex-col gap-y-6 justify-start items-center pt-2'>
        <div className='flex flex-col'>
          <img src={image} alt='/' className='h-64 w-48 rounded-md '/>
              <div className=' absolute top-0 right-0'>
                <button className='bg-red-500' onClick={()=>{addToCart (product, id)}}>Add to cart</button>
                <Link to={`/product/${id}`} className='bg-white' >
                <BsPlus />

              </Link>
              </div>
        </div>
        <div>
          <div>
            {category}
          </div>
          <Link to={`/product/${id}`} className='font-semibold'>{title}</Link>
          <div>$ {price}</div>
        </div>
    </div>;
};

export default Product;
