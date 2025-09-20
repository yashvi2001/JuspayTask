import React from 'react';
import { useTheme } from '../../theme';
import Icon from '../../ui/Icon';
import styles from './Dashboard.module.css';

// Dashboard page with metrics and analytics
const Dashboard = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.main} style={{ backgroundColor: theme.background }}>
      <h1 className={styles.pageTitle} style={{ color: theme.text }}>
        eCommerce
      </h1>

      {/* Metrics Cards */}
      <div className={styles.cardContainer}>
        <div
          className={styles.card}
          style={{
            backgroundColor: theme.cardBackground,
            border: `1px solid ${theme.border}`,
          }}
        >
          <div
            className={styles.cardTitle}
            style={{ color: theme.textSecondary }}
          >
            Customers
          </div>
          <div className={styles.cardValue} style={{ color: theme.text }}>
            3,781
          </div>
          <div className={styles.positiveChange}>
            <Icon name="trending-up" size={12} />
            +11.01%
          </div>
        </div>

        <div
          className={styles.card}
          style={{
            backgroundColor: theme.cardBackground,
            border: `1px solid ${theme.border}`,
          }}
        >
          <div
            className={styles.cardTitle}
            style={{ color: theme.textSecondary }}
          >
            Orders
          </div>
          <div className={styles.cardValue} style={{ color: theme.text }}>
            1,219
          </div>
          <div className={styles.negativeChange}>
            <Icon name="trending-down" size={12} />
            -0.03%
          </div>
        </div>

        <div
          className={styles.card}
          style={{
            backgroundColor: theme.cardBackground,
            border: `1px solid ${theme.border}`,
          }}
        >
          <div
            className={styles.cardTitle}
            style={{ color: theme.textSecondary }}
          >
            Revenue
          </div>
          <div className={styles.cardValue} style={{ color: theme.text }}>
            $695
          </div>
          <div className={styles.positiveChange}>
            <Icon name="trending-up" size={12} />
            +15.03%
          </div>
        </div>

        <div
          className={styles.card}
          style={{
            backgroundColor: theme.cardBackground,
            border: `1px solid ${theme.border}`,
          }}
        >
          <div
            className={styles.cardTitle}
            style={{ color: theme.textSecondary }}
          >
            Growth
          </div>
          <div className={styles.cardValue} style={{ color: theme.text }}>
            30.1%
          </div>
          <div className={styles.positiveChange}>
            <Icon name="trending-up" size={12} />
            +6.08%
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className={styles.chartContainer}>
        <div
          className={styles.chartCard}
          style={{
            backgroundColor: theme.cardBackground,
            border: `1px solid ${theme.border}`,
          }}
        >
          <h2 className={styles.chartTitle} style={{ color: theme.text }}>
            Projections vs Actuals
          </h2>
          <div
            className={styles.chartPlaceholder}
            style={{
              backgroundColor: theme.background,
              color: theme.textSecondary,
            }}
          >
            Bar Chart - Projections vs Actuals
          </div>
        </div>

        <div
          className={styles.chartCard}
          style={{
            backgroundColor: theme.cardBackground,
            border: `1px solid ${theme.border}`,
          }}
        >
          <h2 className={styles.chartTitle} style={{ color: theme.text }}>
            Revenue by Location
          </h2>
          <div
            className={styles.mapPlaceholder}
            style={{
              backgroundColor: theme.background,
              color: theme.textSecondary,
            }}
          >
            World Map - Revenue by Location
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        {/* Top Selling Products Table */}
        <div
          className={styles.chartCard}
          style={{
            backgroundColor: theme.cardBackground,
            border: `1px solid ${theme.border}`,
          }}
        >
          <h2 className={styles.chartTitle} style={{ color: theme.text }}>
            Top Selling Products
          </h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th
                  className={styles.tableHeader}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.textSecondary,
                  }}
                >
                  Name
                </th>
                <th
                  className={styles.tableHeader}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.textSecondary,
                  }}
                >
                  Price
                </th>
                <th
                  className={styles.tableHeader}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.textSecondary,
                  }}
                >
                  Quantity
                </th>
                <th
                  className={styles.tableHeader}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.textSecondary,
                  }}
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  <div className={styles.productRow}>
                    <div
                      className={styles.productImage}
                      style={{ backgroundColor: theme.surface }}
                    ></div>
                    ASOS Ridley High Waist
                  </div>
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $79.49
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  82
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $6,518.18
                </td>
              </tr>
              <tr>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  <div className={styles.productRow}>
                    <div
                      className={styles.productImage}
                      style={{ backgroundColor: theme.surface }}
                    ></div>
                    Marco Lightweight Shirt
                  </div>
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $128.50
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  37
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $4,754.50
                </td>
              </tr>
              <tr>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  <div className={styles.productRow}>
                    <div
                      className={styles.productImage}
                      style={{ backgroundColor: theme.surface }}
                    ></div>
                    Half Sleeve Shirt
                  </div>
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $39.99
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  64
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $2,559.36
                </td>
              </tr>
              <tr>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  <div className={styles.productRow}>
                    <div
                      className={styles.productImage}
                      style={{ backgroundColor: theme.surface }}
                    ></div>
                    Lightweight Jacket
                  </div>
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $20.00
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  184
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $3,680.00
                </td>
              </tr>
              <tr>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  <div className={styles.productRow}>
                    <div
                      className={styles.productImage}
                      style={{ backgroundColor: theme.surface }}
                    ></div>
                    Marco Shoes
                  </div>
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $79.49
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  64
                </td>
                <td
                  className={styles.tableCell}
                  style={{
                    borderBottom: `1px solid ${theme.border}`,
                    color: theme.text,
                  }}
                >
                  $1,965.81
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Sales Pie Chart */}
        <div
          className={styles.chartCard}
          style={{
            backgroundColor: theme.cardBackground,
            border: `1px solid ${theme.border}`,
          }}
        >
          <h2 className={styles.chartTitle} style={{ color: theme.text }}>
            Total Sales
          </h2>
          <div
            className={styles.pieChart}
            style={{
              backgroundColor: theme.background,
              color: theme.textSecondary,
            }}
          >
            Pie Chart - Total Sales
          </div>
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div className={styles.legendContent}>
                <div
                  className={styles.legendDot}
                  style={{ backgroundColor: '#3B82F6' }}
                ></div>
                Direct
              </div>
              <span>$300.56</span>
            </div>
            <div className={styles.legendItem}>
              <div className={styles.legendContent}>
                <div
                  className={styles.legendDot}
                  style={{ backgroundColor: '#10B981' }}
                ></div>
                Affiliate
              </div>
              <span>$135.18</span>
            </div>
            <div className={styles.legendItem}>
              <div className={styles.legendContent}>
                <div
                  className={styles.legendDot}
                  style={{ backgroundColor: '#F59E0B' }}
                ></div>
                Sponsored
              </div>
              <span>$154.02</span>
            </div>
            <div className={styles.legendItem}>
              <div className={styles.legendContent}>
                <div
                  className={styles.legendDot}
                  style={{ backgroundColor: '#EF4444' }}
                ></div>
                E-mail
              </div>
              <span>$48.96</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
