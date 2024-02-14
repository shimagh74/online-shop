import React from "react";
import { createContext, useEffect, useState } from "react";


type CartItemsType = {
    id: number;
    price: number;
    productImage: string;
    productName: string;
    special_sale: Boolean;
    count?: number | undefined;
}
type ShopContextProviderType = {
    children: React.ReactNode
}
interface IShopContext {
    cartItems: CartItemsType[];
    addToCart: (item: CartItemsType) => void;
    removeFromCart: (id: number) => void;
}

export const ShopContext = createContext<IShopContext>({
    cartItems: [],
    addToCart: (item) => {},
    removeFromCart: (id) => {}
});

export const ShopContextProvider = ({ children }: ShopContextProviderType) => {
    const values = localStorage.getItem("CARTITEMS")
    const items = values ? JSON.parse(values) : []
    const [cartItems, setCartItems] = useState<CartItemsType[]>(items)


    useEffect(() => {
        localStorage.setItem("CARTITEMS", JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (item: CartItemsType) => {

        if (!cartItems?.find((x) => x.id === item.id))
            setCartItems([...cartItems, { ...item, count: 1 }])
        else
            setCartItems(cartItems.map((x) => {
                if (x.id === item.id)
                    return { ...item, count: x.count ? x.count + 1 : 1 }
                else return x
            }))
        console.log("item", item)
    }
    // const removeFromCart = (id : number) :void  => {
    //     setCartItems(cartItems?.map((i) => {
    //         const count = i?.count - 1;
    //         if (i.id === id)
    //             return count ? { ...i, count } : null
    //         else return i
    //     })?.filter(o => !!o))
    // }
    const removeFromCart = (id: number): void => {
        setCartItems((prevItems) =>
            prevItems?.map((item) =>
                item.id === id && item.count !== undefined
                    ? { ...item, count: item.count - 1 }
                    : item
            )?.filter((item) => item && item.count && item.count > 0)
        );
    };

    const contextValue: IShopContext  = { cartItems, addToCart, removeFromCart }
    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}