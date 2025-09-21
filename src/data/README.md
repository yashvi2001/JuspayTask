# Data Structure Documentation

This directory contains JSON files that store all static data used throughout the application, organized for easy maintenance and updates.

## Files

### `orders.json`

Contains all order data used in the Orders page.

**Structure:**

```json
{
  "orders": [
    {
      "id": "string",
      "user": {
        "name": "string",
        "avatar": "string (path to image)"
      },
      "project": "string",
      "address": "string",
      "date": "string",
      "status": {
        "text": "string",
        "color": "string (hex color)"
      }
    }
  ]
}
```

### `dashboard.json`

Contains all dashboard-related data organized by component sections.

**Structure:**

#### KPI Cards

```json
"kpiCards": [
  {
    "title": "string",
    "value": "string",
    "change": "string",
    "isPositive": boolean,
    "backgroundColor": "string (optional)",
    "textColor": "string (optional)",
    "titleColor": "string (optional)",
    "useThemeColors": boolean (optional)
  }
]
```

#### Top Selling Products

```json
"topSellingProducts": [
  {
    "name": "string",
    "price": number,
    "quantity": number,
    "amount": number
  }
]
```

#### Total Sales Chart

```json
"totalSales": {
  "labels": ["string"],
  "data": [number],
  "legendData": [
    {
      "label": "string",
      "value": number,
      "color": "string (optional)",
      "lightColor": "string (optional)",
      "darkColor": "string (optional)"
    }
  ]
}
```

#### Revenue by Location

```json
"revenueByLocation": [
  {
    "city": "string",
    "revenue": number,
    "maxRevenue": number,
    "mapPosition": {
      "top": "string (percentage)",
      "left": "string (percentage)"
    }
  }
]
```

#### Revenue Trend Chart

```json
"revenueTrend": {
  "labels": ["string"],
  "currentWeek": {
    "label": "string",
    "data": [number],
    "value": "string (formatted currency)"
  },
  "previousWeek": {
    "label": "string",
    "data": [number],
    "value": "string (formatted currency)"
  }
}
```

#### Projections Chart

```json
"projectionsChart": {
  "labels": ["string"],
  "actuals": [number],
  "projections": [number]
}
```

#### Notifications

```json
"notifications": [
  {
    "id": number,
    "icon": "string (icon name)",
    "text": "string",
    "time": "string"
  }
]
```

#### Activities

```json
"activities": [
  {
    "id": number,
    "avatar": "string (avatar key)",
    "text": "string",
    "time": "string"
  }
]
```

#### Contacts

```json
"contacts": [
  {
    "name": "string",
    "avatar": "string (avatar key)",
    "fallback": "string (initials)"
  }
]
```

#### Sidebar Navigation

```json
"sidebar": {
  "logo": {
    "src": "string (path)",
    "alt": "string",
    "text": "string"
  },
  "favorites": [
    {
      "name": "string",
      "active": boolean
    }
  ],
  "dashboards": [
    {
      "name": "string",
      "icon": "string",
      "page": "string",
      "active": boolean
    }
  ],
  "pages": [
    {
      "name": "string",
      "icon": "string",
      "page": "string",
      "subPages": ["string"]
    }
  ]
}
```

## Usage

### Importing Data

```javascript
import ordersData from '../../data/orders.json';
import dashboardData from '../../data/dashboard.json';
```

### Using Data

```javascript
// Orders
const orders = ordersData.orders;

// Dashboard components
const kpiData = dashboardData.kpiCards;
const products = dashboardData.topSellingProducts;
const notifications = dashboardData.notifications;
// etc.
```

### Theme Integration

Some data objects support theme-aware colors:

- Use `useThemeColors: true` to apply theme colors dynamically
- Provide `lightColor` and `darkColor` for theme-specific colors
- Fall back to `color` for static colors

### Avatar Mapping

For components using avatars (activities, contacts), map avatar keys to imported images:

```javascript
const avatarMap = {
  nataliCraig,
  drewCano,
  // ... other imported avatars
};

// Use in component
src={avatarMap[contact.avatar]}
```

## Benefits

1. **Centralized Data Management**: All static data in one place
2. **Easy Updates**: Modify data without touching component code
3. **Type Safety**: Clear structure for data objects
4. **Maintainability**: Separated concerns between data and presentation
5. **Scalability**: Easy to extend with new data fields
6. **Consistency**: Standardized data format across components
