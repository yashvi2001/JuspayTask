import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../../theme';
import styles from './RevenueSection.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const RevenueTrend = () => {
  const { theme, isDark } = useTheme();

  // Revenue trend data based on the image
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Current Week',
        data: [12, 8, 10, 16, 18, 20],
        borderColor: isDark ? '#000000' : '#000000',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        tension: 0.4,
        borderDash: [0, 0, 0, 0, 5, 5], // Dashed line from April onwards
      },
      {
        label: 'Previous Week',
        data: [7, 12, 17, 10, 15, 22],
        borderColor: isDark ? '#60A5FA' : '#60A5FA',
        backgroundColor: isDark
          ? 'rgba(96, 165, 250, 0.1)'
          : 'rgba(96, 165, 250, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 20,
          font: {
            size: 12,
            weight: '500',
          },
          color: isDark ? '#D1D5DB' : '#6B7280',
        },
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
        displayColors: true,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y}M`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : '#F3F4F6',
        },
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
          font: {
            size: 12,
          },
          callback: function (value) {
            return value + 'M';
          },
        },
        max: 30,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

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
          Revenue
        </h2>
        <div className={styles.revenueStats}>
          <div className={styles.statItem}>
            <span
              className={styles.statLabel}
              style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
            >
              Current Week
            </span>
            <span
              className={styles.statValue}
              style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
            >
              $58,211
            </span>
          </div>
          <div className={styles.statItem}>
            <span
              className={styles.statLabel}
              style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
            >
              Previous Week
            </span>
            <span
              className={styles.statValue}
              style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
            >
              $68,768
            </span>
          </div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <Line data={revenueData} options={options} />
      </div>
    </div>
  );
};

export default RevenueTrend;
