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
