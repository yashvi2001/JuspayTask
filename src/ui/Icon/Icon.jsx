import React, { memo } from 'react';

// Lazy load SVG imports for better performance
const iconComponents = {
  'trending-up': () => import('../../assets/svg/ArrowRise.svg?react'),
  'trending-down': () => import('../../assets/svg/ArrowFall.svg?react'),
  sun: () => import('../../assets/svg/Sun.svg?react'),
  bell: () => import('../../assets/svg/Notifications.svg?react'),
  home: () => import('../../assets/svg/ChartPie.svg?react'),
  'file-text': () => import('../../assets/svg/BookOpen.svg?react'),
  menu: () => import('../../assets/svg/Sidebar.svg?react'),
  search: () => import('../../assets/svg/Filter.svg?react'),
  user: () => import('../../assets/svg/User.svg?react'),
  clock: () => import('../../assets/svg/Clockwise.svg?react'),
  'chevron-right': () => import('../../assets/svg/ArrowRise.svg?react'),
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
    const [IconComponent, setIconComponent] = React.useState(null);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      const loadIcon = async () => {
        try {
          if (iconComponents[name]) {
            const module = await iconComponents[name]();
            setIconComponent(() => module.default || module);
          } else {
            setError(true);
          }
        } catch (err) {
          console.warn(`Failed to load icon: ${name}`, err);
          setError(true);
        }
      };

      loadIcon();
    }, [name]);

    if (error || !IconComponent) {
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
