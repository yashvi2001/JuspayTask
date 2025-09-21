import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '../../theme';
import styles from './eCommerceSection.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProjectionsChart = () => {
  const { theme, isDark } = useTheme();

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actuals',
        data: [18, 22, 18, 25, 12, 20],
        backgroundColor: '#A8C5DA', // Light blue for actuals (bottom segment)
        borderRadius: 4,
        barThickness: 32,
      },
      {
        label: 'Projections',
        data: [2, 3, 3, 3, 3, 4],
        backgroundColor: '#9CA3AF', // Darker gray for projections (top segment)
        borderRadius: 4,
        barThickness: 32,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? '#D1D5DB' : '#6B7280',
          font: {
            size: 12,
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : '#F3F4F6',
        },
        ticks: {
          color: isDark ? '#D1D5DB' : '#6B7280',
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
  };

  return (
    <div
      className={styles.chartCard}
      style={{
        backgroundColor: theme.cardBackground,
        border: isDark ? 'none' : '1px solid #E5E7EB',
      }}
    >
      <h2
        className={styles.chartTitle}
        style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
      >
        Projections vs Actuals
      </h2>
      <div className={styles.chartWrapper}>
        <Bar data={barChartData} options={barChartOptions} />
      </div>
    </div>
  );
};

export default ProjectionsChart;
