import { createContext, use } from "react";
import { products } from '../assets/assets.js'
import React from 'react'
export const ShopContext = createContext();
import { useEffect } from "react";
import { toast } from "react-toastify";
 const ShopContextProvider = ( props ) => {
    const currency = '$';
    const deliveryFee = 10;
    const [search,setSearch]=React.useState('');
    const [showSearch,setShowSearch]=React.useState(false);
    const [cartItems,setCartItems]=React.useState({});

    const addtoCart= async (itemId, size) => {

        if (!size) {
            toast.error("Please select a size before adding to cart.");
            return;
        }
     let CartData = structuredClone(cartItems);
        if (CartData[itemId]) {
            if(CartData[itemId][size]){
                CartData[itemId][size] += 1;
            }else{
                CartData[itemId][size] = 1;
            }
        }else{
            CartData[itemId] = {};
            CartData[itemId][size] = 1;
        }
        setCartItems(CartData);
    }
  
   

    const getCartCount = () => {
  let totalCount = 0;

  for (const items in cartItems) {
    for (const item in cartItems[items]) {
      try {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item];
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return totalCount;
};
const updateQuantity = async (itemId, size, delta) => {
  let CartData = structuredClone(cartItems);
  CartData[itemId][size] = delta;
  setCartItems(CartData);
};

const getTotalAmount =  () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    const product = products.find((p) => p._id === itemId);
    if (product) {
      for (const size in cartItems[itemId]) {
        totalAmount += product.price * cartItems[itemId][size];
      }
    }
  }
  return totalAmount;
};


 const value = {
        products,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems,
        addtoCart,
        getCartCount,
        updateQuantity,
        getTotalAmount
    }

    
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;



// عشان اشارك البروبس داخل جميع الابناء بدون ما اضطر ابعت من كل واحد لواحد 