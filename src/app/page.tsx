// import NavBarComponent from "@/common/components/NavBarComponent";
// import { products } from "@/products";
import Image from "next/image";

import imageLogo from "../../public/images/pastery/biscuits/cookie.png"
import { products } from "./products";
import { ProductType } from "@/lib/products";
import Link from "next/link";
import ProductComponent from "./common/modules/ProductComponent";

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-[3rem] p-24">
      {/* <NavBarComponent /> */}
      <header>
        <h1 className="text-center font-bold text-[55px]">Trouvez tout ici</h1>
        <p className="text-center font-bold text-[25px] text-gray-300">Satisfait ton appeti de patisserie delicieuse et savoureuse</p>
      </header>
      <section className="w-[70%] grid grid-cols-[20%,80%] relative gap-3">
        <div className="sticky">
          <header className="flex flex-col gap-3">
            <h1 className="font-bold text-[16px]">Filter Products</h1>
            <input type="text" name="searchAll" id="searchAllID" />
          </header>
        </div>
        <ProductComponent />

      </section>
    </main>
  );
}
