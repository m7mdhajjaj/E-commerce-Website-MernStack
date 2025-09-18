import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSalary from '../components/BestSalary'
import OurPolicy from '../components/OurPolicy'
import NewsLettersBox from '../components/NewsLettersBox'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSalary />
      <OurPolicy />
      <NewsLettersBox />

    </div>
  )
}

export default Home
