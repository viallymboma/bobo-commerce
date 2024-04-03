import { ProductTypes, SelectedProductType, SelectedProductTypes } from "@/lib/products"
import imageCookie from "../../public/images/pastery/biscuits/cookie.png"
import Coockies_Coco from "../../public/images/pastery/biscuits/Coockies_Coco.jpg"
import COCO_CHOCOLAT_NOIR from "../../public/images/pastery/biscuits/COCO_CHOCOLAT_NOIR.jpg"

import COOCKIES_CHOCOLAT_BLANC from "../../public/images/pastery/biscuits/COOCKIES_CHOCOLAT_BLANC.jpg"
import COOCKIES_CHOCOLAT_NOIR from "../../public/images/pastery/biscuits/COOCKIES_CHOCOLAT_NOIR.jpg"
import Madeleine_Pépites_de_Chocolat from "../../public/images/pastery/biscuits/Madeleine_Pépites_de_Chocolat.webp"
import Madeleine_Coco_2 from "../../public/images/pastery/biscuits/Madeleine_Coco_2.jpg"
import Madeleines_Miel_Citron from "../../public/images/pastery/biscuits/Madeleines_Miel_Citron.jpg"
import Madeleine_Coco from "../../public/images/pastery/biscuits/Madeleine_Coco.jpg"
import Sablés_Citron from "../../public/images/pastery/biscuits/Sablés_Citron.jpg"
import Sablés_Coco from "../../public/images/pastery/biscuits/Sablés_Coco.jpg"
import Sablés from "../../public/images/pastery/biscuits/Sablés.jpg"
import PEPITES_DE_CHOCOLAT_BLANC from "../../public/images/pastery/biscuits/PEPITES_DE_CHOCOLAT_BLANC.jpg"
import PEPITES_DE_CHOCOLAT_NOIR from "../../public/images/pastery/biscuits/PEPITES_DE_CHOCOLAT_NOIR.jpg"

import Muffins_choco from "../../public/images/pastery/biscuits/Muffins_choco.jpg"
import Daffy from "../../public/images/pastery/biscuits/Daffy.jpg"
// import biscuitIcon from "../../"


export const products: ProductTypes = [
    {
        id:1,
        name:"Coockies Coco",
        description:"Fait à base de produits 100% natuels:chocolat noir, noix de coco et de la farine de patate.",
        category:"patisserie",
        price:500,
        picture: Coockies_Coco,
        type:"Coockies",
    },
    {
        id:2,
        name:"COCO CHOCOLAT NOIR",
        description:"Riche en vitamines B,C,D,E. Et est fait à base de: Chocolat noir et de noix de coco",
        category:"Patisserie",
        price:900,
        picture: COCO_CHOCOLAT_NOIR,
        type:"Coockies",
    },
    {
        id:3,
        name:"COOCKIES CHOCOLAT BLANC",
        description:"Riche en vitamines B,C,D,E. et est fait à base de chocolat blanc et de farine naturelle.",
        category:"Patisserie",
        price:1900,
        picture: COOCKIES_CHOCOLAT_BLANC,
        type:"Coockies",
    },
    {
        id:4,
        name:"COOCKIES CHOCOLAT NOIR",
        description:"Riche en vitamines B,C,D,E : 0% conservateurs 0% additifs 0% colorants",
        category:"patisserie",
        price:1900,
        picture: COOCKIES_CHOCOLAT_NOIR,
        type:"Coockies",
    },
    {
        id:5,
        name:"Madeleine Pépites de Chocolat",
        description:"0% conservateurs 0% additifs 0% colorants, est fait à base de produits naturels.",
        category:"Patisserie",
        price:500,
        picture: Madeleine_Pépites_de_Chocolat,
        type:"Madeleine",
    },
    {
        id:6,
        name:"Madeleine Coco",
        description:"Fait à base de farine de blé et de noix de coco.",
        category:"Patisserie",
        price:400,
        picture: Madeleine_Coco_2,
        type:"Madeleine",
    },
    {
        id:7,
        name:"Madeleines Miel Citron",
        description:"fait à base de prosuits 100% natules notament du Miel et de la citronnelle et dont la majorité proviennent du Cameroun.",
        category:"Patisserie",
        price:400,
        picture: Madeleines_Miel_Citron,
        type:"Madeleine",
    },
    {
        id:8,
        name:"Madeleine Coco",
        description:"Fait à base farine de blé et de noix de coco.",
        category:"Patisserie",
        price:500,
        picture: Madeleine_Coco,
        type:"Madeleine",
    },
    {
        id:9,
        name:"Sablés Citron",
        description:"Fait à base de beurre naturel et de farine de patate douce et de jus de citron.",
        category:"Patisserie",
        price:1500,
        picture: Sablés_Citron,
        type:"Sablé",
    },
    {
        id:10,
        name:"Sablés Coco",
        description:"Fait à base de beurre naturel et de farine de patate douce, de noix de coco et de jus de citron.",
        category:"Patisserie",
        price:1500,
        picture: Sablés_Coco,
        type:"Sablé",
    },
    {
        id:11,
        name:"Sablés",
        description:"Fait à base de beurre naturel doux et de farine de patate douce.",
        category:"Patisserie",
        price:500,
        picture: Sablés,
        type:"Sablé",
    },
    {
        id:12,
        name:"PEPITES DE CHOCOLAT BLANC",
        description:"produit fabriqué constitué de petits critaux de chocolat blanc made in Cameroun.",
        category:"Sucreries",
        price:1950,
        picture: PEPITES_DE_CHOCOLAT_BLANC,
        type:"Pépites de chocolat",
    },
    {
        id:13,
        name:"PEPITES DE CHOCOLAT NOIR",
        description:"produit fabriqué constitué de petits critaux de chocolat noir made in Cameroun.",
        category:"Sucreries",
        price:1800,
        picture: PEPITES_DE_CHOCOLAT_NOIR,
        type:"Pépites de chocolat",
    },
    {
        id:14,
        name:"Muffins choco",
        description:"Gateau miniaturisé au chocolat noir avec des pépites de chocolat blanc et noir.",
        category:"Patisserie",
        price:500,
        picture: Muffins_choco,
        type:"Cup cake",
    },
    {
        id:15,
        name:"Daffy",
        description:"Biscuit fouré au chocolat noir.",
        category:"Patisserie",
        price:1000,
        picture: Daffy,
        type:"Biscuit",
    },
]

export const selectedProducts: SelectedProductTypes = [
    {
        id:1,
        name:"Coockies Coco",
        description:"Fait à base de produits 100% natuels:chocolat noir, noix de coco et de la farine de patate.",
        category:"patisserie",
        price:500,
        quantity: 2, 
        totalPrice: 1000,
        picture: imageCookie,
        type:"Coockies",
        count: 0, 
    },
    {
        id:2,
        name:"COCO CHOCOLAT NOIR",
        description:"Riche en vitamines B,C,D,E. Et est fait à base de: Chocolat noir et de noix de coco",
        category:"Patisserie",
        price:900,
        quantity: 2, 
        totalPrice: 1800,
        picture: imageCookie,
        type:"Coockies",
        count: 0, 
    },
    {
        id:3,
        name:"COOCKIES CHOCOLAT BLANC",
        description:"Riche en vitamines B,C,D,E. et est fait à base de chocolat blanc et de farine naturelle.",
        category:"Patisserie",
        price:1900,
        quantity: 2, 
        totalPrice: 3800,
        picture: imageCookie,
        type:"Coockies",
        count: 0, 
    },
]