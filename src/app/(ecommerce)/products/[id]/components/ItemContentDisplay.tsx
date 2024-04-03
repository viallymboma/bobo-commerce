"use client"; 

import { EcommerceContext } from '@/context/app.context';
import useAddData from '@/hooks/useAddData';
import useGetData from '@/hooks/useGetData';
import useRemoveData from '@/hooks/useRemoveData';
// import useGetData from '@/hooks/useGetData';
import { ProductType, SelectedProductType } from '@/lib/products';
import React, { useContext } from 'react'

const ItemContentDisplay = ({ id, allData }: {
    id: any, 
    allData: ProductType | SelectedProductType
}) => {
    
    console.log("datatatatata: ", allData, allData.price)

    // const { state, dispatch, addQuantity, } = useAddData ( allData )
    // const { removeQuantity } = useRemoveData (allData); 
    allData = {
        ...allData, 
        // price: parseInt(allData?.price?.toString())
        price: allData?.price, 
    }
    // const { selectedItems, selectedItem } = useGetData (parseInt(allData?.id?.toString()))
    const { selectedItems, selectedItem } = useGetData (allData?.id)
    console.log("KKKKKKK", selectedItems)

    const { state, dispatch } = useContext(EcommerceContext); 

    const removeQuantity = (obj: any) => {
        dispatch({ type: "REMOVEITEMTOCART", payload: obj })
    }

    const addQuantity = (obj: any) => {
        dispatch({ type: "ADDITEMTOCART", payload: obj })
    }


    
    return (
        <div className='flex flex-col w-[50%] justify-center'>
            <div className='flex flex-col border-b-[1px] border-b-slate-600 pb-3'>
                <h1 className='text-[2.5rem] font-bold '>{ allData?.name }</h1>
                <div>
                    <h3 className='flex justify-center text-[14px] px-[1rem] py-[.5rem] rounded-3xl bg-blue-600 text-white w-[20%]'>
                        { allData?.price } FCFA
                    </h3>
                </div>
            </div>
            <div className='mt-[4rem]'>
                <p> { allData?.description } </p>
            </div>
            {
                selectedItems?.length === 0 &&
                    <div className='mt-[3rem]'>
                        <button onClick={ () => addQuantity ( allData ) } className='bg-blue-600 w-[100%]  flex flex-row justify-center items-center px-[1rem] py-[.5rem] rounded-lg gap-[3rem]'>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> */}
                            Add To Cart
                        </button>
                    </div>
            }
            {
                selectedItems?.length > 0 &&
                <>
                    <div className='border-[1px] border-slate-500 flex flex-row justify-center items-center gap-[3rem] p-2 rounded-3xl mt-[3rem]'>
                        <button onClick={ () => removeQuantity ( allData ) }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path></svg>
                        </button>
                        <div className='text-white' >{ selectedItem?.quantity }</div>
                        <button onClick={ () => addQuantity ( allData ) }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                        </button>
                    </div>
                    <div className='text-center mt-[3rem] text-[1.5rem]'>
                    Total Price: { selectedItem?.totalPrice } FCFA
                    </div>
                </>
            }
        </div>
    )
}
    
export default ItemContentDisplay











// THIS FILTER IS NOT NECESSARY ANYMORE SINCE I AM GETTING DATA FROM URL PARAM
// const { state, dispatch } = useContext(EcommerceContext); 
// const getObject = state?.selectedItems.length > 0 ? state?.selectedItems.find((product: ProductType) => {
//     return product?.id === parseInt(id)
// }) : products.find((product: ProductType) => {
//     return product?.id === parseInt(id)
// })