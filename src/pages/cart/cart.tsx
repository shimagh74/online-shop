import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext.tsx";
import CartProduct from "./CartProduct.tsx";

// سبد خرید
const Cart = () => {
    const { addToCart, removeFromCart ,cartItems } = useContext(ShopContext)
    
    // const totalAmount = () => {
    //     // const items = PRODUCTS.map(o => ({...o,count: cartItems.find(x => x.id === o.id)?.count ?? 0}))
    //     return cartItems.reduce((acc, current) => {
    //         return acc + (current.count * current.price)
    //     }, 0)
    // }
    const totalAmount = () => {
        return cartItems.reduce((acc, current) => {
          return acc + (current.count ?? 0) * current.price;
        }, 0);
      };

    return (
        <div className="flex lg:flex-row flex-col w-full  justify-center m-auto mb-5 gap-4">
            <div className="basis-4/5 border gap-3 flex flex-wrap w-full justify-center  ">
                <div className="border-b w-11/12 ">
                    <h1 className="text-2xl p-5 ">Shopping Cart</h1>
                </div>
                <div className=" w-11/12  items-center  justify-center min-h-[15rem]">
                    {cartItems.map((p, i) => {
                        return <div className="mb-2"><CartProduct key={i} data={p} add={addToCart} remove={removeFromCart} /></div>
                    })}
                </div>

            </div>
            <div className="basis-1/4 border gap-3 w-full flex flex-col items-center ">
                <div className="border-b w-11/12" ><h2 className="text-2xl p-5 ">Your cart</h2></div>
                <div className=" w-11/12  items-center  justify-center min-h-[15rem]"><p className="text-3xl font-bold text-red-600"> Total : $ {totalAmount()}</p></div>
            </div>

        </div>
    )
}
export default Cart;