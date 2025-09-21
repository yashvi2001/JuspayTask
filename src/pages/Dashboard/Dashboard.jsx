import React from 'react';
import {
  RevenueTrend,
  RevenueByLocation,
  TopSellingProducts,
  TotalSales,
  KPICards,
  ProjectionsChart,
} from '../../components';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.pageTitle}>eCommerce</h1>

      {/* Main Content - Side by Side Layout */}
      <div className={styles.mainContent}>
        {/* Left Side - KPI Cards */}
        <div className={styles.leftSection}>
          <KPICards />
        </div>

        {/* Right Side - Chart */}
        <div className={styles.rightSection}>
          <ProjectionsChart />
        </div>
      </div>

      {/* Revenue Section - Charts */}
      <div className={styles.revenueSection}>
        <RevenueTrend />
        <RevenueByLocation />
      </div>

      {/* Sales Data Section */}
      <div className={styles.salesSection}>
        <TopSellingProducts />
        <TotalSales />
      </div>
    </div>
  );
};

export default Dashboard;
