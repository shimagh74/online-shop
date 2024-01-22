import { useContext } from "react";
import { PRODUCTS } from "../../data/productsData";
import { ShopContext } from "../../context/shopContext";
import CartProduct from "./CartProduct";

const Cart = () => {
    const { cartItems } = useContext(ShopContext)
    return (
        <>

            <div className="flex flex-col items-center">
                <div class="flex flex-row  gap-1 p-10 w-3/4 ">
                    <div className="basis-4/5 border gap-3 flex flex-wrap items-center h-[19rem]">
                        <div className="border-b w-11/12 shadow-sm"><h1 className="text-2xl p-5 ">Shopping Cart</h1></div>

                        {PRODUCTS.map((p) => {
                            if (cartItems?.some((i) => i.id === p.id && i.count > 0))
                                return <CartProduct data={p} />
                        })}
                    </div>
                    <div className="basis-1/4 bg-slate-200"> صورت حساب</div>

                </div>
            </div>
        </>
    )
}
export default Cart;