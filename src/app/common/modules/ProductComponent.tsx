"use client"; 
import { products } from '@/app/products';
import { EcommerceContext } from '@/context/app.context';
import { ProductType } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'

const ProductComponent = () => {
    const { state, dispatch } = useContext(EcommerceContext);
    const addQuantity: any = (obj: any) => {
        dispatch({ type: "ADDITEMTOCART", payload: obj })
    }
    console.log("Selected Element Array", state.selectedItems)
  return (
    <div className="mt-[3rem] grid grid-cols-[repeat(auto-fit,minmax(150px,300px))] justify-center gap-3  relative">
          { products && products.map ((product: ProductType ) => {
            return (
              <div key={ product?.id }  className={`flex flex-col justify-between items-between w-[100%] relative h-[400px] bg-black hover:border-[1px] hover:border-gray-500 rounded-md border-[1px] border-transparent cursor-pointer`}>
                <Image className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2" src={ product?.picture } width={ 150 } alt="icon" />
                <Link href={`/products/${ product?.id }`} className="flex flex-row items-center justify-between border-[1px] border-slate-500 py-2 px-4 w-[100%] rounded-3xl mx-2 mb-[1rem]">
                    <div className="text-[12px] whitespace-nowrap">
                        { product?.name }
                    </div>
                    <div className="whitespace-nowrap text-[12px] py-2 px-3 bg-blue-500 text-white rounded-2xl">
                        { product?.price } FCFA
                    </div>
                </Link>
                <div className='w-full flex justify-center pb-4' >
                    <button onClick={ () => addQuantity (product) } className='w-[60px] border-[1px] border-slate-500 flex flex-row justify-center items-center px-[1rem] py-[.5rem] rounded-lg'>
                        Add
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
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