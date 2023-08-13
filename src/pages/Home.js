import React,{useContext} from 'react';
import Product from '../components/Product';

import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
const {products} = useContext(ProductContext)

const filteredProducts = products.filter((item)=> {
  return(
    item.category === "men's clothing" || item.category === "women's clothing"
  )
})


  return <div className='flex flex-row flex-wrap py-16 justify-start gap-x-12 gap-y-6 px-32'>{
    filteredProducts.map((product) => {
      return (
      <Product product={product} key={product.id}/>
      )

    })
  }
  </div>;
};

export default Home;
