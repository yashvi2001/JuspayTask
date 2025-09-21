import React from 'react';
import { useTheme } from '../../theme';
import Icon from '../../ui/Icon';
import Avatar from '../../ui/Avatar';
import Sidebar from '../../ui/Sidebar';
import {
  nataliCraig,
  drewCano,
  orlandoDiggs,
  andiLane,
  kateMorrison,
  korayOkumus,
  activityAvatar1,
  activityAvatar2,
  activityAvatar3,
  activityAvatar4,
  activityAvatar5,
} from '../../ui/Avatar/images';
import styles from './Notifications.module.css';
import dashboardData from '../../data/dashboard.json';

const Notifications = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  // Avatar mapping for activities and contacts
  const avatarMap = {
    nataliCraig,
    drewCano,
    orlandoDiggs,
    andiLane,
    kateMorrison,
    korayOkumus,
    activityAvatar1,
    activityAvatar2,
    activityAvatar3,
    activityAvatar4,
    activityAvatar5,
  };

  // Get data from JSON
  const notifications = dashboardData.notifications;
  const activities = dashboardData.activities;
  const contacts = dashboardData.contacts;

  return (
    <Sidebar type="right" isOpen={isOpen} onClose={onClose}>
      {/* Notifications Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle} style={{ color: theme.text }}>
          Notifications
        </h3>

        {notifications.map(notification => (
          <div key={notification.id} className={styles.notificationItem}>
            <div className={styles.notificationIcon}>
              <Icon name={notification.icon} size={16} />
            </div>
            <div className={styles.notificationContent}>
              <p
                className={styles.notificationText}
                style={{ color: theme.text }}
              >
                {notification.text}
              </p>
              <p
                className={styles.notificationTime}
                style={{ color: theme.textSecondary }}
              >
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Activities Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle} style={{ color: theme.text }}>
          Activities
        </h3>

        <div className={styles.activityContainer}>
          {activities.map((activity, index) => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={styles.activityAvatar}>
                <Avatar
                  src={avatarMap[activity.avatar]}
                  alt="User avatar"
                  size={32}
                  fallback="U"
                />
              </div>
              <div className={styles.notificationContent}>
                <p
                  className={styles.notificationText}
                  style={{ color: theme.text }}
                >
                  {activity.text}
                </p>
                <p
                  className={styles.notificationTime}
                  style={{ color: theme.textSecondary }}
                >
                  {activity.time}
                </p>
              </div>
              {/* Individual timeline segment */}
              {index < activities.length - 1 && (
                <div className={styles.timelineSegment}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div className={`${styles.section} ${styles.contactsSection}`}>
        <h3 className={styles.sectionTitle} style={{ color: theme.text }}>
          Contacts
        </h3>

        {contacts.map((contact, index) => (
          <div key={index} className={styles.contactItem}>
            <Avatar
              src={avatarMap[contact.avatar]}
              alt={contact.name}
              size={32}
              fallback={contact.fallback}
            />
            <span className={styles.contactName} style={{ color: theme.text }}>
              {contact.name}
            </span>
          </div>
        ))}
      </div>
    </Sidebar>
  );
};

export default Notifications;
