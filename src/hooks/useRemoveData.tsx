import { EcommerceContext } from '@/context/app.context';
import { ProductType, SelectedProductType } from '@/lib/products';
import React, { useContext } from 'react'

const useRemoveData = (obj: ProductType | SelectedProductType) => {
    const { state, dispatch } = useContext(EcommerceContext); 

    const removeQuantity = () => {
      dispatch({ type: "REMOVEITEMTOCART", payload: obj })
    }
  return {
    state, 
    dispatch, 
    removeQuantity, 
  }
}

export default useRemoveData