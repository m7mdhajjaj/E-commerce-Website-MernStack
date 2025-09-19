import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collections from './pages/Collections'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Search from './components/Search'
const App = () => {
  return (
    <div  className='max-w-screen-xl mx-auto '> 
      <NavBar />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:id" element={<Product />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
