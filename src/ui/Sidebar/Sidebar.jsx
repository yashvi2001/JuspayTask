import React from 'react';
import { useTheme } from '../../theme';
import styles from './Sidebar.module.css';

// Generic sidebar wrapper component
const Sidebar = ({
  type = 'left', // 'left' or 'right'
  children,
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();

  const sidebarClass =
    type === 'left' ? styles.leftSidebar : styles.rightSidebar;
  const borderSide = type === 'left' ? 'borderRight' : 'borderLeft';

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={onClose}
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`${styles.sidebar} ${sidebarClass}`}
        style={{
          backgroundColor: theme.sidebarBackground,
          [borderSide]: `1px solid ${theme.border}`,
        }}
        aria-label={
          type === 'left' ? 'Navigation' : 'Notifications and Activities'
        }
      >
        {/* Mobile close button */}
        <button
          className={styles.mobileCloseButton}
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ×
        </button>
        {children}
      </aside>
    </>
  );
};

export default Sidebar;
