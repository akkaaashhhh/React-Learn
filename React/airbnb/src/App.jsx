import './index.css'
import Navbar from "./navbar.jsx"
import Hero from "./Hero.jsx"
import React from "react"
import Card from './Card'
import data from '../public/data.jsx'

function App() {
  
  const cards = data.map(item=>{
    
    return <Card 
      key = {item.id}
      img = {item.coverImg}
      rating = {item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country = {item.location}
      title={item.title}
      price={item.price} 
      openSpots = {item.openSpots}
    />
  })

  return (
    <>
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
        {cards}
      </section>
    </>
  )
}

export default App
