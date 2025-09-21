import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook for sorting functionality
 * @param {Array} data - The data to sort
 * @param {Object} initialConfig - Initial sort configuration { key: null, direction: 'asc' }
 * @returns {Object} - { sortConfig, setSortConfig, handleSort, sortedData, getSortIcon }
 */
export const useSort = (
  data = [],
  initialConfig = { key: null, direction: 'asc' }
) => {
  const [sortConfig, setSortConfig] = useState(initialConfig);

  const getNestedValue = useCallback((obj, path) => {
    if (!path) return obj;
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }, []);

  const compareValues = useCallback(
    (a, b, key, direction) => {
      let aValue = getNestedValue(a, key);
      let bValue = getNestedValue(b, key);

      // Handle different data types
      if (typeof aValue === 'string') aValue = aValue.toLowerCase();
      if (typeof bValue === 'string') bValue = bValue.toLowerCase();

      // Handle dates
      if (key === 'date') {
        const dateA = new Date(aValue);
        const dateB = new Date(bValue);
        if (!isNaN(dateA) && !isNaN(dateB)) {
          aValue = dateA.getTime();
          bValue = dateB.getTime();
        }
      }

      // Handle null/undefined values
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return direction === 'asc' ? -1 : 1;
      if (bValue == null) return direction === 'asc' ? 1 : -1;

      if (aValue < bValue) {
        return direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    },
    [getNestedValue]
  );

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      return compareValues(a, b, sortConfig.key, sortConfig.direction);
    });
  }, [data, sortConfig, compareValues]);

  const handleSort = useCallback(key => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  const clearSort = useCallback(() => {
    setSortConfig({ key: null, direction: 'asc' });
  }, []);

  const getSortIcon = useCallback(
    key => {
      if (sortConfig.key !== key) return null;
      return sortConfig.direction === 'asc' ? 'arrow-up' : 'arrow-down';
    },
    [sortConfig]
  );

  return {
    sortConfig,
    setSortConfig,
    handleSort,
    sortedData,
    clearSort,
    getSortIcon,
    isSorted: sortConfig.key !== null,
    isSortedBy: key => sortConfig.key === key,
    getSortDirection: key =>
      sortConfig.key === key ? sortConfig.direction : null,
  };
};

export default useSort;
