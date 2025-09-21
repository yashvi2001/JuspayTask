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
import dashboardData from '../../data/dashboard.json';

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

  // Get projections chart data from JSON file
  const projectionsData = dashboardData.projectionsChart;

  const barChartData = {
    labels: projectionsData.labels,
    datasets: [
      {
        label: 'Actuals',
        data: projectionsData.actuals,
        backgroundColor: '#A8C5DA', // Light blue for actuals (bottom segment)
        borderRadius: 4,
        barThickness: 22,
      },
      {
        label: 'Projections',
        data: projectionsData.projections,
        backgroundColor: '#9CA3AF', // Darker gray for projections (top segment)
        borderRadius: 4,
        barThickness: 22,
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
    layout: {
      padding: {
        top: 10,
        right: 15,
        bottom: 10,
        left: 5,
      },
    },
    scales: {
      x: {
        stacked: true,
        categoryPercentage: 0.8, // Controls spacing between categories
        barPercentage: 0.9, // Controls bar width within category
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? '#D1D5DB' : '#6B7280',
          font: {
            size: 12,
            weight: '500',
          },
          padding: 8,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.08)' : '#F3F4F6',
          lineWidth: 1,
          drawBorder: false,
        },
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
          font: {
            size: 11,
            weight: '400',
          },
          padding: 12,
          stepSize: 10, // Force 10M increments
          callback: function (value) {
            return value + 'M';
          },
        },
        max: 30,
        border: {
          display: false,
        },
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
