import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';
import { assets } from '../assets/assets.js';
import RelatedProduct from '../components/RelatedProduct.jsx';

const Product = () => {
  const { id } = useParams();
  const { products, currency, addtoCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [Image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const FetchDataProduct = async () => {
    products.map(item => {
      if (item._id === id) {
        setProduct(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    FetchDataProduct();
  }, [id, products]);

  return product ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Details */}
      <div className="flex gap-8 flex-col lg:flex-row">
        {/* Thumbnails on the left */}
        <div className="flex flex-col gap-4 h-[500px]">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-20 h-32 object-cover rounded cursor-pointer "
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setImage(img)}
            />
          ))}
        </div>
        {/* Main image in the center */}
        <div className="flex items-center justify-center h-[500px]">
          <img src={Image} alt={product.name} className="h-full w-auto object-contain rounded-lg shadow" />
        </div>
        {/* Product Info on the right */}
        <div className="flex-1 flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p className="pl-2">112</p>
          </div>
          <p className="text-xl font-semibold mt-4 mb-2">
            {currency}
            {product.price}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>select size</p>
            <div className="flex gap-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`border border-gray-400 px-4 py-2 rounded hover:border-black transition-colors ${selectedSize === size ? "bg-black text-white" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addtoCart(product._id, selectedSize)}   className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            Add to cart
          </button>
          <hr className="border-gray-300 my-4" />
          <div className="text-gray-600 flex flex-col gap-2">
            <p>30-day money-back guarantee</p>
            <p>free shipping on all orders</p>
            <p>easy return and exchange</p>
          </div>
        </div>
      </div>
      {/* --------- Description & Review Section ------------ */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm mx-0.5">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-2 border px-5 py-3 text-sm text-gray-500 my-2">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit ad animi voluptates officiis laborum, suscipit, repudiandae molestiae dolorum dolorem dolore neque obcaecati soluta! Ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque!</p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProduct Category={product.category} subCategory={product.subCategory} />
    </div>
  ) : (
    <div>
      <h1>Product not found</h1>
    </div>
  );
};

export default Product;