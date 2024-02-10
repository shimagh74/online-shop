import { useContext } from "react";
import { ShopContext } from "../../context/shopContext.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./product.scss"

const Product = (props) => {
    const { id, productName, productImage, price, special_sale } = props.data;
    const { addToCart } = useContext(ShopContext)

    return (
        <div className="bg-white relative p-2 h-[25rem] w-64 shadow-sm overflow-hidden rounded hover:shadow-2xl border-stone-200 border transition flex-col flex justify-center items-center ">
            <img src={productImage} className="w-64  h-[19rem] object-cover object-center overflow-hidden " />
            {special_sale ? <div className="absolute top-0 left-0 m-2 flex justify-center items-center  w-6 h-6 bg-yellow-500 rounded-full">
            <FontAwesomeIcon icon={faStar} color="white"/>
            </div> : null}
            <div className="p-4 grid justify-items-center h-2/5 px-6 pb-3">
                <h3 class="font-medium  text-slate-800 ">{productName} </h3>
                <p className="text-base  text-gray-900 dark:text-white">{price}$</p>
                {/* <button className="bg-zinc-700 rounded-2xl p-1" onClick={() => addToCart(id)}>+</button>
                <span >{cartItems?.filter((row) => row.id === id)[0]?.count}</span>
                {isInCart && <button className="btn btn-info btn-sm" onClick={() => removeFromCart(id)}>-</button>} */}
                
                <div>
                    <button className="bg-gradient-to-r from-red-600 to-pink-600 text-gray-50 hover:from-pink-500 hover:to-pink-700 rounded-full py-2 px-4"
                     onClick={() => addToCart(props.data)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Product