import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from '../../theme';
import styles from './SalesSection.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalSales = () => {
  const { theme, isDark } = useTheme();

  const salesData = {
    labels: ['Direct', 'Affiliate', 'Sponsored', 'E-mail'],
    datasets: [
      {
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: [
          '#000000', // Direct - Black
          '#10B981', // Affiliate - Green
          '#A78BFA', // Sponsored - Light Purple
          '#60A5FA', // E-mail - Light Blue
        ],
        borderColor: isDark ? '#1F2937' : '#FFFFFF',
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverBorderColor: isDark ? '#374151' : '#F3F4F6',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    rotation: -90, // Start from top
    plugins: {
      legend: {
        display: false, // We'll create custom legend
      },
      tooltip: {
        backgroundColor: isDark
          ? 'rgba(0, 0, 0, 0.8)'
          : 'rgba(255, 255, 255, 0.95)',
        titleColor: isDark ? '#fff' : '#1F2937',
        bodyColor: isDark ? '#fff' : '#1F2937',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function (context) {
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
            }).format(value)} (${percentage}%)`;
          },
        },
      },
    },
  };

  const totalSales = salesData.datasets[0].data.reduce(
    (sum, value) => sum + value,
    0
  );
  const directPercentage = ((300.56 / totalSales) * 100).toFixed(1);

  const legendData = [
    { label: 'Direct', value: 300.56, color: '#000000' },
    { label: 'Affiliate', value: 135.18, color: '#10B981' },
    { label: 'Sponsored', value: 154.02, color: '#A78BFA' },
    { label: 'E-mail', value: 48.96, color: '#60A5FA' },
  ];

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
          <Doughnut data={salesData} options={options} />
          <div className={styles.donutCenter}>
            <div className={styles.percentageBadge}>{directPercentage}%</div>
          </div>
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
                {item.label}:
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
