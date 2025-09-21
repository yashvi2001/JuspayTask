import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook for search functionality
 * @param {Array} data - The data to search through
 * @param {Array} searchFields - Array of field paths to search in (supports nested paths like 'user.name')
 * @param {string} initialSearchTerm - Initial search term
 * @returns {Object} - { searchTerm, setSearchTerm, handleSearch, filteredData }
 */
export const useSearch = (
  data = [],
  searchFields = [],
  initialSearchTerm = ''
) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const handleSearch = useCallback(e => {
    const value = typeof e === 'string' ? e : e.target.value;
    setSearchTerm(value);
  }, []);

  const getNestedValue = useCallback((obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }, []);

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    return data.filter(item => {
      return searchFields.some(field => {
        const value = getNestedValue(item, field);
        return value
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
    });
  }, [data, searchFields, searchTerm, getNestedValue]);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
    filteredData,
    clearSearch,
    hasSearchTerm: searchTerm.trim().length > 0,
  };
};

export default useSearch;
