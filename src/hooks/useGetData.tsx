import { EcommerceContext } from '@/context/app.context';
import React, { useContext } from 'react'

const useGetData = () => {
    const { state, dispatch } = useContext(EcommerceContext); 
  return {
    cartIsOpened: state?.cartIsOpened, 
    selectedItems: state?.selectedItems, 
    isAddButtonEnabled: state?.isAddButtonEnabled, 
    isRemoveButtonEnabled: state?.isRemoveButtonEnabled, 
    totalItemsPrices: state?.totalItemsPrices, 
    dispatch, 
  }
}

export default useGetData