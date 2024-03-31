"use client"; 
import Image from 'next/image'
import React, { useContext } from 'react'
import imageLogo from "../../../public/images/pastery/biscuits/cookie.png"
import Link from 'next/link'
import { EcommerceContext } from '@/context/app.context';

const NavBarComponent = () => {

  const { state, dispatch } = useContext(EcommerceContext);

  console.log(state.cartIsOpened, "===============")

  const openCartDisplay = () => {
    dispatch({ type: "TOGGLECARTDISPLAY", payload: !state.cartIsOpened })
    console.log("i was clicked!!!!!!!!!!!!!!! from nav", state.cartIsOpened)
  }

  return (
    <header className='backdrop-blur-lg border-gray-500 border-y-[1px] w-full p-5 fixed z-10'>
        <nav className='flex flex-row justify-between'>
            <div className='text-[20px] font-bold flex flex-row items-center justify-center gap-3'>
              <div className='rounded-lg text-black bg-black p-2 border-gray-500 border-[1px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" className="fill-black dark:fill-white h-[16px] w-[16px]"><path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path><path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path></svg>
              </div>
              <h1>BoBo Shop</h1>
            </div>
            <div className=''>
              <ul className=' flex flex-row items-center justify-center gap-3 text-gray-300'>
                <li>
                  <Link className='text-gray-300 hover:underline' href={"/"} >Home</Link>
                </li>
                <li>
                  <Link className='text-gray-300 hover:underline' href={"/"} >Products</Link>
                </li>
                <li>
                  <Link className='text-gray-300 hover:underline' href={"/"} >About</Link>
                </li>
              </ul>
            </div>
            <div onClick={ openCartDisplay }>
              <button className='rounded-lg text-black bg-black p-2 border-gray-500 border-[1px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 transition-all ease-in-out hover:scale-110 "><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
              </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBarComponent