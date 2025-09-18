import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSalary from '../components/BestSalary'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSalary />
    </div>
  )
}

export default Home
