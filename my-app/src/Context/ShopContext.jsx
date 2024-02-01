import React, {createContext, useState} from "react";
import all_product from "../Componenets/Assests/all_product"


export const ShopContext = createContext(null);

const getDefaultCart =()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]= 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    //add to cart function
    const addToCart=(itemId)=>{
        // first we will send the previous value
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1 }))
        console.log(cartItems);

    }
    //remove from cart
    const removeFromCart=(itemId)=>{
        // first we will send the previous value
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1 }))

    }

    //
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems )
        {
            if(cartItems[item]>0)

            // after running below function we will get the total amount
            {
                let itemInfo = all_product.find((product)=>product.id=== Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        //here in for loop we will pass individual items
        for( const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    //using this we can access cart item data in any component , using this we will send function and data 
    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider