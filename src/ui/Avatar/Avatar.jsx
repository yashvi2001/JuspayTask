import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({
  src,
  alt,
  size = 32,
  fallback,
  className = '',
  ...props
}) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError || !src) {
    return (
      <div
        className={`${styles.avatar} ${styles.fallback} ${className}`}
        style={{ width: size, height: size }}
        {...props}
      >
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.avatar} ${className}`}
      style={{ width: size, height: size }}
      onError={handleImageError}
      {...props}
    />
  );
};

export default Avatar;
