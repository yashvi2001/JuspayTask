import React, { useState } from 'react';

import Icon from '../../ui/Icon';
import Sidebar from '../../ui/Sidebar';
import styles from './DashboardSidebar.module.css';
import logoImage from '../../assets/images/25fddc28ee996b0edb37a8f08e577c61dadbc58d.png';

// Main navigation sidebar component
const DashboardSidebar = ({ isOpen, onClose, currentPage, onPageChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    dashboards: true,
    pages: false,
    userProfile: true,
    account: false,
    corporate: false,
    blog: false,
    social: false,
    ecommerce: false,
    projects: false,
    onlineCourses: false,
  });

  const toggleSection = section => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleNavClick = page => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <Sidebar type="left" isOpen={isOpen} onClose={onClose}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <img
            src={logoImage}
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
            <span className={styles.itemText}>Overview</span>
          </div>
          <div className={styles.navItem}>
            <div className={styles.dot}></div>
            <span className={styles.itemText}>Projects</span>
          </div>
        </div>

        {/* Recently Section - Empty as per Figma */}
        <div className={styles.recentlySection}>
          <h3 className={styles.sectionTitle}>Recently</h3>
          {/* No items under Recently - exact replica */}
        </div>
      </div>

      {/* Main Navigation */}
      <div>
        {/* Dashboards Section */}
        <div className={styles.section}>
          <div className={styles.expandableNavItem}>
            <div className={styles.navItemContent}>
              <div className={styles.iconPlaceholder}></div>
              <span>Dashboards</span>
            </div>
          </div>
          <div className={styles.subNavItems}>
            <div
              className={`${styles.subNavItem} ${currentPage === 'dashboard' ? styles.subNavItemActive : ''}`}
              onClick={() => handleNavClick('dashboard')}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleNavClick('dashboard')}
            >
              <div
                style={{
                  width: '4px',
                  height: '20px',
                  backgroundColor: '#8b5cf6',
                  position: 'absolute',
                  left: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderRadius: '25px',
                }}
              ></div>
              <div className={styles.subNavItemContent}>
                <div className={styles.chevronPlaceholder}></div>
                <Icon
                  name="chart-pie"
                  size={16}
                  className={styles.subNavIcon}
                />
                <span>Default</span>
              </div>
            </div>

            <div
              className={styles.subNavExpandable}
              onClick={() => toggleSection('ecommerce')}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && toggleSection('ecommerce')}
            >
              <div className={styles.subNavItemContent}>
                <Icon
                  name="chevron-right"
                  size={14}
                  className={styles.subChevronIcon}
                />
                <Icon
                  name="ecommerce"
                  size={16}
                  className={styles.subNavIcon}
                />
                <span>eCommerce</span>
              </div>
            </div>

            <div
              className={styles.subNavExpandable}
              onClick={() => toggleSection('projects')}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && toggleSection('projects')}
            >
              <div className={styles.subNavItemContent}>
                <Icon
                  name="chevron-right"
                  size={14}
                  className={styles.subChevronIcon}
                />
                <Icon name="folder" size={16} className={styles.subNavIcon} />
                <span>Projects</span>
              </div>
            </div>

            <div
              className={styles.subNavExpandable}
              onClick={() => toggleSection('onlineCourses')}
              role="button"
              tabIndex={0}
              onKeyDown={e =>
                e.key === 'Enter' && toggleSection('onlineCourses')
              }
            >
              <div className={styles.subNavItemContent}>
                <Icon
                  name="chevron-right"
                  size={14}
                  className={styles.subChevronIcon}
                />
                <Icon
                  name="book-open"
                  size={16}
                  className={styles.subNavIcon}
                />
                <span>Online Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pages Section */}
      <div className={styles.section}>
        <div className={styles.expandableNavItem}>
          <div className={styles.navItemContent}>
            <div className={styles.iconPlaceholder}></div>
            <span>Pages</span>
          </div>
        </div>
        <div className={styles.subNavItems}>
          {/* User Profile expandable section */}
          <div
            className={styles.subNavExpandable}
            onClick={() => toggleSection('userProfile')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggleSection('userProfile')}
          >
            <div className={styles.subNavItemContent}>
              <Icon
                name={
                  expandedSections.userProfile
                    ? 'chevron-down'
                    : 'chevron-right'
                }
                size={14}
                className={styles.subChevronIcon}
              />
              <Icon name="profile" size={16} className={styles.subNavIcon} />
              <span>User Profile</span>
            </div>
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

          {/* Account expandable section */}
          <div
            className={styles.subNavExpandable}
            onClick={() => toggleSection('account')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggleSection('account')}
          >
            <div className={styles.subNavItemContent}>
              <Icon
                name="chevron-right"
                size={14}
                className={styles.subChevronIcon}
              />
              <Icon name="account" size={16} className={styles.subNavIcon} />
              <span>Account</span>
            </div>
          </div>

          {/* Corporate expandable section */}
          <div
            className={styles.subNavExpandable}
            onClick={() => toggleSection('corporate')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggleSection('corporate')}
          >
            <div className={styles.subNavItemContent}>
              <Icon
                name="chevron-right"
                size={14}
                className={styles.subChevronIcon}
              />
              <Icon name="user" size={16} className={styles.subNavIcon} />
              <span>Corporate</span>
            </div>
          </div>

          {/* Blog expandable section */}
          <div
            className={styles.subNavExpandable}
            onClick={() => toggleSection('blog')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggleSection('blog')}
          >
            <div className={styles.subNavItemContent}>
              <Icon
                name="chevron-right"
                size={14}
                className={styles.subChevronIcon}
              />
              <Icon name="blog" size={16} className={styles.subNavIcon} />
              <span>Blog</span>
            </div>
          </div>

          {/* Social expandable section */}
          <div
            className={styles.subNavExpandable}
            onClick={() => toggleSection('social')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggleSection('social')}
          >
            <div className={styles.subNavItemContent}>
              <Icon
                name="chevron-right"
                size={14}
                className={styles.subChevronIcon}
              />
              <Icon name="social" size={16} className={styles.subNavIcon} />
              <span>Social</span>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
