import React, { useState } from 'react';
import { useTheme } from '../../theme';
import Icon from '../../ui/Icon';
import styles from './Orders.module.css';

const Orders = () => {
  const { theme } = useTheme();
  const [selectedRows, setSelectedRows] = useState(new Set(['CM9804']));

  // Sample data for the order list
  const orders = [
    {
      id: 'CM9801',
      user: {
        name: 'Natali Craig',
        avatar:
          '/src/assets/images/25fddc28ee996b0edb37a8f08e577c61dadbc58d.png',
      },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: { text: 'In Progress', color: '#3b82f6' },
    },
    {
      id: 'CM9802',
      user: {
        name: 'Kate Morrison',
        avatar:
          '/src/assets/images/401670ae04e9f56b8607ab9a75364d523fa15c7f.png',
      },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: { text: 'Complete', color: '#10b981' },
    },
    {
      id: 'CM9803',
      user: {
        name: 'Drew Cano',
        avatar:
          '/src/assets/images/561807e24f384b89a83502e0c6fc6cbc98817827.png',
      },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: { text: 'Pending', color: '#06b6d4' },
    },
    {
      id: 'CM9804',
      user: {
        name: 'Orlando Diggs',
        avatar:
          '/src/assets/images/634a36c96c03cfe9eeba44f0d83003daffa63d9c.png',
      },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: { text: 'Approved', color: '#f59e0b' },
    },
    {
      id: 'CM9805',
      user: {
        name: 'Andi Lane',
        avatar:
          '/src/assets/images/6389ca3c52596b27ea5732f2c15e17045ba5d34a.png',
      },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: { text: 'Rejected', color: '#6b7280' },
    },
    // Duplicate rows for pagination effect
    {
      id: 'CM9806',
      user: {
        name: 'Natali Craig',
        avatar:
          '/src/assets/images/25fddc28ee996b0edb37a8f08e577c61dadbc58d.png',
      },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: { text: 'In Progress', color: '#3b82f6' },
    },
    {
      id: 'CM9807',
      user: {
        name: 'Kate Morrison',
        avatar:
          '/src/assets/images/401670ae04e9f56b8607ab9a75364d523fa15c7f.png',
      },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: { text: 'Complete', color: '#10b981' },
    },
    {
      id: 'CM9808',
      user: {
        name: 'Drew Cano',
        avatar:
          '/src/assets/images/561807e24f384b89a83502e0c6fc6cbc98817827.png',
      },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: { text: 'Pending', color: '#06b6d4' },
    },
    {
      id: 'CM9809',
      user: {
        name: 'Orlando Diggs',
        avatar:
          '/src/assets/images/634a36c96c03cfe9eeba44f0d83003daffa63d9c.png',
      },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: { text: 'Approved', color: '#f59e0b' },
    },
    {
      id: 'CM9810',
      user: {
        name: 'Andi Lane',
        avatar:
          '/src/assets/images/6389ca3c52596b27ea5732f2c15e17045ba5d34a.png',
      },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: { text: 'Rejected', color: '#6b7280' },
    },
  ];

  const handleRowSelect = orderId => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(orderId)) {
      newSelected.delete(orderId);
    } else {
      newSelected.add(orderId);
    }
    setSelectedRows(newSelected);
  };

  const isRowSelected = orderId => selectedRows.has(orderId);

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
              }}
            >
              <Icon name="add" size={16} />
            </button>
            <button
              className={styles.actionButton}
              style={{
                backgroundColor: theme.cardBackground,
                border: `1px solid ${theme.border}`,
              }}
            >
              <Icon name="filter" size={16} />
            </button>
            <button
              className={styles.actionButton}
              style={{
                backgroundColor: theme.cardBackground,
                border: `1px solid ${theme.border}`,
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
          backgroundColor: theme.cardBackground,
          border: `1px solid ${theme.border}`,
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
              <tr
                key={order.id}
                className={`${styles.tableRow} ${isRowSelected(order.id) ? styles.selectedRow : ''}`}
                style={{
                  backgroundColor: isRowSelected(order.id)
                    ? 'rgba(59, 130, 246, 0.1)'
                    : 'transparent',
                  borderBottom: `1px solid ${theme.border}`,
                }}
              >
                <td className={styles.checkboxCell}>
                  <button
                    className={styles.checkbox}
                    onClick={() => handleRowSelect(order.id)}
                    style={{ color: theme.text }}
                  >
                    {isRowSelected(order.id) ? '✓' : ''}
                  </button>
                </td>
                <td className={styles.cell} style={{ color: theme.text }}>
                  #{order.id}
                </td>
                <td className={styles.cell}>
                  <div className={styles.userCell}>
                    <img
                      src={order.user.avatar}
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
                        name="document"
                        size={14}
                        style={{ color: theme.textSecondary }}
                      />
                    )}
                  </div>
                </td>
                <td className={styles.cell}>
                  <div className={styles.dateCell}>
                    <Icon
                      name="date"
                      size={14}
                      style={{ color: theme.textSecondary }}
                    />
                    <span style={{ color: theme.text }}>{order.date}</span>
                  </div>
                </td>
                <td className={styles.cell}>
                  <div className={styles.statusCell}>
                    <div
                      className={styles.statusDot}
                      style={{ backgroundColor: order.status.color }}
                    ></div>
                    <span style={{ color: theme.text }}>
                      {order.status.text}
                    </span>
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
          {[1, 2, 3, 4, 5].map(page => (
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
          ))}
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
