import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const defaultButton = (props) => <button {...props}>{props.children}</button>;

const Pagination = ({
  pages,
  page,
  PageButtonComponent,
  onPageChange,
  previousText,
  nextText,
}) => {
  const [visiblePages, setVisiblePages] = useState([]);

  useEffect(() => {
    const newVisiblePages = getVisiblePages(page, pages);
    setVisiblePages(newVisiblePages);
  }, [pages, page]);

  const getVisiblePages = (currentPage, totalPages) => {
    // Same logic as before to determine visible pages
    // ... (implement getVisiblePages logic here)
  };

  const changePage = (newPage) => {
    if (newPage === page + 1) return;

    const filteredVisiblePages = visiblePages.filter((p) => p <= totalPages);
    setVisiblePages(filteredVisiblePages);

    onPageChange(newPage - 1);
  };

  return (
    <div className="Table__pagination">
      <div className="Table__prevPageWrapper">
        <PageButtonComponent
          className="Table__pageButton"
          onClick={() => changePage(page)}
          disabled={page === 0}
        >
          {previousText}
        </PageButtonComponent>
      </div>
      <div className="Table__visiblePagesWrapper">
        {visiblePages.map((page, index) => (
          <PageButtonComponent
            key={page}
            className={
              page === page + 1
                ? "Table__pageButton Table__pageButton--active"
                : "Table__pageButton"
            }
            onClick={() => changePage(page)}
          >
            {index > 0 && visiblePages[index - 1] + 2 < page
              ? `...${page}`
              : page}
          </PageButtonComponent>
        ))}
      </div>
      <div className="Table__nextPageWrapper">
        <PageButtonComponent
          className="Table__pageButton"
          onClick={() => changePage(page + 2)}
          disabled={page === pages - 1}
        >
          {nextText}
        </PageButtonComponent>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  // ... same prop types
};

export default Pagination;
