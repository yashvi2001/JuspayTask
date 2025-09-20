import { useState, useCallback } from 'react';

/**
 * Custom hook for managing boolean toggle state
 * Provides a clean API for toggling between true/false states
 *
 * @param {boolean} initialValue - Initial state value (default: false)
 * @returns {[boolean, function, function, function]} Array containing [state, toggle, setTrue, setFalse]
 *
 * @example
 * const [isOpen, toggleOpen, openModal, closeModal] = useToggle(false);
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, setTrue, setFalse];
};
