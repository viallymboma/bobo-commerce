import { EcommerceContext } from '@/context/app.context';
import Image from 'next/image';
import React, { useContext } from 'react'

import imgLogo from "../../../../public/images/pastery/biscuits/cookie.png"
import { SelectedProductType } from '@/lib/products';

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

    return (
        <div className=' flex justify-end h-screen w-full z-20 fixed top-0 right-0 text-black'>
            <div onClick={ closeCartDisplay } className='z-10 backdrop-blur-lg flex justify-end h-screen w-full'>

            </div>
            <div className='bg-black border-l-[1px] border-slate-600 h-screen w-[400px] z-20'>
                <header className='flex justify-between p-4'>
                    <div><h1 className='text-slate-300 font-bold text-[1.5rem]'>My Cart</h1></div>
                    <div onClick={ closeCartDisplay }>
                        <button className='rounded-lg text-white bg-black p-2 px-4 border-gray-500 border-[1px]'>
                            x
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 transition-all ease-in-out hover:scale-110 "><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> */}
                        </button>
                    </div>
                </header>
                <section className='overflow-y-scroll no-scrollbar h-[400px] flex flex-col gap-[10px]'>
                    {
                        state.selectedItems && state?.selectedItems.map ((selectedItem: SelectedProductType) => {
                            return (
                                <div key={ selectedItem?.id } className='flex flex-row justify-between gap-[10px] border-b-[1px] border-slate-700 pb-3 mx-[1rem]'>
                                    <div className='border-[1px] rounded-lg border-slate-500 flex justify-center items-center px-[.5rem]'>
                                        <Image src={ imgLogo } width={ 40 } alt='img' />
                                    </div>
                                    <div className=''>
                                        <h1 className='text-white'>{ selectedItem?.name }</h1>
                                    </div>
                                    <div>
                                        <div className='text-white'>{ selectedItem?.totalPrice } $</div>
                                        <div className='border-[1px] border-slate-500 flex flex-row justify-center items-center gap-3 p-2 rounded-3xl'>
                                            <button onClick={ () => removeQuantity (selectedItem) }>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path></svg>
                                            </button>
                                            <div className='text-white' >{ selectedItem?.quantity }</div>
                                            <button onClick={ () => addQuantity (selectedItem) }>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 dark:text-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </section>
            </div>
        </div>
    )
}

export default CartComponent