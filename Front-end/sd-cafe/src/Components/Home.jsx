import React from 'react'
import Hero from './Hero'
import FoodCards from './FoodCard'
import LocationContact from './Location'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FoodCards/>
      <LocationContact/>
      <Reviews/>
    </div>
  )
}

export default Home
