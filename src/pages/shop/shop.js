import { PRODUCTS } from "../../data/productsData"
import { useEffect, useState } from 'react';
import Product from "./product";
import Pagination from "../../components/pagination";
export default function Shop() {

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 15;


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = PRODUCTS.length ? PRODUCTS.slice(indexOfFirstPost, indexOfLastPost) : [];

    
    const pageNumberClick = (pageNum) => {
        window.scroll(0, 0);
        setTimeout(() => setCurrentPage(pageNum), 500);
    };

    const nextPage = () => {
         window.scroll(0, 0);
        setTimeout(() => setCurrentPage(currentPage + 1), 500);
    };

    const prevPage = () => {
         window.scroll(0, 0);
        setTimeout(() => setCurrentPage(currentPage - 1), 500);
    };
    return (
        <>

            <div className="flex flex-wrap justify-center container mx-auto my-4 place-items-center gap-4 p-2">
                {
                    !PRODUCTS.length
                        ? <p style={{ textAlign: 'center' }}>No posts to show..</p>
                        : currentPosts.map((productData) => {
                            return <Product key={productData.id} data={productData} PRODUCTS={currentPosts} />
                        })
                }
            </div>
            <div className="flex justify-center pb-5">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={PRODUCTS.length}
                    pageNumberClick={pageNumberClick}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                />

            </div>

        </>
    )
}