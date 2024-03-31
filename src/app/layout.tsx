import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarComponent from "./common/components/NavBarComponent";
import CartComponent from "./common/components/CartComponent";
import LayoutComponent from "./LayoutComponent";
import { EcommerceContextProvider } from "@/context/app.context";
// import NavBarComponent from "@/common/components/NavBarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoBo Shop",
  description: "A place to buy all you cookies and chocolate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBarComponent />
        {children}
        <CartComponent /> */}
        <EcommerceContextProvider>
          <LayoutComponent children={ children } />
        </EcommerceContextProvider>
      </body>
    </html>
  );
}
