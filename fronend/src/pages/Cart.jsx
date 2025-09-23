import React from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { useContext } from 'react'
import { assets } from '../assets/assets.js'
import { toast } from 'react-toastify'
import TotalAmount from '../components/TotalAmount.jsx'
const Cart = () => {
  const { cartItems , currency , products, updateQuantity,setCartItems } = useContext(ShopContext);


  const deleteItem = (itemId, size) => {
    let CartData = structuredClone(cartItems);
    
    if (CartData[itemId] && CartData[itemId][size]) {
      toast.success('Item removed from cart');
      delete CartData[itemId][size];
      if (Object.keys(CartData[itemId]).length === 0) {
        delete CartData[itemId];
      }
      setCartItems(CartData);
    }
  };  
  return (
    <div>
      <h1 className='text-2xl font-bold mt-6 mb-4'>Your Cart</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p className='text-gray-500'>Your cart is empty.</p>
      ) : (
        <div className='space-y-4'>
          {Object.keys(cartItems).map((itemId) => {
            const product = products.find((p) => p._id === itemId);
            if (!product) return null;
            return Object.keys(cartItems[itemId]).map((size) => (
              <div key={`${itemId}-${size}`} className='flex items-center space-x-4 border p-4 rounded'>
                <img src={product.image[0]} alt={product.name} className='w-20 h-20 object-cover rounded' />
                <div className='flex-1'>
                  <h2 className='text-lg font-semibold'>{product.name}</h2>
                  <p>Size: {size}</p>
                  <p>Price: {currency}{product.price}</p>
                  <p>Subtotal: {currency}{product.price * cartItems[itemId][size]}</p>
                  <div className='flex items-center space-x-2'>
                    <button
                      className='px-2 py-1 bg-gray-200 rounded'
                      onClick={() => updateQuantity(itemId, size, cartItems[itemId][size] - 1)}
                      disabled={cartItems[itemId][size] <= 1}
                    >   
                      -
                    </button>
                    <span>{cartItems[itemId][size]}</span>
                    <button
                      className='px-2 py-1 bg-gray-200 rounded'
                      onClick={() => updateQuantity(itemId, size, cartItems[itemId][size] + 1)}
                    >+
                    </button>
                  </div>
                </div>
               
                <img src={assets.bin_icon} className='w-6 h-6 cursor-pointer' onClick={() => deleteItem(itemId, size)} />
              </div>
            ));
          })}
        </div>
      )}
      {Object.keys(cartItems).length > 0 && <TotalAmount />}
    </div>
  )
}

export default Cart
