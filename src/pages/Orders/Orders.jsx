import React, { useState, useMemo, useCallback } from 'react';
import { useTheme } from '../../theme';
import Icon from '../../ui/Icon';
import styles from './Orders.module.css';
import ordersData from '../../data/orders.json';
import { getImageSrc } from '../../ui/Avatar/images';

const OrderRow = React.memo(
  ({ order, isSelected, onSelect, theme, isDark, onCopyAddress }) => (
    <tr
      className={`${styles.tableRow} ${isSelected ? styles.selectedRow : ''}`}
      style={{
        backgroundColor: 'transparent',
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <td className={styles.checkboxCell}>
        <button
          className={`${styles.checkbox} ${isSelected ? styles.checkboxSelected : ''}`}
          onClick={() => onSelect(order.id)}
          style={{
            borderColor: isSelected
              ? isDark
                ? '#c6c7f8'
                : '#1c1c1c'
              : theme.textSecondary,
            backgroundColor: isSelected
              ? isDark
                ? '#c6c7f8'
                : '#1c1c1c'
              : 'transparent',
            color: isSelected ? '#ffffff' : 'transparent',
          }}
        >
          {isSelected ? '✓' : ''}
        </button>
      </td>
      <td className={styles.cell} style={{ color: theme.text }}>
        #{order.id}
      </td>
      <td className={styles.cell}>
        <div className={styles.userCell}>
          <img
            src={getImageSrc(order.user.avatar)}
            alt={order.user.name}
            className={styles.avatar}
          />
          <span style={{ color: theme.text }}>{order.user.name}</span>
        </div>
      </td>
      <td className={styles.cell} style={{ color: theme.text }}>
        {order.project}
      </td>
      <td className={styles.cell}>
        <div className={styles.addressCell}>
          <span style={{ color: theme.text }}>{order.address}</span>
          {order.id === 'CM9805' && (
            <Icon
              onClick={() => onCopyAddress(order.address)}
              name="copy"
              size={14}
              style={{ color: theme.textSecondary }}
            />
          )}
        </div>
      </td>
      <td className={styles.cell}>
        <div className={styles.dateCell}>
          <Icon name="date" size={14} style={{ color: theme.textSecondary }} />
          <span style={{ color: theme.text }}>{order.date}</span>
        </div>
      </td>
      <td className={styles.cell}>
        <div className={styles.statusCell}>
          <div
            className={styles.statusDot}
            style={{ backgroundColor: order.status.color }}
          ></div>
          <span style={{ color: theme.text }}>{order.status.text}</span>
        </div>
      </td>
      <td className={styles.actionCell}>
        {order.status.text === 'Rejected' && (
          <button
            className={styles.moreButton}
            style={{ color: theme.textSecondary }}
          >
            ⋯
          </button>
        )}
      </td>
    </tr>
  )
);

const Orders = () => {
  const { theme, isDark } = useTheme();
  const [selectedRows, setSelectedRows] = useState(new Set(['CM9804']));

  // Get orders data from JSON file
  const orders = ordersData.orders;

  const handleRowSelect = useCallback(orderId => {
    setSelectedRows(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(orderId)) {
        newSelected.delete(orderId);
      } else {
        newSelected.add(orderId);
      }
      return newSelected;
    });
  }, []);

  const isRowSelected = useCallback(
    orderId => selectedRows.has(orderId),
    [selectedRows]
  );

  const handleCopyAddress = useCallback(async address => {
    try {
      await navigator.clipboard.writeText(address);
      // Optional: Add toast notification here
      console.log('Address copied to clipboard:', address);
    } catch (err) {
      console.error('Failed to copy address:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }, []);

  return (
    <div
      className={styles.ordersContainer}
      style={{ backgroundColor: theme.background }}
    >
      <div className={styles.header}>
        <h1 className={styles.title} style={{ color: theme.text }}>
          Order List
        </h1>

        <div className={styles.toolbar}>
          <div className={styles.leftActions}>
            <button
              className={styles.actionButton}
              style={{
                backgroundColor: theme.cardBackground,
                border: `1px solid ${theme.border}`,
                color: theme.text,
              }}
            >
              <Icon name="add" size={16} />
            </button>
            <button
              className={styles.actionButton}
              style={{
                backgroundColor: theme.cardBackground,
                border: `1px solid ${theme.border}`,
                color: theme.text,
              }}
            >
              <Icon name="filter" size={16} />
            </button>
            <button
              className={styles.actionButton}
              style={{
                backgroundColor: theme.cardBackground,
                border: `1px solid ${theme.border}`,
                color: theme.text,
              }}
            >
              <Icon name="sort" size={16} />
            </button>
          </div>

          <div className={styles.searchContainer}>
            <div
              className={styles.searchWrapper}
              style={{
                backgroundColor: theme.cardBackground,
                border: `1px solid ${theme.border}`,
              }}
            >
              <Icon
                name="search"
                size={16}
                style={{ color: theme.textSecondary }}
              />
              <input
                type="search"
                placeholder="Search"
                className={styles.searchInput}
                style={{ color: theme.text }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.tableContainer}
        style={{
          backgroundColor: isDark ? '#1c1c1c' : theme.cardBackground,
        }}
      >
        <table className={styles.table}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
              <th className={styles.checkboxColumn}></th>
              <th
                className={styles.columnHeader}
                style={{ color: theme.textSecondary }}
              >
                Order ID
              </th>
              <th
                className={styles.columnHeader}
                style={{ color: theme.textSecondary }}
              >
                User
              </th>
              <th
                className={styles.columnHeader}
                style={{ color: theme.textSecondary }}
              >
                Project
              </th>
              <th
                className={styles.columnHeader}
                style={{ color: theme.textSecondary }}
              >
                Address
              </th>
              <th
                className={styles.columnHeader}
                style={{ color: theme.textSecondary }}
              >
                Date
              </th>
              <th
                className={styles.columnHeader}
                style={{ color: theme.textSecondary }}
              >
                Status
              </th>
              <th className={styles.actionColumn}></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <OrderRow
                key={order.id}
                order={order}
                isSelected={isRowSelected(order.id)}
                onSelect={handleRowSelect}
                theme={theme}
                isDark={isDark}
                onCopyAddress={handleCopyAddress}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          style={{ color: theme.textSecondary }}
        >
          <Icon name="arrow-left" size={16} />
        </button>
        <div className={styles.pageNumbers}>
          {useMemo(
            () =>
              [1, 2, 3, 4, 5].map(page => (
                <button
                  key={page}
                  className={`${styles.pageButton} ${page === 1 ? styles.activePage : ''}`}
                  style={{
                    backgroundColor: page === 1 ? theme.text : 'transparent',
                    color: page === 1 ? theme.background : theme.text,
                  }}
                >
                  {page}
                </button>
              )),
            [theme]
          )}
        </div>
        <button
          className={styles.paginationButton}
          style={{ color: theme.textSecondary }}
        >
          <Icon name="arrow-right" size={16} />
        </button>
      </div>
    </div>
  );
};

export default Orders;
