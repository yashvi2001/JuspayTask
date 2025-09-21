# Juspay Dashboard Task

## 🚀 Live Demo

**View the live application**: [juspay-task-nu.vercel.app](https://juspay-task-nu.vercel.app)

## Key Features

### 📊 **Comprehensive Analytics**

- **KPI Cards**: Track key metrics including customers (3,781), orders (1,219), revenue ($695), and growth (30.1%)
- **Revenue Trends**: Interactive line charts showing current vs previous week performance
- **Sales Analytics**: Bar charts displaying actual vs projected sales data
- **Geographic Revenue Distribution**: Visual representation of revenue by location with an interactive world map

### 🎨 **Modern UI/UX**

- **Dual Theme Support**: Seamlessly switch between light and dark modes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Collapsible Sidebars**: Left navigation and right notifications panel that can be toggled
- **Professional Styling**: Clean, modern design with consistent spacing and typography

### 🧭 **Navigation & Layout**

- **Dynamic Sidebar**: Expandable navigation with sections for Dashboards, Pages, and User Profile
- **Breadcrumb Navigation**: Clear page hierarchy with clickable breadcrumbs
- **Multi-page Support**: Dashboard and Orders pages with lazy loading for performance
- **Search Functionality**: Built-in search capability in the header

### 🔔 **Notifications System**

- **Activity Feed**: Real-time notifications for bugs, user activities, and system updates
- **Categorized Alerts**: Different types of notifications with appropriate icons and styling

### ⚡ **Performance Optimizations**

- **Lazy Loading**: Pages are loaded on-demand to improve initial load time
- **Code Splitting**: Vendor libraries are separated into chunks for better caching
- **Memoized Components**: React optimization techniques to prevent unnecessary re-renders

## Technology Stack

- **Frontend Framework**: React 18 with hooks and functional components
- **Build Tool**: Vite for fast development and optimized builds
- **Charts**: Chart.js with React-ChartJS-2 for interactive data visualizations
- **Styling**: CSS Modules for component-scoped styling
- **Icons**: Custom SVG icon system with reusable Icon component
- **Theme Management**: Context-based theme system with CSS custom properties

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Quick Start

**🌐 Live Demo**: Visit [juspay-task-nu.vercel.app](https://juspay-task-nu.vercel.app) to see the application in action

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/yashvi2001/JuspayTask.git
   cd JuspayTask
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the dashboard

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── DashboardHeader/ # Top navigation bar
│   ├── DashboardSidebar/# Left navigation panel
│   ├── eCommerceSection/# KPI cards and projections
│   ├── RevenueSection/  # Revenue charts and analytics
│   ├── SalesSection/    # Sales data and top products
│   └── Notifications/   # Right sidebar notifications
├── pages/              # Main page components
│   ├── Dashboard/      # Main dashboard page
│   └── Orders/         # Orders management page
├── ui/                 # Base UI components
│   ├── Avatar/         # User avatar component
│   ├── Icon/           # SVG icon system
│   ├── Navbar/         # Navigation bar
│   └── Sidebar/        # Sidebar base component
├── theme/              # Theme management
├── styles/             # Global styles and utilities
└── assets/             # Images, SVGs, and static files
```

## Features in Detail

### Dashboard Analytics

The main dashboard provides a comprehensive overview of business performance:

- **Customer Metrics**: Track total customers with growth indicators
- **Order Volume**: Monitor order counts and trends
- **Revenue Tracking**: Visualize revenue streams and projections
- **Growth Analysis**: Percentage-based growth metrics with visual indicators

### Interactive Charts

Multiple chart types provide different perspectives on the data:

- **Line Charts**: Revenue trends over time with comparison capabilities
- **Bar Charts**: Sales projections vs actuals
- **Geographic Visualization**: Revenue distribution by location

### Theme System

The application supports both light and dark themes:

- **Automatic Theme Detection**: Respects user's system preferences
- **Manual Toggle**: Users can switch themes manually
- **Consistent Styling**: All components adapt to the selected theme
- **CSS Custom Properties**: Efficient theme switching using CSS variables

## Browser Support

This dashboard is compatible with all modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This project follows standard React development practices. When contributing:

1. Use functional components with hooks
2. Follow the existing CSS Modules pattern for styling
3. Maintain theme compatibility for new components
4. Add proper TypeScript types if extending functionality

## Performance

The application is optimized for performance with:

- Lazy loading of route components
- Code splitting for vendor libraries
- Memoized expensive computations
- Efficient re-rendering strategies
