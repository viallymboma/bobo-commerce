import { EcommerceContext } from '@/context/app.context';
import { ProductType, SelectedProductType } from '@/lib/products';
import React, { useContext } from 'react'

const useAddData = (obj: ProductType | SelectedProductType) => {
    const { state, dispatch } = useContext(EcommerceContext); 

    const addQuantity: any = () => {
        dispatch({ type: "ADDITEMTOCART", payload: obj })
    }
  return {
    state, 
    dispatch, 
    addQuantity, 
  }
}

export default useAddData