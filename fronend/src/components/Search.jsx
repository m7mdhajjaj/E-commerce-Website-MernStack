import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { assets } from '../assets/assets.js';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = React.useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const location = useLocation();

  useEffect(() => {
    if(location.pathname=="/collections"&& !showSearch) {
      setVisible(true);
    }else{
        setVisible(false)
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="p-4 bg-white shadow-lg rounded-2xl max-w-lg mx-auto">
      <div className="relative flex items-center">
        {/* Input */}
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="w-full border border-gray-300 p-3 pr-10 pl-10 rounded-xl focus:ring-2 focus:ring-black outline-none text-gray-700"
        />

        {/* Search Icon (Left inside input) */}
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="h-5 w-5 absolute left-3 text-gray-400"
        />

        {/* Cross Icon (Right inside input) */}
        <img
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          alt="Close Icon"
          className="h-5 w-5 absolute right-3 cursor-pointer hover:scale-110 transition-transform"
        />
      </div>
    </div>
  ) : null;
};

export default Search;
