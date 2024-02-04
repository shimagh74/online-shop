import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const values = localStorage.getItem("CARTITEMS")
    const items = values ? JSON.parse(values) : []
    const [cartItems, setCartItems] = useState(items)


    useEffect(() => {

        localStorage.setItem("CARTITEMS", JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (item) => {

        if (!cartItems?.find((x) => x.id === item.id))
            setCartItems([...cartItems, { ...item, count: 1 }])
        else
            setCartItems(cartItems.map((x) => {
                if (x.id === item.id)
                    return { ...item, count: x.count + 1 }
                else return x
            }))
        console.log(cartItems)
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.map((i) => {
            debugger
            const count = i?.count - 1;
            if (i.id === id )
                return count ? {...i,count} : null        
            else return i
        })?.filter(o => !!o))
    }
    const contextValue = { cartItems, addToCart, removeFromCart }
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}