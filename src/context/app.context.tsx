"use client";

import { SelectedProductType, SelectedProductTypes } from "@/lib/products";
// import { convertNumberToFrench } from "@/lib/utilities";
import React, { Dispatch, createContext, SetStateAction, useReducer } from "react";
// import { SetCookie } from "./cookies/cookies";



type InitialStateType = {
    cartIsOpened: boolean; 
    selectedItems: SelectedProductTypes
    isAddButtonEnabled?: boolean, 
    isRemoveButtonEnabled: boolean,
}

type ActionType = {
  payload?: any;
  type?: any;
};


const initialState: InitialStateType = {
    cartIsOpened: true, 
    selectedItems: [], 
    isAddButtonEnabled: true, 
    isRemoveButtonEnabled: false
};

const reducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {

    case 'TOGGLECARTDISPLAY':
      return {
        ...state,
        cartIsOpened: action.payload
      };

    case 'ADDITEMTOCART':
      let final_obj = action.payload; 
      let final_array = state.selectedItems; 
      // take id
      const id = action.payload.id; 
      final_array = [...final_array, final_obj]
      // check if id exist in the selected items already
      const existingProducts = final_array.map((item: SelectedProductType) => {
        if (item?.id === id) {
          console.log(item, item.quantity, ">>>>>>>>>")
          item = {
            ...item, 
            quantity: item?.quantity ? item?.quantity + 1 : 1, 
            totalPrice: item?.totalPrice ? item?.totalPrice + item?.price : item?.price, 
          }
          return item
        }
        return item
      })

      // // remove the duplicate
      final_array = existingProducts.filter((obj, index, self) =>
        index === self.findIndex((o) => o.id === obj.id && o.name === obj.name)
      );
      console.log("lllllll", final_array)
      return {
        ...state,
        selectedItems: final_array
      };

    case 'REMOVEITEMTOCART':
      let final_obj_ = action.payload; 
      let final_array_ = state.selectedItems; 
      // take id
      const id_ = action.payload.id; 
      final_array_ = [...final_array_, final_obj_]
      // check if id exist in the selected items already
      const existingProducts_ = final_array_.map((item: SelectedProductType) => {
        if (item?.id === id_) {
          console.log(item, item.quantity, ">>>>>>>>>")
          item = {
            ...item, 
            quantity: item?.quantity > 0 ? item?.quantity - 1 : 0, 
            totalPrice: item?.totalPrice > 0 ? item?.totalPrice - item?.price : 0, 
          }
          return item
        }
        return item
      })

      // // remove the duplicate
      final_array_ = existingProducts_.filter((obj, index, self) =>
        index === self.findIndex((o) => o.id === obj.id && o.name === obj.name)
      );

      final_array_ = final_array_.filter((item: SelectedProductType) => {
        return item?.quantity > 0
      })

      console.log("lllllll", final_array_)
      return {
        ...state,
        selectedItems: final_array_
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







