import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

const ProductDetails = () => {

  const {id} = useParams()
  const {products} =useContext(ProductContext)
  const {addToCart} = useContext(CartContext)

  const product = products.find(item => {
    return item.id === parseInt(id)
  })

  if(!product){
    return (<div className='flex items-center h-screen justify-center'>Loading...</div>)
  }


  const {image,title,price, description}=product

  return <div className='bg-slate-50 flex  md:flex-row 
  lg:flex-row text-black justify-center min-h-screen 
  max-w-full items-center font-serif px-4 md:px-16 lg:px-40 pt-16'>
    
    <div className='flex flex-col md:flex-row w-full h-full items-center pt-8 justify-center text-center md:text-start'>
    <div><img className='md:h-80 h-48 w-[200px] md:w-[300px]' src={image} alt='productimage' /></div>
    <div className='flex flex-col justify-center items-center md:justify-start md:items-start md:ml-6'>
    <div className='text-[26px] font-medium mt-2'>{title}</div>
    <div className='text-xl mt-2'>$ {price}</div>
    <div className='mb-8 md:max-w-[600px] md:text-start'>{description}</div>
    <button onClick={()=> addToCart(product, product.id)} className='bg-primary flex justify-center items-center 
    p-4 mb-4 text-white font-medium'>Add to cart</button>
    </div>
    </div>
  </div>;
};

export default ProductDetails;
