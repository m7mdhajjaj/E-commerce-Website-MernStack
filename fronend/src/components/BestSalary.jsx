import React from 'react'
import { assets } from '../assets/assets.js'
import { ShopContext } from '../context/ShopContext.jsx'
import ProductItem from './ProductItem.jsx'
const BestSalary = () => {
    const {products} = React.useContext(ShopContext)
    const [BestSalaryProducts, setBestSalaryProducts] = React.useState([])

    React.useEffect(() => {
        const BestSeller = products.filter(product => product.bestseller === true);
        setBestSalaryProducts(BestSeller.slice(0,4))
      }, [])
      console.log(BestSalaryProducts);
  return (
        <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <p className='text-gray-500'>
        BEST <span className='text-gray-700 font-medium'>SELLER</span></p>
        <p className='text-gray-500 text-m'> Our most popular products based on sales .</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {BestSalaryProducts.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
  )
}

export default BestSalary
