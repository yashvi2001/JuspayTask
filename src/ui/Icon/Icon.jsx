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

// Icon mapping
const iconComponents = {
  'trending-up': ArrowRise,
  'trending-down': ArrowFall,
  sun: Sun,
  bell: Notifications,
  home: ChartPie,
  'file-text': BookOpen,
  notebook: BookOpen,
  menu: Sidebar,
  search: Search,
  filter: Filter,
  user: User,
  clock: Clockwise,
  'chevron-right': ArrowRise,
};

const Icon = memo(
  ({
    name,
    size = 16,
    color,
    className = '',
    'aria-hidden': ariaHidden = true,
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
