import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import TotalAmount from '../components/TotalAmount'
import Title from '../components/Title'
import { assets } from '../assets/assets.js'

const PlaceOrder = () => {
  const[method,setMethod]=React.useState('cod');
  const {Navigate }=useContext(ShopContext);
  return (
    <div className="flex flex-col lg:flex-row gap-12 px-8 py-12">
      {/* Delivery Information */}
      <div className="flex-1">
        <Title text1="DELIVERY" text2="INFORMATION" />
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input type="text" placeholder="First name" className="border px-4 py-2 rounded w-full" />
            <input type="text" placeholder="Last name" className="border px-4 py-2 rounded w-full" />
          </div>
          <input type="email" placeholder="Email address" className="border px-4 py-2 rounded w-full" />
          <input type="text" placeholder="Street" className="border px-4 py-2 rounded w-full" />
          <div className="flex gap-4">
            <input type="text" placeholder="City" className="border px-4 py-2 rounded w-full" />
            <input type="text" placeholder="State" className="border px-4 py-2 rounded w-full" />
          </div>
          <div className="flex gap-4">
            <input type="text" placeholder="Zipcode" className="border px-4 py-2 rounded w-full" />
            <input type="text" placeholder="Country" className="border px-4 py-2 rounded w-full" />
          </div>
          <input type="text" placeholder="Phone" className="border px-4 py-2 rounded w-full" />
        </form>
      </div>
      {/* Cart Totals */}
      <div className="w-full lg:w-[400px] ">
  <TotalAmount />
  <div className="mt-12">
  <Title text1={'PAYMENT'} text2={'METHOD'} />
  {/* --------------- Payment Method Selection --------------- */}
  <div className="flex gap-0.5 flex-col lg:flex-row">
    <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
      <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : 'bg-white'}`}></p>
      <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
    </div>
    <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-3 px-3 cursor-pointer">
      <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : 'bg-white'}`}></p>
      <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
    </div>
    <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
      <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : 'bg-white'}`}></p>
      <p className="text-sm">cash on delivery </p>
    </div>
  </div>
  {/* --------------- End of Payment Method Selection --------------- */}
  <div className="mt-6">
    <button onClick={() => Navigate('/Orders')} className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors">
      PLACE ORDER
    </button>
  </div>
</div>
</div>
    </div>
  );
};

export default PlaceOrder