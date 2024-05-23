import React from 'react'
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { ResponsiveNav } from './ResponsiveNav';

const Landing = () => {
  return (
    <div className='bg-gradient-to-b from-primary to-secondary h-screen '> 
      <ResponsiveNav/>
        {/* <Navigation/> */}
        <Hero/>
    </div>
  )
}

export default Landing