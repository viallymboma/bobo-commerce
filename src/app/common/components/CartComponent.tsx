import { EcommerceContext } from '@/context/app.context';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'

import imgLogo from "../../../../public/images/pastery/biscuits/cookie.png"
import { SelectedProductType } from '@/lib/products';
import { truncateText } from '@/lib/utils';

import cartIcon from "../../../../public/images/pastery/biscuits/cart.png"
import { useRouter } from 'next/navigation';

const CartComponent = () => {

    const { state, dispatch } = useContext(EcommerceContext);

    const closeCartDisplay = () => {
        dispatch({ type: "TOGGLECARTDISPLAY", payload: !state.cartIsOpened })
    }

    const removeQuantity = (obj: any) => {
        dispatch({ type: "REMOVEITEMTOCART", payload: obj })
    }

    const addQuantity = (obj: any) => {
        dispatch({ type: "ADDITEMTOCART", payload: obj })
    }

    console.log("Selected Element Array", state.selectedItems)

    const router = useRouter ()

    const proceedeToCheckout = () => {
        router.push("/checkout")
        // console.log(); 
    }

    const [ selectedCookies, setSelectedCookie ] = useState ([])

    useEffect (() => {
        setSelectedCookie (JSON.parse(window.localStorage.getItem("selectedItems")!))
    }, [state.selectedItems])

    return (
        <div className=' flex justify-end h-screen w-full z-20 fixed top-0 right-0 text-black'>
            <div onClick={ closeCartDisplay } className='z-10 backdrop-blur-lg flex justify-end h-screen w-full'>

            </div>
            <div className='bg-black flex flex-col justify-between border-l-[1px] border-slate-600 h-screen w-[400px] z-20 pb-[2rem]'>
                <header className='flex justify-between p-4'>
                    <div><h1 className='text-slate-300 font-bold text-[1.5rem]'>My Cart</h1></div>
                    <div onClick={ closeCartDisplay }>
                        <button className='rounded-lg text-white bg-black p-2 px-4 border-gray-500 border-[1px]'>
                            x
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 transition-all ease-in-out hover:scale-110 "><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> */}
                        </button>
                    </div>
                </header>

                {
                        state?.totalItemsPrices === 0 &&
                        <section className='flex flex-col justify-center gap-4 items-center mt-[5rem]'>
                            <Image src={ cartIcon } width={ 50 } alt='cartIcon' />
                            <h1 className='text-white text-[30px] font-bold'>Your Cart Is Empty</h1>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-16"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> */}
                        </section>
                }

                <section className='overflow-y-scroll no-scrollbar h-[600px] flex flex-col gap-[10px] bg-slate-1000 py-[1rem]'>
                    {
                        state.selectedItems && state?.selectedItems.map ((selectedItem: SelectedProductType) => {
                            // selectedCookies && selectedCookies.map ((selectedItem: SelectedProductType) => {
                            return (
                                <div key={ selectedItem?.id } className='flex flex-row justify-between gap-[10px] border-b-[1px] border-slate-700 pb-3 mx-[1rem]'>
                                    <div className='border-[1px] rounded-lg border-slate-500 flex justify-center items-center px-[1rem]'>
                                        <Image src={ selectedItem?.picture } width={ 40 } alt='img' />
                                    </div>
                                    <div className='w-full'>
                                        <h1 className='text-white text-left'>{ truncateText(selectedItem?.name, 15) }</h1>
                                    </div>
                                    <div>
                                        <div className='text-white'>{ selectedItem?.totalPrice } $</div>
                                        <div className='border-[1px] border-slate-500 flex flex-row justify-center items-center gap-3 p-2 rounded-3xl'>
                                            <button onClick={ () => removeQuantity (selectedItem) }>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path></svg>
                                            </button>
                                            <div className='text-white' >{ selectedItem?.quantity }</div>
                                            <button onClick={ () => addQuantity (selectedItem) }>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </section>

                <section className='flex flex-col justify-normal gap-[3rem]'>
                    {
                        state?.totalItemsPrices > 0 &&
                        <>
                            <div className='flex flex-col justify-normal gap-[1rem]' >
                                <div className='text-white pb-[2px] flex flex-row justify-between border-slate-500 border-b-[1px] mx-4'>
                                    <h2>Taxes</h2>
                                    <h2>0 FCFA</h2>
                                </div>
                                <div className='text-white pb-[2px] flex flex-row justify-between border-slate-500 border-b-[1px] mx-4'>
                                    <h2>Shipping</h2>
                                    <h2 className='text-slate-700'>Calculated at checkout</h2>
                                </div>
                                <div className='text-white pb-[2px] flex flex-row justify-between border-slate-500 border-b-[1px] mx-4'>
                                    <h2>Total</h2>
                                    <h2>{ state?.totalItemsPrices } FCFA</h2>
                                </div>
                            </div>
                            <div className='mx-[1rem]'>
                                <button onClick={ () => proceedeToCheckout () } className='w-full border-[1px] border-slate-500 flex flex-row justify-center items-center px-[1rem] py-[.5rem] rounded-lg bg-blue-800 text-white'>
                                    <h1 className='text-white'>Proceed to Checkout</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                                </button>
                            </div>
                        </>
                    }
                </section >

            </div>
        </div>
    )
}

export default CartComponent