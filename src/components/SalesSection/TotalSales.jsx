import React from 'react';
import { useTheme } from '../../theme';
import styles from './SalesSection.module.css';
import dashboardData from '../../data/dashboard.json';
import donutDark from '../../assets/svg/donot-dark.svg';
import donutLight from '../../assets/svg/donot-light.svg';

const TotalSales = () => {
  const { theme, isDark } = useTheme();

  // Get sales data from JSON file
  const totalSalesData = dashboardData.totalSales;

  // Map legend data with theme-aware colors
  const legendData = totalSalesData.legendData.map(item => ({
    ...item,
    color:
      item.darkColor && item.lightColor
        ? isDark
          ? item.darkColor
          : item.lightColor
        : item.color,
  }));

  return (
    <div
      className={styles.revenueCard}
      style={{
        backgroundColor: theme.cardBackground,
        border: isDark ? 'none' : '1px solid #E5E7EB',
      }}
    >
      <div className={styles.cardHeader}>
        <h2
          className={styles.cardTitle}
          style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
        >
          Total Sales
        </h2>
      </div>

      <div className={styles.donutContainer}>
        <div className={styles.donutChart}>
          <img
            src={isDark ? donutDark : donutLight}
            alt="Sales Distribution Donut Chart"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        <div className={styles.customLegend}>
          {legendData.map((item, index) => (
            <div key={index} className={styles.legendItem}>
              <div
                className={styles.legendDot}
                style={{ backgroundColor: item.color }}
              ></div>
              <span
                className={styles.legendLabel}
                style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
              >
                {item.label}
              </span>
              <span
                className={styles.legendValue}
                style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
              >
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                }).format(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
