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
import dashboardData from '../../data/dashboard.json';

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

  // Get revenue trend data from JSON file
  const revenueTrendData = dashboardData.revenueTrend;

  // Revenue trend data based on the exact image patterns
  const revenueData = {
    labels: revenueTrendData.labels,
    datasets: [
      {
        label: revenueTrendData.currentWeek.label,
        data: revenueTrendData.currentWeek.data,
        borderColor: isDark ? '#C6C7F8' : '#1C1C1C',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        tension: 0.4,
        borderDash: [0, 0, 0, 5, 5], // Dashed line from April onwards
      },
      {
        label: revenueTrendData.previousWeek.label,
        data: revenueTrendData.previousWeek.data,
        borderColor: '#A8C5DA',
        backgroundColor: isDark
          ? 'rgba(168, 197, 218, 0.1)'
          : 'rgba(168, 197, 218, 0.1)',
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
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide default legend as we have custom stats
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
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
          font: {
            size: 12,
          },
          callback: function (value) {
            return value + 'M';
          },
          stepSize: 10,
        },
        max: 30,
        border: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    elements: {
      point: {
        hoverRadius: 6,
        hoverBorderWidth: 2,
      },
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
            <div
              className={styles.legendDot}
              style={{ backgroundColor: isDark ? '#C6C7F8' : '#1C1C1C' }}
            ></div>
            <span
              className={styles.statLabel}
              style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
            >
              {revenueTrendData.currentWeek.label}
            </span>
            <span
              className={styles.statValue}
              style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
            >
              {revenueTrendData.currentWeek.value}
            </span>
          </div>
          <div className={styles.statItem}>
            <div
              className={styles.legendDot}
              style={{ backgroundColor: '#A8C5DA' }}
            ></div>
            <span
              className={styles.statLabel}
              style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
            >
              {revenueTrendData.previousWeek.label}
            </span>
            <span
              className={styles.statValue}
              style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
            >
              {revenueTrendData.previousWeek.value}
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
