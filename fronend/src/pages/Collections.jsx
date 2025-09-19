import React from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets.js';

const Collections = () => {
  const { collections } = React.useContext(ShopContext);
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className="py-4 flex flex-col items-start space-y-6">
      {/* Filter Section */}
      <div className="w-[300px]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-semibold uppercase">Filters</p>
          <img
            className={`h-5 cursor-pointer sm:hidden ${showFilters ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Toggle Filters"
            onClick={() => setShowFilters(!showFilters)}
          />
        </div>
        {/* Filters Content */}
        <div className={`border border-gray-300 p-4 rounded-lg shadow-sm ${showFilters ? 'block' : 'hidden'} sm:block`}>
          <p className="text-lg font-medium mb-2 uppercase">Categories</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Men" className="form-checkbox text-gray-600" />
              <span className="text-gray-700">Men</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Women" className="form-checkbox text-gray-600" />
              <span className="text-gray-700">Women</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Kids" className="form-checkbox text-gray-600" />
              <span className="text-gray-700">Kids</span>
            </label>
          </div>
        </div>
      </div>

      {/* Sub Collections */}
      <div className={`w-[300px] ${showFilters ? 'block' : 'hidden'} sm:block`}>
        <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
          <p className="text-lg font-medium mb-2 uppercase">Type</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Upperwear" className="form-checkbox text-gray-600" />
              <span className="text-gray-700">Upperwear</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="BottomWear" className="form-checkbox text-gray-600" />
              <span className="text-gray-700">BottomWear</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Winterwear" className="form-checkbox text-gray-600" />
              <span className="text-gray-700">Winterwear</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;