import { useContext } from "react";
import { PRODUCTS } from "../../data/productsData";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";

const Cart = () => {
    const {cartItems} = useContext(ShopContext)
    return (
        <>
            <h1> Your cart items</h1>
            <div className="row">

                {PRODUCTS.map((p)=>{
                    if(cartItems.some((i)=>i.id=== p.id && i.count > 0))
                    return <Product data={p}/>
                })}
            </div>
        </>
    )
    }
export default Cart;