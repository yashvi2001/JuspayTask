import React from 'react';
import { useTheme } from '../../theme';
import styles from './Sidebar.module.css';

// Generic sidebar wrapper component
const Sidebar = ({
  type = 'left', // 'left' or 'right'
  isOpen = true,
  children,
}) => {
  const { theme } = useTheme();

  const sidebarClass =
    type === 'left' ? styles.leftSidebar : styles.rightSidebar;
  const transform = isOpen
    ? 'translateX(0)'
    : type === 'left'
      ? 'translateX(-100%)'
      : 'translateX(100%)';
  const borderSide = type === 'left' ? 'borderRight' : 'borderLeft';

  return (
    <aside
      className={`${styles.sidebar} ${sidebarClass}`}
      style={{
        backgroundColor: theme.sidebarBackground,
        [borderSide]: `1px solid ${theme.border}`,
        transform,
      }}
      aria-label={
        type === 'left' ? 'Navigation' : 'Notifications and Activities'
      }
    >
      {children}
    </aside>
  );
};

export default Sidebar;
