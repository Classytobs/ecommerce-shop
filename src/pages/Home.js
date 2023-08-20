import React,{useContext} from 'react';
import Product from '../components/Product';
import Hero from '../components/Hero';

import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
const {products} = useContext(ProductContext)

const filteredProducts = products.filter((item)=> {
  return(
    item.category === "men's clothing" || item.category === "women's clothing"
  )
})


  return( 
    <div className='mt-6 py-8 flex flex-col items-center justify-center 
    content-center '>
    <Hero />
    <div className='flex gap-16 flex-wrap px-4 md:px-16 lg:px-40 justify-center p-12'>{
    filteredProducts.map((product) => {
      return (
      <Product product={product} key={product.id}/>
      )

    })
  }
  </div>
  </div>);
};

export default Home;
