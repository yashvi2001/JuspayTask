import React from 'react';
import { useTheme } from '../../theme';
import styles from './eCommerceSection.module.css';

const KPICards = () => {
  const { theme, isDark } = useTheme();

  const kpiData = [
    {
      title: 'Customers',
      value: '3,781',
      change: '+11.01%',
      isPositive: true,
      backgroundColor: isDark ? '#E3F5FF' : '#E3F5FF',
      textColor: isDark ? '#1F2937' : '#1F2937',
      titleColor: isDark ? '#6B7280' : '#6B7280',
    },
    {
      title: 'Orders',
      value: '1,219',
      change: '-0.03%',
      isPositive: false,
      backgroundColor: theme.cardBackground,
      textColor: isDark ? '#FFFFFF' : '#1F2937',
      titleColor: isDark ? '#9CA3AF' : '#6B7280',
    },
    {
      title: 'Revenue',
      value: '$695',
      change: '+15.03%',
      isPositive: true,
      backgroundColor: theme.cardBackground,
      textColor: isDark ? '#FFFFFF' : '#1F2937',
      titleColor: isDark ? '#9CA3AF' : '#6B7280',
    },
    {
      title: 'Growth',
      value: '30.1%',
      change: '+6.08%',
      isPositive: true,
      backgroundColor: isDark ? '#E5ECF6' : '#E5ECF6',
      textColor: isDark ? '#1F2937' : '#1F2937',
      titleColor: isDark ? '#6B7280' : '#6B7280',
    },
  ];

  return (
    <div className={styles.kpiGrid}>
      {kpiData.map((kpi, index) => (
        <div
          key={index}
          className={styles.kpiCard}
          style={{
            backgroundColor: kpi.backgroundColor,
            color: kpi.textColor,
          }}
        >
          <div className={styles.cardTitle} style={{ color: kpi.titleColor }}>
            {kpi.title}
          </div>
          <div className={styles.cardValue} style={{ color: kpi.textColor }}>
            {kpi.value}
          </div>
          <div
            className={
              kpi.isPositive ? styles.positiveChange : styles.negativeChange
            }
          >
            {kpi.isPositive ? '↗' : '↘'} {kpi.change}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
