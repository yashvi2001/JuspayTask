import React, { useMemo } from 'react';
import { useTheme } from '../../theme';
import styles from './SalesSection.module.css';

const TopSellingProducts = React.memo(() => {
  const { theme, isDark } = useTheme();

  const productsData = [
    {
      name: 'ASOS Ridley High Waist',
      price: 79.49,
      quantity: 82,
      amount: 6518.18,
    },
    {
      name: 'Marco Lightweight Shirt',
      price: 128.5,
      quantity: 37,
      amount: 4754.5,
    },
    {
      name: 'Half Sleeve Shirt',
      price: 39.99,
      quantity: 64,
      amount: 2559.36,
    },
    {
      name: 'Lightweight Jacket',
      price: 20.0,
      quantity: 184,
      amount: 3680.0,
    },
    {
      name: 'Marco Shoes',
      price: 79.49,
      quantity: 64,
      amount: 1965.81,
    },
  ];

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
              <th
                className={styles.tableHeader}
                style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
              >
                Name
              </th>
              <th
                className={styles.tableHeader}
                style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
              >
                Price
              </th>
              <th
                className={styles.tableHeader}
                style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
              >
                Quantity
              </th>
              <th
                className={styles.tableHeader}
                style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
              >
                Amount
              </th>
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
