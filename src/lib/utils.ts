import { SelectedProductType } from "./products";



export function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
}


export const addProduct = (obj: any, selectedItems: any) => {
    let final_obj = obj; 
      // let final_array = state.selectedItems
      let final_array = selectedItems; 
      // let final_array = localStorage.getItem("selectedItems")
      // take id
      const id = obj.id; 
      final_array = [...final_array, final_obj]
      // check if id exist in the selected items already
      const existingProducts = final_array.map((item: SelectedProductType) => {
        if (item?.id === id) {
          console.log(item, item.quantity, ">>>>>>>>>")
          item = {
            ...item, 
            quantity: item?.quantity ? item?.quantity + 1 : 1, 
            totalPrice: (item?.totalPrice) ? (item?.totalPrice) + item?.price : item?.price, 
          }
          return item
        }
        return item
      })

      // // remove the duplicate
      return final_array = existingProducts.filter((obj: any, index: any, self: any) =>
        index === self.findIndex((o: any) => o.id === obj.id && o.name === obj.name)
      );
}

export const removeProduct = (obj: any, selectedItems: any) => {
    let final_obj_ = obj; 
    let final_array_ = selectedItems; 
    // take id
    const id_ = obj.id; 
    final_array_ = [...final_array_, final_obj_]
    // check if id exist in the selected items already
    const existingProducts_ = final_array_.map((item: SelectedProductType) => {
        if (item?.id === id_) {
            console.log(item, item.quantity, ">>>>>>>>>")
            item = {
                ...item, 
                quantity: item?.quantity > 0 ? item?.quantity - 1 : 0, 
                totalPrice: (item?.totalPrice) > 0 ? (item?.totalPrice) - item?.price : 0, 
            }
          return item
        }
        return item
    })

    // remove the duplicate
    final_array_ = existingProducts_.filter((obj: any, index: any, self: any) =>
        index === self.findIndex((o: any) => o.id === obj.id && o.name === obj.name)
    );

    return final_array_ = final_array_.filter((item: SelectedProductType) => {
        return item?.quantity > 0
    })
}

export const overAllTotal = (arr: []) => {
    return arr.reduce(
        (accumulator: any, currentValue: any) => accumulator + currentValue.totalPrice, 0,
    );
}