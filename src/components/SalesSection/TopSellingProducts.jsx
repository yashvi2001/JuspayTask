import React, { useMemo } from 'react';
import { useTheme } from '../../theme';
import styles from './SalesSection.module.css';
import dashboardData from '../../data/dashboard.json';

const TopSellingProducts = React.memo(() => {
  const { theme, isDark } = useTheme();

  // Get products data from JSON file
  const productsData = dashboardData.topSellingProducts;

  const formatCurrency = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
  }, []);

  const formatAmount = amount => formatCurrency.format(amount);

  return (
    <div
      className={styles.salesCard}
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
          Top Selling Products
        </h2>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.productsTable}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Name</th>
              <th className={styles.tableHeader}>Price</th>
              <th className={styles.tableHeader}>Quantity</th>
              <th className={styles.tableHeader}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, index) => (
              <tr key={index} className={styles.tableRow}>
                <td
                  className={styles.tableCell}
                  style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
                >
                  {product.name}
                </td>
                <td
                  className={styles.tableCell}
                  style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
                >
                  {formatAmount(product.price)}
                </td>
                <td
                  className={styles.tableCell}
                  style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
                >
                  {product.quantity}
                </td>
                <td
                  className={styles.tableCell}
                  style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
                >
                  {formatAmount(product.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default TopSellingProducts;
