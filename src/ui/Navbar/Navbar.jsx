import React from 'react';
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
  showSearch = true,
  showThemeToggle = true,
  showNotifications = true,
  children,
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: theme.cardBackground,
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
        >
          <Icon name="menu" size={20} />
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
                    style={{
                      color:
                        index === breadcrumbs.length - 1
                          ? theme.text
                          : theme.textSecondary,
                    }}
                  >
                    {crumb}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
        )}

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
                type="search"
                placeholder="Search..."
                className={styles.searchInput}
                style={{
                  backgroundColor: theme.background,
                  border: `1px solid ${theme.border}`,
                  color: theme.text,
                }}
                aria-label="Search"
              />
            </div>
          </div>
        )}

        {/* Custom left content */}
        {children?.left}
      </div>

      <div className={styles.rightSection}>
        {/* Theme toggle */}
        {showThemeToggle && (
          <button
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            type="button"
          >
            <Icon name="sun" size={18} />
          </button>
        )}

        {/* Activity button */}
        <button
          className={styles.iconButton}
          aria-label="View recent activity"
          type="button"
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
          >
            <Icon name="bell" size={18} />
          </button>
        )}

        {/* Custom right content */}
        {children?.right}
      </div>
    </header>
  );
};

export default Navbar;
