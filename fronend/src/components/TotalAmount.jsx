import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import Title from './Title'
const TotalAmount = () => {
    const { cartItems , currency , products, deliveryFee,getTotalAmount } = useContext(ShopContext);

  
  return (
    <div className='my-10 p-6 border border-gray-300 rounded'>
      <Title text1={"Total"} text2={"Amount"} />
        <div className='flex justify-between mt-4'>
            <p className='text-lg font-semibold'>Subtotal</p>
            <p className='text-lg font-semibold'>{currency}{getTotalAmount()}</p>
        </div>
        <div className='flex justify-between mt-2'>
            <p className='text-lg font-semibold'>Delivery Fee</p>
            <p className='text-lg font-semibold'>{currency}{deliveryFee}</p>
        </div>
        <hr className='my-4' />
        <div className='flex justify-between mt-2'>
            <p className='text-xl font-bold'>Total</p>
            <p className='text-xl font-bold'>{currency}{getTotalAmount() + deliveryFee}</p>
        </div>
            
    </div>
  )
}

export default TotalAmount
