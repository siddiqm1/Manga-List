import React from 'react'

const Pagination = ({page, setPage, lastPage}) => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  const handlePrevPage = () => {
    if(page > 1) {
      setPage((prevState) => prevState - 1)
      scrollTop()
    }
  }

  const handleNextPage = () => {
    if(page < lastPage) {
      setPage((nextState) => nextState + 1)
      scrollTop()
    }
  }

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-3 text-color-accent">
      <button
        className={`transition-all text-lg ${
          page > 1 ? "hover:text-teal-600" : "text-gray-400 cursor-not-allowed"
        }`}
        onClick={handlePrevPage}
        disabled={page <= 1}
      >
        Prev
      </button>

      <p>
        {page} of {lastPage}
      </p>

      <button
        className={`transition-all text-lg ${
          page < lastPage ? "hover:text-teal-600" : "text-gray-400 cursor-not-allowed"
        }`}
        onClick={handleNextPage}
        disabled={page >= lastPage}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination