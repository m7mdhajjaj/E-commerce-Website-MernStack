import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { FiMenu, FiX } from 'react-icons/fi'

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='flex justify-between items-center py-5 font-medium relative bg-white'>
      {/* Logo */}
      <img src={assets.logo} alt="Logo" />

      {/* Links - Desktop */}
      <div className='flex space-x-4 sm:flex hidden'>
        {["Home", "About", "Contact", "Collections"].map((text) => (
          <div key={text} className="flex flex-col items-center">
            <Link
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className='text-gray-600 hover:text-gray-800'
            >
              {text}
            </Link>
            <div className="w-8 h-0.5 bg-gray-300 mt-1" />
          </div>
        ))}
      </div>

      {/* Icons */}
      <div className='flex items-center space-x-4'>
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="w-8 h-8 object-contain"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            src={assets.profile_icon}
            alt="Profile Icon"
            className="w-8 h-8 object-contain cursor-pointer"
          />
          <div className="absolute right-0 hidden group-hover:block z-10">
            <div className="bg-white shadow-md rounded-md mt-2 p-4 flex flex-col space-y-2">
              <Link to="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
              <Link to="/orders" className="text-gray-600 hover:text-gray-800">Orders</Link>
              <Link to="/logout" className="text-gray-600 hover:text-gray-800">Logout</Link>
            </div>
          </div>
        </div>

        <Link to="/cart" className='relative'>
          <img
            src={assets.cart_icon}
            alt="Cart Icon"
            className="w-8 h-8 object-contain"
          />
          <p className='absolute top-5 right-0 bg-red-500 text-white rounded-full px-1 text-xs '>10</p>
        </Link>

        {/* Menu Icon - Mobile */}
        <button 
          onClick={() => setVisible(!visible)} 
          className="sm:hidden cursor-pointer text-gray-700"
        >
          {visible ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Links Dropdown */}
      {visible && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 sm:hidden z-20">
          {["Home", "About", "Contact", "Collections"].map((text) => (
            <Link
              key={text}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className='text-gray-600 hover:text-gray-800 py-2 w-full text-center'
              onClick={() => setVisible(false)}
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavBar
