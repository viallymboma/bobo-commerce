"use client";

import { SelectedProductType, SelectedProductTypes } from "@/lib/products";
import { addProduct, overAllTotal, removeProduct } from "@/lib/utils";
// import { convertNumberToFrench } from "@/lib/utilities";
import React, { Dispatch, createContext, SetStateAction, useReducer } from "react";
// import { SetCookie } from "./cookies/cookies";



type InitialStateType = {
    cartIsOpened: boolean; 
    selectedItems: SelectedProductTypes
    isAddButtonEnabled?: boolean, 
    isRemoveButtonEnabled: boolean, 
    totalItemsPrices: number, 
}

type ActionType = {
  payload?: any;
  type?: any;
};


const initialState: InitialStateType = {
    cartIsOpened: false, 
    selectedItems: [], 
    isAddButtonEnabled: true, 
    isRemoveButtonEnabled: false, 
    totalItemsPrices: 0, 
};

const reducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {

    case 'TOGGLECARTDISPLAY':
      return {
        ...state,
        cartIsOpened: action.payload
      };

    case 'ADDITEMTOCART':
      let final_array = addProduct (action.payload, state.selectedItems)
      let total_of_all_items = overAllTotal (final_array)
      return {
        ...state,
        selectedItems: final_array, 
        totalItemsPrices: total_of_all_items, 
      };

    case 'REMOVEITEMTOCART':
      let final_array_ = removeProduct (action.payload, state.selectedItems)
      let total_of_all_items_ = overAllTotal (final_array_)
      return {
        ...state,
        selectedItems: final_array_, 
        totalItemsPrices: total_of_all_items_, 
      };
    
    default:
      return state;
  }
};

type DispatchType = {
  state: InitialStateType
  dispatch: any
}


export const EcommerceContext = createContext<DispatchType>({ 
    state: initialState, 
    dispatch: () => null
});


export const EcommerceContextProvider = ({
  children,
}: {
    children: any
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <EcommerceContext.Provider value={{ state, dispatch }}>
      {children}
    </EcommerceContext.Provider>
  );
};







