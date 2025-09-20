import React, { useState } from 'react';
import { useTheme } from '../../theme';
import Icon from '../../ui/Icon';
import Sidebar from '../../ui/Sidebar';
import styles from './DashboardSidebar.module.css';

// Main navigation sidebar component
const DashboardSidebar = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [expandedSections, setExpandedSections] = useState({
    dashboards: true,
    pages: false,
  });

  const toggleSection = section => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Sidebar type="left" isOpen={isOpen} onClose={onClose}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>B</div>
        <span className={styles.logoText} style={{ color: theme.text }}>
          ByeWind
        </span>
      </div>

      {/* Favorites Section */}
      <div className={styles.section}>
        <h3
          className={styles.sectionTitle}
          style={{ color: theme.textSecondary }}
        >
          Favorites
        </h3>
        <div className={styles.navItem} style={{ color: theme.textSecondary }}>
          <div
            className={styles.dot}
            style={{ backgroundColor: theme.textSecondary }}
          ></div>
          <span>Overview</span>
        </div>
        <div className={styles.navItem} style={{ color: theme.textSecondary }}>
          <div
            className={styles.dot}
            style={{ backgroundColor: theme.textSecondary }}
          ></div>
          <span>Projects</span>
        </div>
      </div>

      {/* Recently Section */}
      <div className={styles.section}>
        <h3
          className={styles.sectionTitle}
          style={{ color: theme.textSecondary }}
        >
          Recently
        </h3>
        <div className={styles.navItem} style={{ color: theme.textSecondary }}>
          <div
            className={styles.dot}
            style={{ backgroundColor: theme.textSecondary }}
          ></div>
          <span>Overview</span>
        </div>
        <div className={styles.navItem} style={{ color: theme.textSecondary }}>
          <div
            className={styles.dot}
            style={{ backgroundColor: theme.textSecondary }}
          ></div>
          <span>Projects</span>
        </div>
        <div className={styles.navItem} style={{ color: theme.textSecondary }}>
          <div
            className={styles.dot}
            style={{ backgroundColor: theme.textSecondary }}
          ></div>
          <span>Campaigns</span>
        </div>
        <div className={styles.navItem} style={{ color: theme.textSecondary }}>
          <div
            className={styles.dot}
            style={{ backgroundColor: theme.textSecondary }}
          ></div>
          <span>Documents</span>
        </div>
      </div>

      {/* Dashboards Section */}
      <div className={styles.section}>
        <div
          className={styles.expandableNavItem}
          style={{ color: theme.textSecondary }}
          onClick={() => toggleSection('dashboards')}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && toggleSection('dashboards')}
        >
          <div className={styles.navItemContent}>
            <Icon name="home" size={20} className={styles.icon} />
            <span>Dashboards</span>
          </div>
          <Icon
            name="chevron-right"
            size={16}
            className={`${styles.chevronIcon} ${expandedSections.dashboards ? styles.chevronExpanded : ''}`}
          />
        </div>
        {expandedSections.dashboards && (
          <>
            <div
              className={styles.subNavItemActive}
              style={{ color: theme.text }}
            >
              Default
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              eCommerce
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Projects
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Online Courses
            </div>
          </>
        )}
      </div>

      {/* Pages Section */}
      <div className={styles.section}>
        <div
          className={styles.expandableNavItem}
          style={{ color: theme.textSecondary }}
          onClick={() => toggleSection('pages')}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && toggleSection('pages')}
        >
          <div className={styles.navItemContent}>
            <Icon name="file-text" size={20} className={styles.icon} />
            <span>Pages</span>
          </div>
          <Icon
            name="chevron-right"
            size={16}
            className={`${styles.chevronIcon} ${expandedSections.pages ? styles.chevronExpanded : ''}`}
          />
        </div>
        {expandedSections.pages && (
          <>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              User Profile
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Overview
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Projects
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Campaigns
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Documents
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Followers
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Account
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Corporate
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Blog
            </div>
            <div
              className={styles.subNavItem}
              style={{ color: theme.textSecondary }}
            >
              Social
            </div>
          </>
        )}
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
