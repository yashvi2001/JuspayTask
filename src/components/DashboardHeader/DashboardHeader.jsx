import React from 'react';
import Navbar from '../../ui/Navbar';

const DashboardHeader = ({
  onMenuClick,
  onNotificationClick,
  leftSidebarOpen,
  rightSidebarOpen,
  breadcrumbs = ['Dashboards', 'Default'],
  onBreadcrumbClick,
}) => {
  return (
    <Navbar
      onMenuClick={onMenuClick}
      onNotificationClick={onNotificationClick}
      leftSidebarOpen={leftSidebarOpen}
      rightSidebarOpen={rightSidebarOpen}
      breadcrumbs={breadcrumbs}
      onBreadcrumbClick={onBreadcrumbClick}
      showSearch={true}
      showThemeToggle={true}
      showNotifications={true}
    />
  );
};

export default DashboardHeader;
