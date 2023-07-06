import React, { useState } from "react";

const ITEMS_PER_PAGE = 10;

const Results = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {currentData.map((item) => (
        <ul key={item.objectID}>
          <li>{item.title}</li>
        </ul>
      ))}
<p>{currentPage}/{totalPages}</p>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Results;
