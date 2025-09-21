import React, { useMemo } from 'react';
import { useTheme } from '../../theme';
import styles from './RevenueSection.module.css';
// Import optimized PNG image instead of large SVG
import WorldMapImage from '../../assets/images/WorldMap.png';

// Optimized WorldMap component using PNG
const OptimizedWorldMap = React.memo(() => (
  <img
    src={WorldMapImage}
    alt="World Map"
    className={styles.worldMapImage}
    style={{ width: '100%', height: '200px', objectFit: 'contain' }}
  />
));

const LocationItem = React.memo(({ location, isDark }) => (
  <div className={styles.locationItem}>
    <div className={styles.locationInfo}>
      <span
        className={styles.cityName}
        style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
      >
        {location.city}
      </span>
      <span
        className={styles.revenueValue}
        style={{ color: isDark ? '#FFFFFF' : '#1F2937' }}
      >
        {location.revenue}K
      </span>
    </div>
    <div className={styles.revenueBar}>
      <div
        className={styles.revenueBarFill}
        style={{
          width: `${(location.revenue / location.maxRevenue) * 100}%`,
          backgroundColor: isDark ? '#60A5FA' : '#3B82F6',
        }}
      ></div>
    </div>
  </div>
));

const RevenueByLocation = React.memo(() => {
  const { theme, isDark } = useTheme();

  const locationData = useMemo(
    () => [
      { city: 'New York', revenue: 72, maxRevenue: 72 },
      { city: 'San Francisco', revenue: 39, maxRevenue: 72 },
      { city: 'Sydney', revenue: 25, maxRevenue: 72 },
      { city: 'Singapore', revenue: 61, maxRevenue: 72 },
    ],
    []
  );

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
          Revenue by Location
        </h2>
      </div>

      <div className={styles.locationContent}>
        {/* World Map with optimized PNG image */}
        <div className={styles.mapContainer}>
          <div className={styles.worldMap}>
            <OptimizedWorldMap />
            <div
              className={styles.mapDot}
              style={{ top: '35%', left: '25%' }}
            ></div>
            <div
              className={styles.mapDot}
              style={{ top: '40%', left: '15%' }}
            ></div>
            <div
              className={styles.mapDot}
              style={{ top: '75%', left: '85%' }}
            ></div>
            <div
              className={styles.mapDot}
              style={{ top: '60%', left: '75%' }}
            ></div>
          </div>
        </div>

        {/* Location Data */}
        <div className={styles.locationList}>
          {useMemo(
            () =>
              locationData.map(location => (
                <LocationItem
                  key={location.city}
                  location={location}
                  isDark={isDark}
                />
              )),
            [locationData, isDark]
          )}
        </div>
      </div>
    </div>
  );
});

export default RevenueByLocation;
