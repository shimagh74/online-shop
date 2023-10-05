import {PRODUCTS} from "../../data/productsData"
import Product from "../shop/product"
const Shop = ()=>{
return (
    <>
    <h1> shop</h1>
    <div className="row">
        {PRODUCTS.map((productData)=>{
            <Product data={productData}/>

        })}

    </div>
    </>
)
}
export default Shop;