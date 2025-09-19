import { createContext } from "react";
import { products } from '../assets/assets.js'
import React from 'react'
export const ShopContext = createContext();

 const ShopContextProvider = ( props ) => {
    const currency = '$';
    const deliveryFee = 10;
    const [search,setSearch]=React.useState('');
    const [showSearch,setShowSearch]=React.useState(false);

    const value = {
        products,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;



// عشان اشارك البروبس داخل جميع الابناء بدون ما اضطر ابعت من كل واحد لواحد 