import React, { memo } from 'react';

// Import SVGs as React components
import ArrowRise from '../../assets/svg/ArrowRise.svg?react';
import ArrowFall from '../../assets/svg/ArrowFall.svg?react';
import Sun from '../../assets/svg/Sun.svg?react';
import Notifications from '../../assets/svg/Notifications.svg?react';
import ChartPie from '../../assets/svg/ChartPie.svg?react';
import BookOpen from '../../assets/svg/BookOpen.svg?react';
import Sidebar from '../../assets/svg/Sidebar.svg?react';
import Filter from '../../assets/svg/Filter.svg?react';
import User from '../../assets/svg/User.svg?react';
import Clockwise from '../../assets/svg/Clockwise.svg?react';
import Search from '../../assets/svg/Search.svg?react';
import Bug from '../../assets/svg/Bug.svg?react';
import Broadcast from '../../assets/svg/Broadcast.svg?react';
import Ecommerce from '../../assets/svg/ecommerce.svg?react';
import Folder from '../../assets/svg/Folder.svg?react';
import Profile from '../../assets/svg/Profile.svg?react';
import Account from '../../assets/svg/Account.svg?react';
import Blog from '../../assets/svg/Blog.svg?react';
import Social from '../../assets/svg/Social.svg?react';
import Star from '../../assets/svg/Star.svg?react';
import Copy from '../../assets/svg/Copy.svg?react';
// Import theme-based world map images
import WorldMapLight from '../../assets/images/worldmap-light.png';
import WorldMapDark from '../../assets/images/worldmap-dark.png';

// Theme-aware WorldMap component using theme-based images
const WorldMap = ({
  width = 16,
  height = 16,
  className = '',
  isDark = false,
  ...props
}) => (
  <img
    src={isDark ? WorldMapDark : WorldMapLight}
    alt="World Map"
    width={width}
    height={height}
    className={className}
    style={{ flexShrink: 0, objectFit: 'contain' }}
    {...props}
  />
);

// Custom chevron down component - visible in dark mode
const ChevronDown = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z"
      fill="currentColor"
      fillOpacity="0.6"
    />
  </svg>
);

// Custom chevron right component - visible in dark mode
const ChevronRight = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.65968 3.64645C5.44678 3.84171 5.44678 4.15829 5.65968 4.35355L9.25 7.64645C9.4629 7.84171 9.4629 8.15829 9.25 8.35355L5.65968 11.6464C5.44678 11.8417 5.44678 12.1583 5.65968 12.3536C5.87257 12.5488 6.21775 12.5488 6.43065 12.3536L10.021 9.06066C10.6597 8.47487 10.6597 7.52513 10.021 6.93934L6.43065 3.64645C6.21775 3.45118 5.87257 3.45118 5.65968 3.64645Z"
      fill="currentColor"
      fillOpacity="0.6"
    />
  </svg>
);

// Custom Add icon
const Add = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// Custom Sort icon
const Sort = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.19194 13.3081C4.07473 13.1908 3.91576 13.125 3.75 13.125C3.58424 13.125 3.42527 13.1908 3.30806 13.3081C3.19085 13.4253 3.125 13.5842 3.125 13.75C3.125 13.9158 3.19085 14.0747 3.30806 14.1919L5.80806 16.6919C5.92527 16.8092 6.08424 16.875 6.25 16.875C6.41576 16.875 6.57473 16.8092 6.69194 16.6919L9.19171 14.1922C9.30892 14.075 9.375 13.9158 9.375 13.75C9.375 13.5842 9.30915 13.4253 9.19194 13.3081C9.07473 13.1908 8.91576 13.125 8.75 13.125C8.58424 13.125 8.42527 13.1908 8.30806 13.3081L6.25 15.3661L4.19194 13.3081Z"
      fill="currentColor"
    />
    <path
      d="M5.625 3.75V16.25C5.625 16.5952 5.90482 16.875 6.25 16.875C6.59518 16.875 6.875 16.5952 6.875 16.25V3.75C6.875 3.40482 6.59518 3.125 6.25 3.125C5.90482 3.125 5.625 3.40482 5.625 3.75Z"
      fill="currentColor"
    />
    <path
      d="M15.8077 6.69162C15.9249 6.80883 16.0842 6.875 16.25 6.875C16.4158 6.875 16.5747 6.80915 16.6919 6.69194C16.8092 6.57473 16.875 6.41576 16.875 6.25C16.875 6.08424 16.8092 5.92527 16.6919 5.80806L14.1919 3.30806C14.0747 3.19085 13.9158 3.125 13.75 3.125C13.5842 3.125 13.4253 3.19085 13.3081 3.30806L10.8081 5.80806C10.6908 5.92527 10.625 6.08424 10.625 6.25C10.625 6.26001 10.6252 6.27002 10.6257 6.28002C10.6332 6.43522 10.6982 6.58207 10.8081 6.69194C10.9253 6.80915 11.0842 6.875 11.25 6.875C11.4158 6.875 11.5747 6.80915 11.6919 6.69194L13.75 4.63388L15.8077 6.69162Z"
      fill="currentColor"
    />
    <path
      d="M14.375 16.25V3.75C14.375 3.40482 14.0952 3.125 13.75 3.125C13.4048 3.125 13.125 3.40482 13.125 3.75V16.25C13.125 16.5952 13.4048 16.875 13.75 16.875C14.0952 16.875 14.375 16.5952 14.375 16.25Z"
      fill="currentColor"
    />
  </svg>
);

// Custom Document icon
const Document = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

// Custom Date icon
const Date = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Custom Arrow Left icon
const ArrowLeft = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12,19 5,12 12,5" />
  </svg>
);

// Custom Arrow Right icon
const ArrowRight = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);

// Custom Arrow Up icon for sorting
const ArrowUp = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5,12 12,5 19,12" />
  </svg>
);

// Custom Arrow Down icon for sorting
const ArrowDown = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="5,12 12,19 19,12" />
  </svg>
);

// Icon mapping with optimized WorldMap
const iconComponents = {
  'trending-up': ArrowRise,
  'trending-down': ArrowFall,
  sun: Sun,
  bell: Notifications,
  'chart-pie': ChartPie,
  'book-open': BookOpen,
  menu: Sidebar,
  search: Search,
  filter: Filter,
  user: User,
  clock: Clockwise,
  'chevron-right': ChevronRight,
  'chevron-down': ChevronDown,
  bug: Bug,
  broadcast: Broadcast,
  ecommerce: Ecommerce,
  folder: Folder,
  profile: Profile,
  account: Account,
  blog: Blog,
  social: Social,
  star: Star,
  copy: Copy,
  worldMap: WorldMap, // Now uses optimized PNG image
  add: Add,
  sort: Sort,
  document: Document,
  date: Date,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
};

const Icon = memo(
  ({
    name,
    size = 16,
    color,
    className = '',
    'aria-hidden': ariaHidden = true,
    isDark = false,
    ...props
  }) => {
    const IconComponent = iconComponents[name];

    if (!IconComponent) {
      // Fallback to a simple SVG for missing icons
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={{ color, flexShrink: 0 }}
          aria-hidden={ariaHidden}
          {...props}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    }

    // Special handling for WorldMap to pass isDark prop
    if (name === 'worldMap') {
      return (
        <IconComponent
          width={size}
          height={size}
          className={className}
          style={{ color, flexShrink: 0 }}
          aria-hidden={ariaHidden}
          isDark={isDark}
          {...props}
        />
      );
    }

    return (
      <IconComponent
        width={size}
        height={size}
        className={className}
        style={{ color, flexShrink: 0 }}
        aria-hidden={ariaHidden}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
