import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';
import { assets } from '../assets/assets.js';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';
const RelatedProduct = ({Category, subCategory}) => {
    const { products, currency } = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        if(products.length>0){
            let  ProductCopy= products.slice();
            let filteredProducts = ProductCopy.filter(item => item.category === Category && item.subCategory === subCategory);
            setRelatedProducts(filteredProducts);
            console.log("relatedProducts",filteredProducts.slice(0,4));
        }
      
    }, [Category, subCategory, products]);
  return (
    <div className="mt-20">
      <Title text1="Related" text2="Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.slice(0,4).map((product,index) => (
          <ProductItem key={index }  id={product._id} name={product.name} image={product.image[0]} price={product.price} currency={currency} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct

     
