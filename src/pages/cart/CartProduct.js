import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import "./CartProduct.scss"

const CartProduct = (props) => {
    const { id, productName, productImage, price, special_sale } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)

    const isInCart = cartItems?.some((item) => item.id === id)
    return (
        <div className="flex-row flex bg-white relative h-[14rem] w-11/12 shadow-sm overflow-hidden  border-stone-200 border-b transition duration-7000">
            <div className="basis-1/4 p-2 w-full h-full object-cover object-center overflow-hidden">
                <img src={productImage} className="w-full h-full max-w-52 object-cover object-center overflow-hidden" /></div>
            <div className="basis-3/4">
            {special_sale ? <div className="absolute top-0 left-0 m-2 flex justify-center items-center w-6 h-6 bg-yellow-500 rounded-full">
            <FontAwesomeIcon icon={faStar} color="white"/>
            </div> : null}
            <div className="p-4 grid items-center h-full px-6 pb-5">
                <p class="text-base text-gray-800 font-medium">{productName} </p>
                <p className="text-base  text-gray-900 dark:text-white">{price}$</p>
                {/* <button className="bg-zinc-700 rounded-2xl p-1" onClick={() => addToCart(id)}>+</button>
                
                {isInCart && <button className="btn btn-blue" onClick={() => removeFromCart(id)}>-</button>} */}
                <div className="flex gap-4 border items-center p-3 h-9 rounded-md shadow-sm">
                    <div className="cursor-pointer " onClick={() => addToCart(id)}><IoIosAdd color=""/></div>
                    <span className="text-slate-600">{cartItems?.filter((row) => row.id === id)[0]?.count}</span>
                    <div className="cursor-pointer" onClick={() => removeFromCart(id)}><IoIosRemove /></div>
                </div>
                {/* <div>
                    <button className="btn btn-blue" onClick={() => removeFromCart(id)}>Delete from cart</button>
                </div> */}
            </div>
            </div>
            
           
        </div>
    )
}
export default CartProduct