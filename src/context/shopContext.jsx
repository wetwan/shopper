/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import all_product from "../assets/all_product";



export const ShopContext = createContext(null)
 const DefaultCard = () =>{
    let cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
        return cart
 }

const ShopContextProvider =({children}) =>{
    const [cartItems, setCartItems] = useState(DefaultCard())

    const addToCart = (itemId ,e) => {
        e.preventDefault()
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };
    
    const getTotalcat = () => {
        let totalAmount = 0;
      
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            const itemInfo = all_product.find((product) => product.id === Number(item));
            if (itemInfo) {
              totalAmount += itemInfo.new_price * cartItems[item];
            }
          }
        }
      
        return totalAmount;
      };

    const  getToatlcartItems = () =>{
        let totalItem = 0
         for(const item in cartItems){
            if( cartItems[item] > 0){
                totalItem+= cartItems[item]
            }
         }
         return totalItem
      }
  
    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]: prev[itemId]-1}))
    }
   const contextValue = { getToatlcartItems , all_product, cartItems, addToCart,removeFromCart,getTotalcat}
   

    return(
        <ShopContext.Provider value={contextValue}>
            
            {children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider
