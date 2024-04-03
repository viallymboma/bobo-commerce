"use client"
import { EcommerceContext } from '@/context/app.context';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'

const FilterProducts = () => {

  const { state, dispatch } = useContext(EcommerceContext);

  const router = useRouter ()

  const pathName = usePathname ()

  const searchParams = useSearchParams ()

  const filterShop = (e: any) => {
    console.log("<<<<<<<", e.target.value)
    const writtenSearchParam = new URLSearchParams (searchParams)
    writtenSearchParam.set ("search", e.target.value)
    router.push(`${ pathName }?${ writtenSearchParam.toString() }`)
    // if (e.target.value.length > 0) {
    // }
    dispatch({ type: "FILTERPRODCUTS", payload: e.target.value })
  }

  const [ searchEle, setSearchEle ] = useState ("")

    
  useEffect (() => {
    const writtenSearchParam = new URLSearchParams (searchParams)
    if (writtenSearchParam) {
      const searchEle = writtenSearchParam.get ("search")
      setSearchEle (writtenSearchParam.get ("search")!)
      if (searchEle) {
        dispatch({ type: "FILTERPRODCUTS", payload: searchEle }) 
      }
    }

  }, [])

  return (
    <div className="sticky mt-[3rem]">
        <header className="flex flex-col gap-3">
            <h1 className="font-bold text-[16px] ">Filter Products</h1>
            <input className='text-black' onChange={ (e) => {filterShop (e)} } type="text" name="searchAll" id="searchAllID" />
            {/* value={ searchEle ? searchEle : "" } */}
        </header>
    </div>
  )
}

export default FilterProducts