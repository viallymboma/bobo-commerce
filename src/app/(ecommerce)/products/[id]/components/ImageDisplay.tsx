"use client"
import { products } from '@/app/products';
import { EcommerceContext } from '@/context/app.context';
import { ProductType } from '@/lib/products';
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'

const ImageDisplay = ({ id }: any) => {

    const { state, dispatch } = useContext(EcommerceContext); 

    const getObject = products.find((product: ProductType) => {
        return product?.id === parseInt(id)
    })

  return (
    <section>
        <Image src={ getObject?.picture } width={ 400 } alt='itemImage' />
    </section>
  )
}

export default ImageDisplay










// "use client"
// import { products } from '@/app/products';
// import { EcommerceContext } from '@/context/app.context';
// import { ProductType } from '@/lib/products';
// import Image from 'next/image'
// import React, { useContext, useEffect, useState } from 'react'

// const ImageDisplay = ({ id }: any) => {

//     const { state, dispatch } = useContext(EcommerceContext); 
//     const [ items, setItems ] = useState<ProductType> ()

//     useEffect (() => {
//         const getObject = products.find((product: ProductType) => {
//             console.log(product?.id, id, "LLLLLLLLLL")
//             return product?.id === id
//         })
//         setItems (getObject)
//     }, [])

//     // const getObject = state.productscartIsOpened
//     console.log(products, "LLLLLLLLLL")

//     console.log(".....", items)

//   return (
//     <section>
//         <Image src={ items?.picture } width={ 100 } alt='itemImage' />
//       </section>
//   )
// }

// export default ImageDisplay