import React from 'react';
import Navbar from '../../ui/Navbar';

const DashboardHeader = ({
  onMenuClick,
  onNotificationClick,
  leftSidebarOpen,
  rightSidebarOpen,
}) => {
  const breadcrumbs = ['Dashboards', 'Default'];

  return (
    <Navbar
      onMenuClick={onMenuClick}
      onNotificationClick={onNotificationClick}
      leftSidebarOpen={leftSidebarOpen}
      rightSidebarOpen={rightSidebarOpen}
      breadcrumbs={breadcrumbs}
      showSearch={true}
      showThemeToggle={true}
      showNotifications={true}
    />
  );
};

export default DashboardHeader;
