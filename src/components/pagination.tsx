import React from "react";
import "./pagination.scss";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  pageNumberClick: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  pageNumberClick,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const pageNumbers : number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <br />
      <ul className={!pageNumbers.length ? 'hidden' : 'flex justify-evenly'}>
        {/* PREVIOUS PAGE */}
        <li className={currentPage === 1 ? 'hidden' : 'cursor-pointer'} onClick={() => prevPage()}>
          Previous
        </li>

        {/* DISPLAY PAGE NUMBERS */}
        {pageNumbers.map((num) => (
          <li className='cursor-pointer' key={num} onClick={() => pageNumberClick(num)}>
            <span className={num === currentPage ? 'bg-red-600 text-white p-2 rounded-md' : ''}>
              {num}
            </span>
          </li>
        ))}

        {/* NEXT PAGE */}
        <li className={currentPage === pageNumbers.length ? 'hidden' : 'cursor-pointer'} onClick={() => nextPage()}>
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;