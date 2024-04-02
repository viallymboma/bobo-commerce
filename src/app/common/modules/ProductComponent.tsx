"use client"; 
import { products } from '@/app/products';
import { EcommerceContext } from '@/context/app.context';
import { ProductType } from '@/lib/products';
import { addProduct, overAllTotal, truncateText } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React, { useCallback, useContext, useEffect, useState } from 'react'

const ProductComponent = () => {
  
  const { state, dispatch } = useContext(EcommerceContext); 

  const addQuantity: any = (obj: ProductType) => {
    dispatch({ type: "ADDITEMTOCART", payload: obj })
  }

  console.log("Selected Element Array", state.selectedItems)
  return (
    <div className="mt-[3rem] grid grid-cols-[repeat(auto-fit,minmax(150px,300px))] justify-center gap-3 relative">
          { products && products.map ((product: ProductType ) => {
            // const selectedItemsFromLocalStorage = JSON.parse(window.localStorage.getItem("selectedItems")!)
            // const correspondingelectedItems = selectedCookies ? selectedCookies.find((correspondingSel: ProductType) => {
            //   return product.id === correspondingSel?.id
            // }) : state?.selectedItems?.find((correspondingSel: ProductType) => {
            //   return product.id === correspondingSel?.id
            // })
            const correspondingelectedItems = state?.selectedItems?.find((correspondingSel: ProductType) => {
              return product.id === correspondingSel?.id
            })

            return (
              <div key={ product?.id }  className={`flex flex-col justify-between items-center w-[100%] relative h-[400px] bg-black hover:border-[1px] hover:border-gray-500 rounded-md border-[1px] border-transparent cursor-pointer pt-3`}>
                <Image className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2" src={ product?.picture } width={ 150 } alt="icon" />
                <Link href={{
                  pathname: `/products/${ product?.id }`, 
                  query: correspondingelectedItems ? correspondingelectedItems : product, 
                  // query: product, 
                }} className="flex flex-row items-center justify-between border-[1px] border-slate-500 py-2 px-4 w-[90%] rounded-3xl mx-2 mb-[1rem]">
                    <div className="text-[12px] whitespace-nowrap">
                        { truncateText(product?.name, 15) }
                    </div>
                    <div className="whitespace-nowrap text-[12px] py-2 px-3 bg-blue-500 text-white rounded-2xl">
                        { product?.price } FCFA
                    </div>
                </Link>
                  { correspondingelectedItems && 
                    <span className='mt-[10rem]'>
                      Selected {correspondingelectedItems?.quantity} time (s)
                    </span>
                  }
                <div className='w-full flex justify-center pb-4' >
                    <button onClick={ () => addQuantity (product) } className='w-[60px] border-[1px] border-slate-500 flex flex-row justify-center items-center px-[1rem] py-[.5rem] rounded-lg'>
                        Add
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                    </button>
                </div>
                {/* <div>
                  { product?.description }
                </div> */}
              </div>
            )
          }) }
    </div>
  )
}

export default ProductComponent







// router.push(`?${ createQueryString () }`)

    // createQueryString ()
    // searchParams.set("name", obj?.name)

      // router.push({
      //   ...router,
      //   query: {
      //     ...router.query,
      //     filter: products.join(','),
      //   },
      // },
      // undefined, 
      // { shallow: true });
// const searchParams = useSearchParams (); 
//   // const selectedName
//   // const newParam = searchParams.get("new")
//   // console.log("?.?.?..?.?.?.?>", newParam)
//   const router = useRouter ()
// const createQueryString = useCallback ((name: string, value: string ) => {
//   const params = new URLSearchParams();
//   params.set(name, value)
//   return (
//     params.toString()
//   )
// }, [searchParams])
