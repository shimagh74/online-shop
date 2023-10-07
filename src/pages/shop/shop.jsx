import {PRODUCTS} from "../../data/productsData"
import  Product  from "./product";
const Shop = ()=>{
return (
    <>
    <h1> shop</h1>
    <div className="row">
        {PRODUCTS.map((productData)=>{
           return <Product key={productData.id} data={productData}/>

        })}

    </div>
    </>
)
}
export default Shop;