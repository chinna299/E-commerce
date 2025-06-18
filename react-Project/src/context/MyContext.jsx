import React, { createContext, useEffect, useState } from 'react'
import { products,discoutProducts } from '../dataFile/products';

export const globalContext=createContext();
export default function MyContext({children}) {
  const[data,setData]=useState([]);
  const[discountData,setDiscountData]=useState([]);

  const fetchData=()=>{
    setData(products);
    setDiscountData(discoutProducts);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div>
      <globalContext.Provider value={{data,discountData}}>
        {children}
      </globalContext.Provider>
    </div>
  )
}

// This code creates a global context using React's Context API to manage product data across the application.
// It initializes the context with an empty array for products and discount products, fetches data from a local file, and provides this data to all child components through the context provider.
