const Pagination = ({ currentPage, totalPages, onPageChange }) => {
const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

return (
    <div className="flex gap-2">
      {pageNumbers.map((pageNumber) => (
        <button className={pageNumber === currentPage ? 'bg-red-600 text-white shadow w-10 py-2 rounded' : 'bg-white shadow w-10 py-2 rounded'} key={pageNumber} onClick={() => onPageChange(pageNumber)}>
          {pageNumber}
        </button>
      ))}
      {currentPage === totalPages ? (<button className='bg-white shadow px-3 py-2 rounded' onClick={() => onPageChange(currentPage-1)}>Prev Page</button>) : (<button className='bg-white shadow px-3 py-2 rounded' onClick={() => onPageChange(currentPage+1)}>Next Page</button>)}
    </div>
  );
}

export default Pagination;