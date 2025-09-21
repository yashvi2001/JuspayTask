import React, { useState } from 'react';

import Icon from '../../ui/Icon';
import Sidebar from '../../ui/Sidebar';
import styles from './DashboardSidebar.module.css';

// Main navigation sidebar component matching Figma design exactly
const DashboardSidebar = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    dashboards: true,
    pages: false,
    userProfile: false,
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
        <div className={styles.logoIcon}>
          <img
            src="/src/assets/images/25fddc28ee996b0edb37a8f08e577c61dadbc58d.png"
            alt="ByeWind Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '50%',
            }}
          />
        </div>
        <span className={styles.logoText}>ByeWind</span>
      </div>

      {/* Favorites and Recently sections - Side by side */}
      <div className={styles.topSections}>
        {/* Favorites Section */}
        <div className={styles.favoritesSection}>
          <h3 className={styles.sectionTitle}>Favorites</h3>
          <div className={styles.navItem}>
            <div className={styles.dot}></div>
            <span>Overview</span>
          </div>
          <div className={styles.navItem}>
            <div className={styles.dot}></div>
            <span>Projects</span>
          </div>
        </div>

        {/* Recently Section - Empty as per Figma */}
        <div className={styles.recentlySection}>
          <h3 className={styles.sectionTitle}>Recently</h3>
          {/* No items under Recently - exact replica */}
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNavigation}>
        {/* Dashboards Section */}
        <div className={styles.section}>
          <div
            className={styles.expandableNavItem}
            onClick={() => toggleSection('dashboards')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggleSection('dashboards')}
          >
            <div className={styles.navItemContent}>
              <Icon name="chart-pie" size={18} className={styles.icon} />
              <span>Dashboards</span>
            </div>
            <Icon
              name={
                expandedSections.dashboards ? 'chevron-down' : 'chevron-right'
              }
              size={16}
              className={styles.chevronIcon}
            />
          </div>
          {expandedSections.dashboards && (
            <div className={styles.subNavItems}>
              <div className={styles.subNavItemActive}>
                <Icon
                  name="chart-pie"
                  size={16}
                  className={styles.subNavIcon}
                />
                Default
              </div>
              <div className={styles.subNavItem}>
                <Icon
                  name="ecommerce"
                  size={16}
                  className={styles.subNavIcon}
                />
                eCommerce
              </div>
              <div className={styles.subNavItem}>
                <Icon name="folder" size={16} className={styles.subNavIcon} />
                Projects
              </div>
              <div className={styles.subNavItem}>
                <Icon
                  name="book-open"
                  size={16}
                  className={styles.subNavIcon}
                />
                Online Courses
              </div>
            </div>
          )}
        </div>

        {/* Pages Section */}
        <div className={styles.section}>
          <div
            className={styles.expandableNavItem}
            onClick={() => toggleSection('pages')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggleSection('pages')}
          >
            <div className={styles.navItemContent}>
              <Icon name="book-open" size={18} className={styles.icon} />
              <span>Pages</span>
            </div>
            <Icon
              name={expandedSections.pages ? 'chevron-down' : 'chevron-right'}
              size={16}
              className={styles.chevronIcon}
            />
          </div>
          {expandedSections.pages && (
            <div className={styles.subNavItems}>
              {/* User Profile expandable section */}
              <div
                className={styles.subNavExpandable}
                onClick={() => toggleSection('userProfile')}
                role="button"
                tabIndex={0}
                onKeyDown={e =>
                  e.key === 'Enter' && toggleSection('userProfile')
                }
              >
                <div className={styles.subNavItemContent}>
                  <Icon
                    name="profile"
                    size={16}
                    className={styles.subNavIcon}
                  />
                  <span>User Profile</span>
                </div>
                <Icon
                  name={
                    expandedSections.userProfile
                      ? 'chevron-down'
                      : 'chevron-right'
                  }
                  size={14}
                  className={styles.subChevronIcon}
                />
              </div>

              {expandedSections.userProfile && (
                <div className={styles.subSubNavItems}>
                  <div className={styles.subSubNavItem}>Overview</div>
                  <div className={styles.subSubNavItem}>Projects</div>
                  <div className={styles.subSubNavItem}>Campaigns</div>
                  <div className={styles.subSubNavItem}>Documents</div>
                  <div className={styles.subSubNavItem}>Followers</div>
                </div>
              )}

              <div className={styles.subNavItem}>
                <Icon name="account" size={16} className={styles.subNavIcon} />
                Account
              </div>
              <div className={styles.subNavItem}>
                <Icon name="user" size={16} className={styles.subNavIcon} />
                Corporate
              </div>
              <div className={styles.subNavItem}>
                <Icon name="blog" size={16} className={styles.subNavIcon} />
                Blog
              </div>
              <div className={styles.subNavItem}>
                <Icon name="social" size={16} className={styles.subNavIcon} />
                Social
              </div>
            </div>
          )}
        </div>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
