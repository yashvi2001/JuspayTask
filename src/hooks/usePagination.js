import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook for pagination functionality
 * @param {Array} data - The data to paginate
 * @param {number} itemsPerPage - Number of items per page (default: 10)
 * @param {number} initialPage - Initial page number (default: 1)
 * @returns {Object} - Pagination state and methods
 */
export const usePagination = (
  data = [],
  itemsPerPage = 10,
  initialPage = 1
) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = useCallback(
    page => {
      const validPage = Math.max(1, Math.min(page, totalPages));
      setCurrentPage(validPage);
    },
    [totalPages]
  );

  const goToNextPage = useCallback(() => {
    handlePageChange(currentPage + 1);
  }, [currentPage, handlePageChange]);

  const goToPreviousPage = useCallback(() => {
    handlePageChange(currentPage - 1);
  }, [currentPage, handlePageChange]);

  const goToFirstPage = useCallback(() => {
    handlePageChange(1);
  }, [handlePageChange]);

  const goToLastPage = useCallback(() => {
    handlePageChange(totalPages);
  }, [handlePageChange, totalPages]);

  const resetToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const getVisiblePages = useCallback(
    (maxVisiblePages = 5) => {
      const pages = [];
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
    [currentPage, totalPages]
  );

  const getPaginationInfo = useCallback(() => {
    const startItem =
      totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return {
      startItem,
      endItem,
      totalItems,
      currentPage,
      totalPages,
    };
  }, [currentPage, itemsPerPage, totalItems, totalPages]);

  return {
    // Data
    paginatedData,

    // State
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,

    // Actions
    setCurrentPage,
    handlePageChange,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage,
    resetToFirstPage,

    // Utilities
    getVisiblePages,
    getPaginationInfo,

    // Flags
    canGoNext: currentPage < totalPages,
    canGoPrevious: currentPage > 1,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages,
    hasMultiplePages: totalPages > 1,
  };
};

export default usePagination;
