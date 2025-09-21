import { useMemo, useCallback } from 'react';
import useSearch from './useSearch';
import useFilter from './useFilter';
import useSort from './useSort';
import usePagination from './usePagination';

/**
 * Combined hook for table operations (search, filter, sort, pagination)
 * @param {Object} config - Configuration object
 * @param {Array} config.data - The original data array
 * @param {Array} config.searchFields - Fields to search in
 * @param {string} config.filterField - Field to filter by
 * @param {number} config.itemsPerPage - Items per page for pagination
 * @param {Object} config.initialSort - Initial sort config
 * @param {string} config.initialFilter - Initial filter value
 * @param {string} config.initialSearch - Initial search term
 * @returns {Object} - Combined state and methods for all table operations
 */
export const useTableOperations = ({
  data = [],
  searchFields = [],
  filterField = '',
  itemsPerPage = 10,
  initialSort = { key: null, direction: 'asc' },
  initialFilter = 'all',
  initialSearch = '',
}) => {
  // Individual hooks
  const search = useSearch(data, searchFields, initialSearch);
  const filter = useFilter(search.filteredData, filterField, initialFilter);
  const sort = useSort(filter.filteredData, initialSort);
  const pagination = usePagination(sort.sortedData, itemsPerPage);

  // Reset pagination when search or filter changes
  const handleSearch = useCallback(
    e => {
      search.handleSearch(e);
      pagination.resetToFirstPage();
    },
    [search, pagination]
  );

  const handleFilter = useCallback(
    filterValue => {
      filter.handleFilter(filterValue);
      pagination.resetToFirstPage();
    },
    [filter, pagination]
  );

  // Combined reset function
  const resetAll = useCallback(() => {
    search.clearSearch();
    filter.clearFilter();
    sort.clearSort();
    pagination.resetToFirstPage();
  }, [search, filter, sort, pagination]);

  // Final processed data
  const processedData = pagination.paginatedData;

  // Statistics
  const stats = useMemo(
    () => ({
      totalOriginal: data.length,
      totalAfterSearch: search.filteredData.length,
      totalAfterFilter: filter.filteredData.length,
      totalAfterSort: sort.sortedData.length,
      currentPageItems: processedData.length,
    }),
    [
      data.length,
      search.filteredData.length,
      filter.filteredData.length,
      sort.sortedData.length,
      processedData.length,
    ]
  );

  return {
    // Processed data
    data: processedData,
    stats,

    // Search
    search: {
      term: search.searchTerm,
      setTerm: search.setSearchTerm,
      handle: handleSearch,
      clear: search.clearSearch,
      hasActive: search.hasSearchTerm,
    },

    // Filter
    filter: {
      active: filter.activeFilter,
      setActive: filter.setActiveFilter,
      handle: handleFilter,
      clear: filter.clearFilter,
      available: filter.availableFilters,
      hasActive: filter.hasActiveFilter,
    },

    // Sort
    sort: {
      config: sort.sortConfig,
      setConfig: sort.setSortConfig,
      handle: sort.handleSort,
      clear: sort.clearSort,
      getIcon: sort.getSortIcon,
      isSorted: sort.isSorted,
      isSortedBy: sort.isSortedBy,
      getDirection: sort.getSortDirection,
    },

    // Pagination
    pagination: {
      currentPage: pagination.currentPage,
      totalPages: pagination.totalPages,
      totalItems: stats.totalAfterSort,
      itemsPerPage: pagination.itemsPerPage,
      setPage: pagination.setCurrentPage,
      handlePageChange: pagination.handlePageChange,
      goNext: pagination.goToNextPage,
      goPrevious: pagination.goToPreviousPage,
      goFirst: pagination.goToFirstPage,
      goLast: pagination.goToLastPage,
      getVisiblePages: pagination.getVisiblePages,
      getInfo: pagination.getPaginationInfo,
      canGoNext: pagination.canGoNext,
      canGoPrevious: pagination.canGoPrevious,
      isFirstPage: pagination.isFirstPage,
      isLastPage: pagination.isLastPage,
      hasMultiplePages: pagination.hasMultiplePages,
    },

    // Combined actions
    resetAll,

    // State flags
    hasActiveOperations:
      search.hasSearchTerm || filter.hasActiveFilter || sort.isSorted,
  };
};

export default useTableOperations;
