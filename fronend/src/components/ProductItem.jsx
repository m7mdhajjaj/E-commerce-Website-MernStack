import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, name, image, price }) => {
  const { currency, deliveryFee } = useContext(ShopContext)

  return (
    <Link
      to={`/product/${id}`}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 font-medium">
          {currency}{price}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Delivery Fee: {currency}{deliveryFee}
        </p>
      </div>
    </Link>
  )
}

export default ProductItem
