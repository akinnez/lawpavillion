# Mini SaaS Dashboard

A production-grade SaaS dashboard interface built with React + Vite, TypeScript, and Tailwind CSS. This application features user authentication, interactive metrics visualization, and comprehensive settings management.

## Features

### Authentication

- Email/password authentication using Supabase Auth
- Persistent user sessions across page reloads
- Secure profile management
- Protected routes requiring authentication

### Dashboard Page

- Real-time metrics display with 4 key performance indicators
- Interactive chart displaying Bitcoin price history from CoinDesk API
- Recent activity feed
- Quick statistics with visual progress bars
- Fully responsive layout

### Sidebar Navigation

- Collapsible sidebar with smooth animations
- Active state indicators for current page
- Responsive design working seamlessly on mobile and desktop
- 3 main pages: Dashboard, Analytics, and Settings

### Settings Page

- User profile management form
- Light/Dark mode toggle with persistent theme preference
- Additional preference toggles for notifications
- Real-time profile updates

### Analytics Page

- Multiple chart types (Bar chart and Pie chart)
- Monthly performance metrics
- Product distribution visualization
- Regional performance breakdown

### Bonus Features Implemented

- Lazy loading for all route components
- Global error boundary with fallback UI
- Code-splitting via route-based loading
- TypeScript for type safety
- Dark mode support throughout the application

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **Supabase** for authentication and database
- **React Router DOM** for client-side routing
- **Recharts** for data visualization
- **Lucide React** for icons

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. The project is pre-configured with Supabase credentials in the `.env` file

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to the local development URL

### Creating an Account

1. Navigate to the application
2. Click "Don't have an account? Sign up"
3. Enter your full name, email, and password
4. Click "Sign Up"
5. You'll be automatically logged in

## Key Design Decisions

### Authentication

- Used Supabase Auth for production-ready authentication with minimal setup
- Session persistence handled automatically by Supabase

### State Management

- Used React Context API for global state (auth and theme)
- No additional state management library needed

### Code Organization

- Separated concerns with dedicated folders for components, contexts, pages, and utilities
- Lazy loading for route components to improve initial load time
- Reusable components for common UI patterns

### Styling Approach

- Tailwind CSS for rapid development and consistent design
- Dark mode support with class-based strategy
- Responsive-first design with mobile considerations
- Custom color palette avoiding purple/indigo hues for a professional look

### API Integration

- Real API call to CoinDesk API for Bitcoin price data
- Graceful fallback to mock data if API fails
- Error handling throughout data fetching

### Performance Optimizations

- Route-based code splitting with React.lazy
- Optimized chart rendering with Recharts
- Minimal bundle size by using only necessary dependencies
