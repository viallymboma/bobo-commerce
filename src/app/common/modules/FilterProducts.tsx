"use client"
import { EcommerceContext } from '@/context/app.context';
import React, { useContext } from 'react'

const FilterProducts = () => {

    const { state, dispatch } = useContext(EcommerceContext);

  return (
    <div className="sticky mt-[3rem]">
        <header className="flex flex-col gap-3">
            <h1 className="font-bold text-[16px]">Filter Products</h1>
            <input type="text" name="searchAll" id="searchAllID" />
        </header>
    </div>
  )
}

export default FilterProducts