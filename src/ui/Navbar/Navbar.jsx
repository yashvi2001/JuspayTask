import React, { useRef, useEffect } from 'react';
import { useTheme } from '../../theme';
import Icon from '../Icon';
import styles from './Navbar.module.css';

// Navigation bar component

const Navbar = ({
  onMenuClick,
  onNotificationClick,
  leftSidebarOpen,
  rightSidebarOpen,
  breadcrumbs = [],
  onBreadcrumbClick,
  showSearch = true,
  showThemeToggle = true,
  showNotifications = true,
  children,
}) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const searchInputRef = useRef(null);

  const handleBreadcrumbClick = index => {
    if (onBreadcrumbClick) {
      if (index === 0) {
        // Clicked on "Dashboards" - go to dashboard
        onBreadcrumbClick('dashboard');
      } else if (index === 1 && breadcrumbs[1] === 'Orders') {
        // Clicked on "Orders" - go to orders
        onBreadcrumbClick('orders');
      } else if (index === 1 && breadcrumbs[1] === 'Default') {
        // Clicked on "Default" - go to dashboard
        onBreadcrumbClick('dashboard');
      }
    }
  };

  const handleClockClick = () => {
    if (onBreadcrumbClick) {
      onBreadcrumbClick('orders');
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if ((event.metaKey || event.ctrlKey) && event.key === '/') {
        event.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: theme.navbarBackground,
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <div className={styles.leftSection}>
        {/* Left sidebar toggle */}
        <button
          className={styles.iconButton}
          onClick={onMenuClick}
          aria-label={
            leftSidebarOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          type="button"
          style={{ color: theme.text }}
        >
          <Icon name="menu" size={16} />
        </button>

        {/* Star and Breadcrumb container */}
        <div className={styles.breadcrumbContainer}>
          {/* Star/Bookmark icon */}
          <button
            className={styles.starButton}
            aria-label="Add to favorites"
            title="Add to favorites"
            type="button"
            style={{ color: theme.text }}
          >
            <Icon name="star" size={16} />
          </button>

          {/* Breadcrumb navigation */}
          {breadcrumbs.length > 0 && (
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <ol className={styles.breadcrumbList}>
                {breadcrumbs.map((crumb, index) => (
                  <li
                    key={index}
                    aria-current={
                      index === breadcrumbs.length - 1 ? 'page' : undefined
                    }
                  >
                    <span
                      className={styles.breadcrumbItem}
                      style={{
                        color:
                          index === breadcrumbs.length - 1
                            ? theme.text
                            : theme.textSecondary,
                        cursor:
                          index === breadcrumbs.length - 1
                            ? 'default'
                            : 'pointer',
                      }}
                      onClick={() => handleBreadcrumbClick(index)}
                    >
                      {crumb}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>

        {/* Custom left content */}
        {children?.left}
      </div>

      <div className={styles.rightSection}>
        {/* Search */}
        {showSearch && (
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <Icon
                name="search"
                size={16}
                className={styles.searchIcon}
                style={{ color: theme.textSecondary }}
              />
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search"
                className={styles.searchInput}
                style={{
                  backgroundColor: theme.cardBackground,
                  border: `1px solid ${theme.border}`,
                  color: theme.text,
                }}
                aria-label="Search"
              />
              <span
                className={styles.searchShortcut}
                style={{ color: theme.textSecondary }}
              >
                ⌘/
              </span>
            </div>
          </div>
        )}

        {/* Theme toggle */}
        {showThemeToggle && (
          <button
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            type="button"
            style={{ color: theme.text }}
          >
            <Icon name="sun" size={18} />
          </button>
        )}

        {/* Activity button - Clock icon for Orders navigation */}
        <button
          className={styles.iconButton}
          onClick={handleClockClick}
          aria-label="View Orders"
          title="View Orders"
          type="button"
          style={{ color: theme.text }}
        >
          <Icon name="clock" size={18} />
        </button>

        {/* Right sidebar toggle */}
        {showNotifications && (
          <button
            className={styles.iconButton}
            onClick={onNotificationClick}
            aria-label={
              rightSidebarOpen ? 'Close notifications' : 'Open notifications'
            }
            type="button"
            style={{ color: theme.text }}
          >
            <Icon name="bell" size={18} />
          </button>
        )}

        {/* Notebook icon */}
        <button
          className={styles.iconButton}
          onClick={onNotificationClick}
          aria-label={
            rightSidebarOpen ? 'Close notifications' : 'Open notifications'
          }
          type="button"
          style={{ color: theme.text }}
        >
          <Icon name="menu" size={18} />
        </button>

        {/* Custom right content */}
        {children?.right}
      </div>
    </header>
  );
};

export default Navbar;
