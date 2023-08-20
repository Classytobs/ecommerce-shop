import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {BsPlus, BsEyeFill} from "react-icons/bs";
import { CartContext } from '../contexts/CartContext';


const Product = ({product}) => {

  const {id, image, price, title, category}=product
  const {addToCart}=useContext(CartContext)

  return <div className='w-72 h-96'>
        <div className='relative rounded-md shadow-2xl flex justify-center items-center p-8 group transition w-72 h-72 mb-4'>
          <div className='w-full w-full flex justify-center items-center'>
            <div className='w-32'>
          <img className='group-hover:scale-110 transition duration-300'src={image} alt='/'/>
          </div>
          <div className=' absolute top-0 -right-11 group-hover:right-2  flex flex-col bg-blue-300 
          gap-y-2 opacity-0 group-hover:opacity-100 items-center p-2 transition-all duration-300'>
                <button className='text-white flex justify-center items-center h-8 w-8 bg-blue-500' onClick={()=>{addToCart (product, id)}}>
                <BsPlus className='text-3xl' />
                </button>
                <Link to={`/product/${id}`} className='bg-white h-8 w-8 flex justify-center items-center' >
                    <BsEyeFill /> 
              </Link>
          </div>
          </div>
        </div>

        <div>
          <div >
            {category}
          </div>
          <Link to={`/product/${id}`} className='font-semibold'>{title}</Link>
          <div className='font-semibold'>$ {price}</div>
        </div>
    </div>;
};

export default Product;
