"use client"
import React, { useContext } from 'react'
import NavBarComponent from './common/components/NavBarComponent';
import CartComponent from './common/components/CartComponent';
import { EcommerceContext, EcommerceContextProvider } from '@/context/app.context';

const LayoutComponent = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const { state, dispatch } = useContext(EcommerceContext);
  return (
    <>
        <NavBarComponent />
        {children}
        {
          state.cartIsOpened && <CartComponent />
        }
    </>
  )
}

export default LayoutComponent