import React from 'react';
import styles from './eCommerceSection.module.css';
import { useTheme } from '../../theme';
import Icon from '../../ui/Icon/Icon';
import dashboardData from '../../data/dashboard.json';

const KPICards = ({ onPageChange }) => {
  const { theme, isDark } = useTheme();

  // Get KPI data from JSON and apply theme colors where needed
  const kpiData = dashboardData.kpiCards.map(kpi => ({
    ...kpi,
    backgroundColor: kpi.useThemeColors
      ? theme.cardBackground
      : kpi.backgroundColor,
    textColor: kpi.useThemeColors ? theme.textColor : kpi.textColor,
    titleColor: kpi.useThemeColors
      ? isDark
        ? '#ffffff'
        : '#000000'
      : kpi.titleColor,
  }));

  const handleKPIClick = kpi => {
    // Navigate to Orders page when Orders KPI is clicked
    if (kpi.title === 'Orders' && onPageChange) {
      onPageChange('orders');
    }
  };

  return (
    <div className={styles.kpiGrid}>
      {kpiData.map((kpi, index) => (
        <div
          key={index}
          className={`${styles.kpiCard} ${kpi.title === 'Orders' ? styles.clickableCard : ''}`}
          style={{
            backgroundColor: kpi.backgroundColor,
            color: kpi.textColor,
            cursor: kpi.title === 'Orders' ? 'pointer' : 'default',
          }}
          onClick={() => handleKPIClick(kpi)}
        >
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle} style={{ color: kpi.titleColor }}>
              {kpi.title}
            </div>
          </div>
          <div className={styles.cardBody}>
            {/* Default state: value on left, change on right */}
            <div className={styles.cardValue} style={{ color: kpi.textColor }}>
              {kpi.value}
            </div>
            <div className={styles.cardChangeDefault}>
              <div
                className={styles.changeIcon}
                style={{ color: kpi.textColor }}
              >
                {kpi.change}{' '}
                {kpi.isPositive ? (
                  <Icon name="trending-up" />
                ) : (
                  <Icon name="trending-down" />
                )}
              </div>
            </div>

            {/* Hover state: change on left, value on right */}
            <div className={styles.cardChangeHover}>
              <div
                className={styles.changeIcon}
                style={{ color: kpi.textColor }}
              >
                {kpi.change}{' '}
                {kpi.isPositive ? (
                  <Icon name="trending-up" />
                ) : (
                  <Icon name="trending-down" />
                )}
              </div>
            </div>
            <div
              className={styles.cardValueHover}
              style={{ color: kpi.textColor }}
            >
              {kpi.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
