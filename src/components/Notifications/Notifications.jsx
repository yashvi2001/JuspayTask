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

const Notifications = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  return (
    <Sidebar type="right" isOpen={isOpen} onClose={onClose}>
      {/* Notifications Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle} style={{ color: theme.text }}>
          Notifications
        </h3>

        <div className={styles.notificationItem}>
          <div className={styles.notificationIcon}>
            <Icon name="bug" size={16} />
          </div>
          <div className={styles.notificationContent}>
            <p
              className={styles.notificationText}
              style={{ color: theme.text }}
            >
              You have a bug that needs to be fixed.
            </p>
            <p
              className={styles.notificationTime}
              style={{ color: theme.textSecondary }}
            >
              Just now
            </p>
          </div>
        </div>

        <div className={styles.notificationItem}>
          <div className={styles.notificationIcon}>
            <Icon name="user" size={16} />
          </div>
          <div className={styles.notificationContent}>
            <p
              className={styles.notificationText}
              style={{ color: theme.text }}
            >
              New user registered
            </p>
            <p
              className={styles.notificationTime}
              style={{ color: theme.textSecondary }}
            >
              59 minutes ago
            </p>
          </div>
        </div>

        <div className={styles.notificationItem}>
          <div className={styles.notificationIcon}>
            <Icon name="bug" size={16} />
          </div>
          <div className={styles.notificationContent}>
            <p
              className={styles.notificationText}
              style={{ color: theme.text }}
            >
              You have a bug that needs to be fixed.
            </p>
            <p
              className={styles.notificationTime}
              style={{ color: theme.textSecondary }}
            >
              12 hours ago
            </p>
          </div>
        </div>

        <div className={styles.notificationItem}>
          <div className={styles.notificationIcon}>
            <Icon name="broadcast" size={16} />
          </div>
          <div className={styles.notificationContent}>
            <p
              className={styles.notificationText}
              style={{ color: theme.text }}
            >
              Andi Lane subscribed to you
            </p>
            <p
              className={styles.notificationTime}
              style={{ color: theme.textSecondary }}
            >
              Today, 11:59 AM
            </p>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle} style={{ color: theme.text }}>
          Activities
        </h3>

        <div className={styles.activityContainer}>
          <div className={styles.activityTimeline}></div>

          <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
              <Avatar
                src={activityAvatar1}
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
                You have a bug that needs to be fixed.
              </p>
              <p
                className={styles.notificationTime}
                style={{ color: theme.textSecondary }}
              >
                Just now
              </p>
            </div>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
              <Avatar
                src={activityAvatar2}
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
                Released a new version
              </p>
              <p
                className={styles.notificationTime}
                style={{ color: theme.textSecondary }}
              >
                59 minutes ago
              </p>
            </div>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
              <Avatar
                src={activityAvatar3}
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
                Submitted a bug
              </p>
              <p
                className={styles.notificationTime}
                style={{ color: theme.textSecondary }}
              >
                12 hours ago
              </p>
            </div>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
              <Avatar
                src={activityAvatar4}
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
                Modified A data in Page X
              </p>
              <p
                className={styles.notificationTime}
                style={{ color: theme.textSecondary }}
              >
                Today, 11:59 AM
              </p>
            </div>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
              <Avatar
                src={activityAvatar5}
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
                Deleted a page in Project X
              </p>
              <p
                className={styles.notificationTime}
                style={{ color: theme.textSecondary }}
              >
                Feb 2, 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle} style={{ color: theme.text }}>
          Contacts
        </h3>

        <div className={styles.contactItem}>
          <Avatar
            src={nataliCraig}
            alt="Natali Craig"
            size={32}
            fallback="NC"
          />
          <span className={styles.contactName} style={{ color: theme.text }}>
            Natali Craig
          </span>
        </div>

        <div className={styles.contactItem}>
          <Avatar src={drewCano} alt="Drew Cano" size={32} fallback="DC" />
          <span className={styles.contactName} style={{ color: theme.text }}>
            Drew Cano
          </span>
        </div>

        <div className={styles.contactItem}>
          <Avatar
            src={orlandoDiggs}
            alt="Orlando Diggs"
            size={32}
            fallback="OD"
          />
          <span className={styles.contactName} style={{ color: theme.text }}>
            Orlando Diggs
          </span>
        </div>

        <div className={styles.contactItem}>
          <Avatar src={andiLane} alt="Andi Lane" size={32} fallback="AL" />
          <span className={styles.contactName} style={{ color: theme.text }}>
            Andi Lane
          </span>
        </div>

        <div className={styles.contactItem}>
          <Avatar
            src={kateMorrison}
            alt="Kate Morrison"
            size={32}
            fallback="KM"
          />
          <span className={styles.contactName} style={{ color: theme.text }}>
            Kate Morrison
          </span>
        </div>

        <div className={styles.contactItem}>
          <Avatar
            src={korayOkumus}
            alt="Koray Okumus"
            size={32}
            fallback="KO"
          />
          <span className={styles.contactName} style={{ color: theme.text }}>
            Koray Okumus
          </span>
        </div>
      </div>
    </Sidebar>
  );
};

export default Notifications;
