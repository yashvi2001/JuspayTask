import React, { useMemo } from 'react';
import { useTheme } from '../../theme';
import styles from './RevenueSection.module.css';
// Import theme-based world map images
import WorldMapLight from '../../assets/images/worldmap-light.png';
import WorldMapDark from '../../assets/images/worldmap-dark.png';
import dashboardData from '../../data/dashboard.json';

// Theme-aware WorldMap component
const OptimizedWorldMap = React.memo(({ isDark }) => (
  <img
    src={isDark ? WorldMapDark : WorldMapLight}
    alt="World Map"
    className={styles.worldMapImage}
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
));

const LocationItem = React.memo(({ location, isDark }) => (
  <div className={styles.locationItem}>
    <div className={styles.locationInfo}>
      <span
        className={styles.cityName}
        style={{ color: isDark ? '#FFFFFF' : '#1C1C1C' }}
      >
        {location.city}
      </span>
      <span
        className={styles.revenueValue}
        style={{ color: isDark ? '#FFFFFF' : '#1C1C1C' }}
      >
        {location.revenue}K
      </span>
    </div>
    <div className={styles.revenueBar}>
      <div
        className={styles.revenueBarFill}
        style={{
          width: `${(location.revenue / location.maxRevenue) * 100}%`,
          backgroundColor: isDark ? '#A8C5DA' : '#A8C5DA',
        }}
      ></div>
    </div>
  </div>
));

const RevenueByLocation = React.memo(() => {
  const { theme, isDark } = useTheme();

  // Get location data from JSON file
  const locationData = useMemo(() => dashboardData.revenueByLocation, []);

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
          style={{ color: isDark ? '#FFFFFF' : '#1C1C1C' }}
        >
          Revenue by Location
        </h2>
      </div>

      <div className={styles.locationContent}>
        {/* World Map with theme-based images */}
        <div className={styles.mapContainer}>
          <div className={styles.worldMap}>
            <OptimizedWorldMap isDark={isDark} />
            {/* Location dots positioned from JSON data */}
            {locationData.map((location, index) => (
              <div
                key={index}
                className={styles.mapDot}
                style={{
                  top: location.mapPosition.top,
                  left: location.mapPosition.left,
                  backgroundColor: isDark ? '#FFFFFF' : '#1C1C1C',
                }}
              ></div>
            ))}
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
