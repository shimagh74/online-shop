import React from 'react';
import { Link } from 'react-router-dom'
import onlineShopping from '../assets/img/online-shopping.jpg'
import Subscribe from '../assets/img/subscribe.jpg'
import { PRODUCTS } from '../data/productsData'
import { useState } from 'react';
import Product from './shop/product.tsx';
import { BiSupport } from "react-icons/bi";
import './home.scss';
import img1 from "./../assets/img/img1.jpg"
import img2 from "./../assets/img/img2.jpg"
import img3 from "./../assets/img/img3.jpg"
import img4 from "./../assets/img/img4.jpg"
import img5 from "./../assets/img/img5.jpg"
import img6 from "./../assets/img/img6.jpg"

const Home = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const postsPerPage = 5;


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = PRODUCTS.length ? PRODUCTS.slice(indexOfFirstPost, indexOfLastPost) : [];

    return (
        <>
            <div className='md:flex md:flex-row mt-8 md:mt-0 px-3'>
                <div className='md:w-2/4 flex flex-col justify-center items-center'>
                    <h2 className='font-serif text-5xl text-gray-600 my-4  text-center md:self-start md:text-left'>The best place to get your favorite products</h2>
                    <p className='uppercase text-gray-600 text-center md:self-start md:text-left'>We will help you. </p>
                    <p className='uppercase text-gray-600 text-center md:self-start md:text-left'>Wherever and whenever you need help.</p>
                    <Link to="/" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-pink-600 hover:to-pink-600  duration-300 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5 ">Shop Now</Link>
                </div>
                <div className='md:w-2/4'>
                    <img src={onlineShopping} className='w-full' />
                </div>
            </div>
            <div className='md:w-10/12 w-full grid grid-cols-3 gap-3 px-3 md:gap-6 mx-auto justify-center py-9'>
                <div className='border border-red-400 rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 object-contain text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    <div >
                        <h4 className='font-medium capitalize text-lg'>Free Shopping</h4>
                        <p className='text-gray-500 text-sm'>order over $200</p>
                    </div>
                </div>
                <div className='border border-red-400 rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 object-contain text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>

                    <div >
                        <h4 className='font-medium capitalize text-lg'>Money returns</h4>
                        <p className='text-gray-500 text-sm'>7 Days money return</p>
                    </div>
                </div>
                <div className='border border-red-400 rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                    <BiSupport className="w-12 h-12 object-contain text-red-500" />
                    <div >
                        <h4 className='font-medium capitalize text-lg'>24/7 Support</h4>
                        <p className='text-gray-500 text-sm'>Customer support</p>
                    </div>
                </div>

            </div>
            <div className='m-4'>
                <div className='flex flex-row justify-between my-5 items-center'>
                    <h2 className='text-2xl'>New Products</h2>
                    <Link to="/shop" className="text-xl flex flex-row">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-8 ml-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </Link>
                </div>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap justify-around md:justify-between container mx-auto my-4 place-items-center gap-4 p-2'>
                {currentPosts.map((productData) => {
                    return <Product key={productData.id} data={productData} PRODUCTS={currentPosts} />
                })
                }
            </div>
            <div className='rounded-lg shadow-lg my-10 flex flex-row'>
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
            <div className='gallery'>
                <div className='item img1'><img src={img1} /></div>
                <div className='item img2'><img src={img2} /></div>
                <div className='item img3'><img src={img3} /></div>
                <div className='item img4'><img src={img4} /></div>
                <div className='item img5'><img src={img5} /></div>
                <div className='item img6'><img src={img6} /></div>
            </div>
        </>
    )
}
export default Home;