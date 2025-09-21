import React, { useState, useCallback, useMemo, Suspense } from 'react';
import { DashboardSidebar, Notifications, DashboardHeader } from './components';

// Lazy load pages for better performance
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const Orders = React.lazy(() => import('./pages/Orders/Orders'));
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

  // Memoize layout class based on sidebar states
  const layoutClass = useMemo(() => {
    if (leftSidebarOpen && rightSidebarOpen) {
      return styles.bothOpen;
    } else if (leftSidebarOpen) {
      return styles.leftOnly;
    } else if (rightSidebarOpen) {
      return styles.rightOnly;
    } else {
      return styles.noneOpen;
    }
  }, [leftSidebarOpen, rightSidebarOpen]);

  // Memoize breadcrumbs based on current page
  const breadcrumbs = useMemo(() => {
    if (currentPage === 'orders') {
      return ['Dashboards', 'Orders'];
    }
    return ['Dashboards', 'Default'];
  }, [currentPage]);

  // Memoize dynamic styles
  const containerStyle = useMemo(
    () => ({
      backgroundColor: theme.background,
      color: theme.text,
    }),
    [theme.background, theme.text]
  );

  return (
    <div className={`${styles.layout} ${layoutClass}`} style={containerStyle}>
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
          breadcrumbs={breadcrumbs}
          onBreadcrumbClick={handlePageChange}
        />
        <Suspense
          fallback={
            <div style={{ padding: '20px', color: theme.text }}>Loading...</div>
          }
        >
          {currentPage === 'dashboard' ? (
            <Dashboard onPageChange={handlePageChange} />
          ) : (
            <Orders />
          )}
        </Suspense>
      </div>

      <Notifications
        isOpen={rightSidebarOpen}
        onClose={() => setRightSidebarOpen(false)}
      />
    </div>
  );
};

export default Layout;
