# LocalConnect - Local Services Aggregator Platform

A modern Next.js application that connects users with local service providers like electricians, plumbers, tutors, and more.

## Features

### Authentication & User Roles

- Secure user authentication system
- Two user roles:
  - **Service Provider**: Can register, list services, and manage availability
  - **Customer/User**: Can search, book, and review services

### Service Listing & Discovery

- Browse services by categories (Electricians, Tutors, Home Cleaning, etc.)
- Each listing includes:
  - Provider name and service type
  - Pricing information
  - Availability (days/times)
  - Ratings & reviews
  - Location information

### Booking System

- Direct booking functionality
- Providers can accept or reject bookings
- Calendar-based view for managing schedules
- Real-time booking status updates

### Search & Filters

- Search by service category, provider name, or city/locality
- Advanced filters:
  - Availability
  - Rating
  - Price range
  - Distance
  - Service category

### Reviews & Ratings

- Users can rate and write reviews post-service
- Providers can view their average rating
- Review management system

### Notification System

- Toast notifications for user actions
- Email/in-app notifications for:
  - Booking confirmations
  - Service updates (accepted/cancelled)
  - Status changes

## Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React icons
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Date Handling**: date-fns
- **Notifications**: React Toastify

## Project Structure

```
LocalConnect/
├── app/                          # Next.js App Router
│   ├── dashboard/
│   │   └── page.js              # Dashboard page (customer/provider)
│   ├── services/
│   │   └── page.js              # Services listing page
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.js                # Root layout with providers
│   └── page.js                  # Home page
├── components/                   # Reusable React components
│   ├── auth/
│   │   ├── Login.js             # Login modal component
│   │   ├── Register.js          # Registration modal component
│   │   └── ProtectedRoute.js    # Route protection wrapper
│   ├── booking/
│   │   └── BookingForm.js       # Service booking form
│   ├── common/
│   │   ├── Header.js            # Navigation header
│   │   └── Footer.js            # Site footer
│   ├── dashboard/
│   │   ├── CustomerDashboard.js # Customer dashboard view
│   │   └── ProviderDashboard.js # Provider dashboard view
│   ├── home/
│   │   ├── Hero.js              # Hero section with search
│   │   ├── FeaturedServices.js  # Featured services showcase
│   │   ├── HowItWorks.js        # Process explanation
│   │   └── Stats.js             # Platform statistics
│   ├── reviews/
│   │   └── ReviewForm.js        # Review submission form
│   └── services/
│       ├── ServiceCard.js       # Individual service display
│       └── ServiceFilters.js    # Search and filter component
├── contexts/                     # React Context providers
│   ├── AuthContext.js           # Authentication state management
│   └── NotificationContext.js   # Notification system
├── services/                     # API service functions
│   ├── api.js                   # Axios configuration & interceptors
│   ├── auth.js                  # Authentication API calls
│   ├── bookings.js              # Booking management API
│   ├── reviews.js               # Review system API
│   └── services.js              # Service listing API
├── public/                       # Static assets
│   └── index.html               # HTML template
├── package.json                  # Dependencies and scripts
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── reportWebVitals.js           # Performance monitoring
└── README.md                    # Project documentation
```

### Key Directories Explained

#### `/app` - Next.js App Router

- Contains page components using the new App Router structure
- Each folder represents a route (e.g., `/dashboard`, `/services`)
- `layout.js` provides the root layout with global providers

#### `/components` - Reusable UI Components

- **auth/**: Authentication-related components (login, register, protected routes)
- **booking/**: Booking system components
- **common/**: Shared components used across the app (header, footer)
- **dashboard/**: Dashboard views for different user types
- **home/**: Home page specific components
- **reviews/**: Review and rating components
- **services/**: Service listing and filtering components

#### `/contexts` - React Context Providers

- Global state management for authentication and notifications
- Provides data and functions to components throughout the app

#### `/services` - API Integration Layer

- Handles all HTTP requests to the backend API
- Organized by feature (auth, bookings, reviews, services)
- Includes error handling and request/response interceptors

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sanjay-sudheer/LocalConnect.git
cd LocalConnect
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
