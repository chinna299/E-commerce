import React from 'react'
import Slider from './Curosel'
import Curosel from './Curosel'
import ServiceProducts from './ServiceProducts'
import DiscountProducts from './DiscountProducts'
import NewArrivals from './NewArrivals'
import BigDeals from './BigDeals'
import SingleProduct from './SingleProduct'


export default function Home() {
  return (
    <div>
      <Curosel/>
      <ServiceProducts/>
      <DiscountProducts/>
      <NewArrivals/>
      <BigDeals/>
      <SingleProduct/>
    </div>
  )
}

//this is the Home component that imports and renders various components like Curosel, ServiceProducts, DiscountProducts, NewArrivals, BigDeals, and SingleProduct to create a complete homepage layout.
