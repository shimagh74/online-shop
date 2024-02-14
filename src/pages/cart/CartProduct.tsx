import React from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import "./CartProduct.scss"

const CartProduct = (props) => {
    const { id, productName, productImage, price, special_sale, count = 0 } = props.data;

    //محصول تو سبد خرید
    // const isInCart = cartItems?.some((item) => item.id === id)
    return (
        <div className="flex items-center justify-around gap-6 p-4 border border-gray-200 rounded  overflow-hidden object-contain">
            <div className="w-28 flex-shrink-0">
                <img src={productImage} className="w-full" />
            </div>
            <div className="w-1/3">
                <h2 className="text-gray-800 md:text-xl text-base font-medium uppercase">{productName}</h2>
                <p className="text-gray-500 text-sm">Availability : <span className="text-green-600">In Stock</span></p>
            </div>

            <p className="text-gray-500 text-sm ">Price : <span className="text-red-600 text-lg font-semibold">${price}</span></p>
            <div className="flex gap-4 border items-center p-3 h-9 rounded-md shadow-sm">
                <div className="cursor-pointer " onClick={() => {
                    props.add(props.data)
                    console.log("props.data", props.data)
                }}>
                    <IoIosAdd color="" />
                </div>
                <span className="text-slate-600">{count}</span>
                <div className="cursor-pointer" onClick={() => props.remove(id)}>
                    <IoIosRemove />
                </div>
            </div>
        </div>
    )
}
export default CartProduct