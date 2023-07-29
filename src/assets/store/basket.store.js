import { create } from 'zustand'

const useBasketStore = create((set) => ({
    basketData : [],
    addToBasket: (product) => {
    set((state)=>{
       const products = state.basketData;
       const findIndex = products.findIndex((i)=> i.id == product.id)
       if(findIndex >- 1){
        products[findIndex].quantity += 1;
        return {basketData:products}
       }else{
        return {basketData:[...state.basketData,{...product, quantity:1}]}
       }
    })
    }
  }))
  
  export default useBasketStore