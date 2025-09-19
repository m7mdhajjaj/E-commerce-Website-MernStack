import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../assets/assets.js';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
const Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const { products } = useContext(ShopContext);
    const [product, setProduct] =useState(null);
  return (
    <div>
      
    </div>
  )
}

export default Product
