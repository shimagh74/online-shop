import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ShopContext } from '../context/shopContext.tsx';
import onlineShopping from '../assets/img/online-shopping.jpg'
const Nav = () => {
  const { cartItems } = useContext(ShopContext)
  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count
  }, 0)
  return (
    <div className='relative'>
      <div className="md:flex md:flex-row md:justify-between items-center text-center py-4 md:px-12 md:py-4
       fixed top-0 left-0 right-0 z-20 bg-white border-b-2">
        <div className="flex flex-row justify-center mt-2">
          <div className='bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg'></div>
          <h1 className="text-3xl text-gray-600 ml-2">Online Shop</h1>
        </div>
        <div className="mt-2 ">
            <Link to="/" className="text-gray-600 hover:text-purple-600 p-4">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-purple-600 p-4">Shop</Link>
            <Link to="/aboutus" className="text-gray-600 hover:text-purple-600 p-4">About us</Link>
            <Link to="/contactus" className="text-gray-600 hover:text-purple-600 p-4">Contact us</Link>
            <Link to="/cart"
             className="bg-gradient-to-r from-red-600 to-pink-600 text-gray-50 hover:from-pink-600 hover:to-pink-600  p-3 px-5 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
             cart {itemCount > 0 && <span>{itemCount}</span>}</Link>
        </div>
      </div>
  
    </div>
  )
}
export default Nav;