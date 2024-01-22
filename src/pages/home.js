import { Link } from 'react-router-dom'
import onlineShopping from '../assets/img/online-shopping.jpg'
import Subscribe from '../assets/img/subscribe.jpg'
import { PRODUCTS } from '../data/productsData'
import { useState } from 'react';
import Product from './shop/product';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = PRODUCTS.length ? PRODUCTS.slice(indexOfFirstPost, indexOfLastPost) : [];

    return (
        <>
            <div className='md:flex md:flex-row mt-8 md:mt-0'>
                <div className='md:w-2/5 flex flex-col justify-center items-center'>
                    <h2 className='font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left'>The best place to get your favorite products</h2>
                    <p className='uppercase text-gray-600 text-center md:self-start md:text-left'>We will help you. </p>
                    <p className='uppercase text-gray-600 text-center md:self-start md:text-left'>Wherever and whenever you need help.</p>
                    <Link to="/" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-pink-600 hover:to-pink-600  duration-300 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5 ">Shop Now</Link>
                </div>
                <div className='md:w-3/5'>
                    <img src={onlineShopping} className='w-full' />
                </div>
            </div>
            <div className='m-4'>
                <div className='flex flex-row justify-between my-5 items-center'>
                    <h2 className='text-3xl'>New Products</h2>
                    <Link to="/shop" className="text-xl flex flex-row">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-8 ml-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </Link>
                </div>
            </div>
            <div className='flex flex-wrap justify-around md:justify-between container mx-auto my-4 place-items-center gap-4 p-2'>
                {currentPosts.map((productData) => {
                    return <Product key={productData.id} data={productData} PRODUCTS={currentPosts} />
                })
                }
            </div>
            <div className='rounded-lg shadow-lg my-20 flex flex-row'>
                <div className='lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black
                 lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12'>
                    <div className='lg:w-1/2'>
                        <h3 className='text-2xl font-extrabold mb-4'>Subscribe to get our offers first</h3>
                        <p className='mb-4 leading-relaxed'>Want to hear from us when we have new offers?
                            Sing up for our newsletter and we'll email you every time we have new sale offers.
                        </p>
                        <div>
                            <input type='email' placeholder='Enter email address' className='bg-gray-500 text-gray-200
                             placeholder-gray-400 px-4 py-3 rounded-lg w-full focus:outline-none mb-4'/>
                            <button type='submit' className='bg-red-600 py-3 rounded-lg w-full'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='lg:w-2/5 w-full lg:flex lg:flex-row hidden'>
                    <img src={Subscribe} className='h-96 lg:w-full rounded-lg' />
                </div>
            </div>
            {/* <div className='border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center py-5 text-sm'>
                <div className='mb-4'>
                    <a href='#' className='mx-2.5'>About</a>
                    <a href='#' className='mx-2.5'>Privacy Policy</a>
                    <a href='#' className='mx-2.5'>Terms of Services</a>
                </div>
<p>© Copyright Reserved 2024</p>
            </div> */}

        </>
    )
}
export default Home;