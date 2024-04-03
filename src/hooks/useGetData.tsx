import { EcommerceContext } from '@/context/app.context';
import React, { useContext } from 'react'

const useGetData = (id: any) => {
    const { state, dispatch } = useContext(EcommerceContext); 
    const selectedItem = state.selectedItems.find((sel: any) => {
      return sel.id === id
    })
  return {
    cartIsOpened: state?.cartIsOpened, 
    selectedItems: state?.selectedItems, 
    isAddButtonEnabled: state?.isAddButtonEnabled, 
    isRemoveButtonEnabled: state?.isRemoveButtonEnabled, 
    totalItemsPrices: state?.totalItemsPrices, 
    selectedItem,
    dispatch, 
  }
}

export default useGetData