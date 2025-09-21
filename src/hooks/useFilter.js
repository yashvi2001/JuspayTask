import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook for filtering functionality
 * @param {Array} data - The data to filter
 * @param {string} filterField - The field to filter by (supports nested paths like 'status.text')
 * @param {string} initialFilter - Initial filter value
 * @param {string} allValue - Value that represents "show all" (default: 'all')
 * @returns {Object} - { activeFilter, setActiveFilter, handleFilter, filteredData, availableFilters }
 */
export const useFilter = (
  data = [],
  filterField = '',
  initialFilter = 'all',
  allValue = 'all'
) => {
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const getNestedValue = useCallback((obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }, []);

  const availableFilters = useMemo(() => {
    if (!filterField || !data.length) return [allValue];

    const uniqueValues = [
      ...new Set(
        data
          .map(item => {
            const value = getNestedValue(item, filterField);
            return value?.toString();
          })
          .filter(Boolean)
      ),
    ];

    return [allValue, ...uniqueValues];
  }, [data, filterField, allValue, getNestedValue]);

  const filteredData = useMemo(() => {
    if (!filterField || activeFilter === allValue) return data;

    return data.filter(item => {
      const value = getNestedValue(item, filterField);
      return value?.toString().toLowerCase() === activeFilter.toLowerCase();
    });
  }, [data, filterField, activeFilter, allValue, getNestedValue]);

  const handleFilter = useCallback(filterValue => {
    setActiveFilter(filterValue);
  }, []);

  const clearFilter = useCallback(() => {
    setActiveFilter(allValue);
  }, [allValue]);

  return {
    activeFilter,
    setActiveFilter,
    handleFilter,
    filteredData,
    availableFilters,
    clearFilter,
    hasActiveFilter: activeFilter !== allValue,
  };
};

export default useFilter;
