import React, { useState, useCallback } from 'react';
import { DashboardSidebar, Notifications, DashboardHeader } from './components';
import { Dashboard, Orders } from './pages';
import { useTheme } from './theme';
import styles from './Layout.module.css';

// Layout component handles the main app structure
// Manages sidebar states and overall layout
const Layout = () => {
  const { theme } = useTheme();
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true); // Default open
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true); // Default open
  const [currentPage, setCurrentPage] = useState('dashboard'); // Track current page

  const toggleLeftSidebar = useCallback(() => {
    setLeftSidebarOpen(prev => !prev);
  }, []);

  const toggleRightSidebar = useCallback(() => {
    setRightSidebarOpen(prev => !prev);
  }, []);

  const handlePageChange = useCallback(page => {
    setCurrentPage(page);
  }, []);

  // Determine layout class based on sidebar states
  const getLayoutClass = () => {
    if (leftSidebarOpen && rightSidebarOpen) {
      return styles.bothOpen;
    } else if (leftSidebarOpen) {
      return styles.leftOnly;
    } else if (rightSidebarOpen) {
      return styles.rightOnly;
    } else {
      return styles.noneOpen;
    }
  };

  // Get breadcrumbs based on current page
  const getBreadcrumbs = () => {
    if (currentPage === 'orders') {
      return ['Dashboards', 'Orders'];
    }
    return ['Dashboards', 'Default'];
  };

  return (
    <div
      className={`${styles.layout} ${getLayoutClass()}`}
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <DashboardSidebar
        isOpen={leftSidebarOpen}
        onClose={() => setLeftSidebarOpen(false)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <div className={styles.mainContainer}>
        <DashboardHeader
          onMenuClick={toggleLeftSidebar}
          onNotificationClick={toggleRightSidebar}
          leftSidebarOpen={leftSidebarOpen}
          rightSidebarOpen={rightSidebarOpen}
          breadcrumbs={getBreadcrumbs()}
          onBreadcrumbClick={handlePageChange}
        />
        {currentPage === 'dashboard' ? <Dashboard /> : <Orders />}
      </div>

      <Notifications
        isOpen={rightSidebarOpen}
        onClose={() => setRightSidebarOpen(false)}
      />
    </div>
  );
};

export default Layout;
