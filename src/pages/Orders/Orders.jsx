import React, { useState, useCallback } from 'react';
import { useTheme } from '../../theme';
import Icon from '../../ui/Icon';
import styles from './Orders.module.css';
import ordersData from '../../data/orders.json';
import { getImageSrc } from '../../ui/Avatar/images';
import { useTableOperations } from '../../hooks';

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
  const [showFilters, setShowFilters] = useState(false);

  // Get orders data from JSON file
  const orders = ordersData.orders;

  // Use table operations hook
  const tableOps = useTableOperations({
    data: orders,
    searchFields: ['id', 'user.name', 'project', 'address', 'status.text'],
    filterField: 'status.text',
    itemsPerPage: 5,
    initialSort: { key: null, direction: 'asc' },
    initialFilter: 'all',
    initialSearch: '',
  });

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
    }
  }, []);

  // Handle filter dropdown
  const handleStatusFilter = useCallback(
    status => {
      tableOps.filter.handle(status);
      setShowFilters(false);
    },
    [tableOps.filter]
  );

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
            <div className={styles.filterContainer}>
              <button
                className={styles.actionButton}
                onClick={() => setShowFilters(!showFilters)}
                style={{
                  backgroundColor: theme.cardBackground,
                  border: `1px solid ${theme.border}`,
                  color: theme.text,
                }}
              >
                <Icon name="filter" size={16} />
              </button>
              {showFilters && (
                <div
                  className={styles.filterDropdown}
                  style={{
                    backgroundColor: isDark ? '#2a2a2a' : '#ffffff',
                    border: `1px solid ${theme.border}`,
                    boxShadow: isDark
                      ? '0 4px 12px rgba(0,0,0,0.5)'
                      : '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  {tableOps.filter.available.map(status => (
                    <button
                      key={status}
                      className={styles.filterOption}
                      onClick={() => handleStatusFilter(status)}
                      style={{
                        color: theme.text,
                        backgroundColor:
                          tableOps.filter.active === status
                            ? theme.border
                            : 'transparent',
                      }}
                    >
                      {status === 'all' ? 'All Status' : status}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className={styles.actionButton}
              onClick={() => setShowFilters(false)}
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
                placeholder="Search orders..."
                className={styles.searchInput}
                value={tableOps.search.term}
                onChange={tableOps.search.handle}
                style={{ color: theme.text }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.tableContainer}
        style={{
          backgroundColor: isDark ? '#1c1c1c' : theme.tableBackground,
        }}
      >
        <table className={styles.table}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
              <th className={styles.checkboxColumn}></th>
              <th
                className={`${styles.columnHeader} ${styles.sortableHeader}`}
                onClick={() => tableOps.sort.handle('id')}
                style={{ color: theme.textSecondary, cursor: 'pointer' }}
              >
                <span className={styles.headerContent}>
                  ORDER ID
                  {tableOps.sort.isSortedBy('id') && (
                    <Icon
                      name={tableOps.sort.getIcon('id')}
                      size={12}
                      style={{ marginLeft: '4px' }}
                    />
                  )}
                </span>
              </th>
              <th
                className={`${styles.columnHeader} ${styles.sortableHeader}`}
                onClick={() => tableOps.sort.handle('user')}
                style={{ color: theme.textSecondary, cursor: 'pointer' }}
              >
                <span className={styles.headerContent}>
                  USER
                  {tableOps.sort.isSortedBy('user') && (
                    <Icon
                      name={tableOps.sort.getIcon('user')}
                      size={12}
                      style={{ marginLeft: '4px' }}
                    />
                  )}
                </span>
              </th>
              <th
                className={`${styles.columnHeader} ${styles.sortableHeader}`}
                onClick={() => tableOps.sort.handle('project')}
                style={{ color: theme.textSecondary, cursor: 'pointer' }}
              >
                <span className={styles.headerContent}>
                  PROJECT
                  {tableOps.sort.isSortedBy('project') && (
                    <Icon
                      name={tableOps.sort.getIcon('project')}
                      size={12}
                      style={{ marginLeft: '4px' }}
                    />
                  )}
                </span>
              </th>
              <th
                className={`${styles.columnHeader} ${styles.sortableHeader}`}
                onClick={() => tableOps.sort.handle('address')}
                style={{ color: theme.textSecondary, cursor: 'pointer' }}
              >
                <span className={styles.headerContent}>
                  ADDRESS
                  {tableOps.sort.isSortedBy('address') && (
                    <Icon
                      name={tableOps.sort.getIcon('address')}
                      size={12}
                      style={{ marginLeft: '4px' }}
                    />
                  )}
                </span>
              </th>
              <th
                className={`${styles.columnHeader} ${styles.sortableHeader}`}
                onClick={() => tableOps.sort.handle('date')}
                style={{ color: theme.textSecondary, cursor: 'pointer' }}
              >
                <span className={styles.headerContent}>
                  DATE
                  {tableOps.sort.isSortedBy('date') && (
                    <Icon
                      name={tableOps.sort.getIcon('date')}
                      size={12}
                      style={{ marginLeft: '4px' }}
                    />
                  )}
                </span>
              </th>
              <th
                className={`${styles.columnHeader} ${styles.sortableHeader}`}
                onClick={() => tableOps.sort.handle('status')}
                style={{ color: theme.textSecondary, cursor: 'pointer' }}
              >
                <span className={styles.headerContent}>
                  STATUS
                  {tableOps.sort.isSortedBy('status') && (
                    <Icon
                      name={tableOps.sort.getIcon('status')}
                      size={12}
                      style={{ marginLeft: '4px' }}
                    />
                  )}
                </span>
              </th>
              <th className={styles.actionColumn}></th>
            </tr>
          </thead>
          <tbody>
            {tableOps.data.map(order => (
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

      <div className={styles.footer}>
        <div
          className={styles.paginationInfo}
          style={{ color: theme.textSecondary }}
        ></div>

        <div className={styles.pagination}>
          <button
            className={styles.paginationButton}
            onClick={tableOps.pagination.goPrevious}
            disabled={!tableOps.pagination.canGoPrevious}
            style={{
              color: !tableOps.pagination.canGoPrevious
                ? theme.border
                : theme.textSecondary,
              cursor: !tableOps.pagination.canGoPrevious
                ? 'not-allowed'
                : 'pointer',
              transform: 'rotate(180deg)',
            }}
          >
            <Icon name="chevron-right" size={16} />
          </button>
          <div className={styles.pageNumbers}>
            {tableOps.pagination.getVisiblePages().map(page => (
              <button
                key={page}
                className={`${styles.pageButton} ${page === tableOps.pagination.currentPage ? styles.activePage : ''}`}
                onClick={() => tableOps.pagination.handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className={styles.paginationButton}
            onClick={tableOps.pagination.goNext}
            disabled={!tableOps.pagination.canGoNext}
            style={{
              color: !tableOps.pagination.canGoNext
                ? theme.border
                : theme.textSecondary,
              cursor: !tableOps.pagination.canGoNext
                ? 'not-allowed'
                : 'pointer',
            }}
          >
            <Icon name="chevron-right" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
