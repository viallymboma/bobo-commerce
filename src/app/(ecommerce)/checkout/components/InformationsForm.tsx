"use client"; 

import React from 'react'

const InformationsForm = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center items-center gap-[3rem] p-24'>
        <header className='flex flex-row items-center'>
            <div className='rounded-lg text-black bg-black p-2 border-gray-500 border-[1px] h-10'>
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" className="fill-black dark:fill-white h-[16px] w-[16px]"><path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path><path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path></svg>
            </div>
            <h1 className="text-center font-bold text-[55px]">Checkout Page Coming Soon</h1>
        </header>
    </div>
  )
}

export default InformationsForm