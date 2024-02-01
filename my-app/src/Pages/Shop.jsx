import React from 'react'
import { Hero } from '../Componenets/Hero/hero'
import Popular from '../Componenets/Popular/Popular'
import Offers from '../Componenets/Offers/Offers'
import NewCollections from '../Componenets/NewCollections/NewCollections'
import NewsLetter from '../Componenets/Newsletter/NewsLetter'
 const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
