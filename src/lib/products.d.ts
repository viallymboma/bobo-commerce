

export type ProductType = {
    id: number,
    name: string,
    description: string,
    category: string,
    price: number,
    quantity?: number, 
    picture: any,
    type: string,
}

export type ProductTypes = ProductType []

export type SelectedProductType = {
    id: number,
    name: string,
    description: string,
    category: string,
    quantity: number, 
    price: number,
    totalPrice: number, 
    picture: any,
    type: string,
    count: number
}

export type SelectedProductTypes = SelectedProductType []
