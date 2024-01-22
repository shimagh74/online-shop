import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const values = localStorage.getItem("CARTITEMS")
    const items = values ? JSON.parse(values) : []
    const [cartItems, setCartItems] = useState(items)

    // useEffect(()=>{
    //     const data = localStorage.getItem("CARTITEMS")
    //     setCartItems(!!JSON.parse(data) ? JSON.parse(data) : [])
    // },[]) 

    useEffect(()=>{
        
        localStorage.setItem("CARTITEMS" , JSON.stringify(cartItems))
    },[cartItems])

    const addToCart = (itemId) => {
        if (!cartItems?.find((item) => item.id === itemId))
            setCartItems([...cartItems, { id: itemId, count: 1 }])
        else
            setCartItems(cartItems.map((item) => {
                if (item.id === itemId)
                    return { ...item   , count: item.count + 1 }
                else return item
            }))
        console.log(cartItems)
    }
    const removeFromCart =  (itemId) => {
        setCartItems(cartItems.map((i) => {
            if (i.id === itemId)
                return { ...i, count: i.count === 0 ? 0 : i.count - 1 }
            else return i
        }))

    }
    const contextValue = { cartItems, addToCart, removeFromCart }
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}