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

  return <div>
    <div>image</div>
    <div>text</div>
  </div>;
};

export default ProductDetails;
