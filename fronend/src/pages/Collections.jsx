import React, { useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets.js';
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem.jsx';

const Collections = () => {
  const { products, search,setSearch } = React.useContext(ShopContext);
  const [showFilters, setShowFilters] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [category,setCategory]= React.useState([]);
  const [subCategory,setSubCategory]= React.useState([]);
  const [sort,setSort]= React.useState('relevant');

  useEffect(() => {
      setSelectedCategories(products.slice(0, 8));
    
  }, []);
  useEffect(() => {
    let filteredProducts = products;

    if (search.trim() !== '') {
      const lowercasedSearch = search.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(lowercasedSearch)
      );
    }

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter(product => category.includes(product.category));
    }
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter(product => subCategory.includes(product.subCategory));
    }
    if (sort === 'low to high') {
      filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
    }
    else if (sort === 'high to low') {
      filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
    }
    setSelectedCategories(filteredProducts.slice(0, 8));
  }, [category, subCategory, products, sort, search]);

  const toggleCategory = (e)=>{
    if (category.includes(e.target.value)) {
      setCategory(category.filter(item => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }

  }
  const toggleSubCategory = (e)=>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter(item => item !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  }
  const toggleOption =(e)=>{
    setSort(e.target.value);
  }

  return (
    <div className="py-4 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
      {/* Left Side - Filters */}
      <div className="w-full sm:w-[300px]">
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
        <div className={`space-y-6 ${showFilters ? 'block' : 'hidden'} sm:block`}>
          {/* Categories */}
          <div  className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium mb-2 uppercase">Categories</p>
            <div className="space-y-2">
              <label  className="flex items-center space-x-2">
                <input onChange={toggleCategory} type="checkbox" value="Men" className="form-checkbox text-gray-600" />
                <span className="text-gray-700">Men</span>
              </label>
              <label className="flex items-center space-x-2">
                <input onChange={toggleCategory} type="checkbox" value="Women" className="form-checkbox text-gray-600" />
                <span className="text-gray-700">Women</span>
              </label>
              <label className="flex items-center space-x-2">
                <input onChange={toggleCategory} type="checkbox" value="Kids" className="form-checkbox text-gray-600" />
                <span className="text-gray-700">Kids</span>
              </label>
            </div>
          </div>
          {/* Type */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium mb-2 uppercase">Type</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input onChange={toggleSubCategory} type="checkbox" value="Topwear" className="form-checkbox text-gray-600" />
                <span className="text-gray-700">Topwear</span>
              </label>
              <label className="flex items-center space-x-2">
                <input onChange={toggleSubCategory} type="checkbox" value="Bottomwear" className="form-checkbox text-gray-600" />
                <span className="text-gray-700">Bottomwear</span>
              </label>
              <label className="flex items-center space-x-2">
                <input onChange={toggleSubCategory} type="checkbox" value="Winterwear" className="form-checkbox text-gray-600" />
                <span className="text-gray-700">Winterwear</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Products */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <Title text1="all" text2="collections" />
          <select value={sort} onChange={toggleOption} className="border border-gray-300 rounded-lg p-2">
            <option  value="relevant">Sort by: Relevant</option>
            <option value="low to high">Sort by: Low to High</option>
            <option value="high to low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedCategories.map((product, index) => (
            <ProductItem
              key={index}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;