import { ProductType, SelectedProductType } from '@/lib/products';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import ImageDisplay from './components/ImageDisplay';
import ItemContentDisplay from './components/ItemContentDisplay';
import RelatedProducts from './components/RelatedProducts';

const ProductDetailsPage = ({ params, searchParams }: {
  params: {
    id: string | number
  },
  searchParams: ProductType | SelectedProductType
  // searchParams: any
}) => {

  // console.log("searchParams?.namesearchParams?.name", searchParams)
  searchParams = {
    ...searchParams, 
    id: parseInt(searchParams?.id.toString()),
    price: parseInt(searchParams?.price.toString()),
  }

  return (
    <div className='flex min-h-screen flex-col justify-center items-center gap-[3rem] p-24'>
      <div className='flex flex-row justify-around bg-black w-[90%] p-[10rem] rounded-lg'>
        <ImageDisplay id={ params?.id} />
        <ItemContentDisplay id={ params?.id } allData={ searchParams } />
      </div>
      <RelatedProducts />

    </div>
  )
}

export default ProductDetailsPage







// "use client"
// import { ProductType } from '@/lib/products';
// import { useSearchParams } from 'next/navigation';
// import React from 'react'

// const ProductDetailsPage = () => {
//   const searchParams = useSearchParams (); 
//   // const newParam = searchParams.get("new")
//   console.log("...................", searchParams?.get("id"))
//   // console.log("searchParams?.namesearchParams?.name", params?.name, params?.id, params?.price)
//   return (
//     <div className='flex min-h-screen flex-col items-center justify-start gap-[3rem] p-24'>

//       { searchParams?.get("id") } { searchParams?.get("name")}
//     </div>
//   )
// }

// export default ProductDetailsPage