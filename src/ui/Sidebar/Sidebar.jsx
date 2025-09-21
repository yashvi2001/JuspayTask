import React from 'react';
import { useTheme } from '../../theme';
import styles from './Sidebar.module.css';

// Generic sidebar wrapper component
const Sidebar = ({
  type = 'left', // 'left' or 'right'
  children,
}) => {
  const { theme } = useTheme();

  const sidebarClass =
    type === 'left' ? styles.leftSidebar : styles.rightSidebar;
  const borderSide = type === 'left' ? 'borderRight' : 'borderLeft';

  return (
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
      {children}
    </aside>
  );
};

export default Sidebar;
