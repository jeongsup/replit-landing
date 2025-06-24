# Company Website

## Overview

This is a modern full-stack web application built with a React frontend and Express.js backend. The application appears to be a Korean corporate website featuring company information, services, and contact details. It uses a monorepo structure with shared types and schemas between the frontend and backend.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite for development and building

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: tsx for TypeScript execution

### Shared Components
- **Schema**: Centralized database schema and validation using Drizzle and Zod
- **Types**: Shared TypeScript types between frontend and backend

## Key Components

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Current Tables**: Users table with username/password fields
- **Migrations**: Stored in `./migrations` directory
- **Validation**: Zod schemas for runtime validation

### Storage Interface
- **Abstraction**: IStorage interface for CRUD operations
- **Implementation**: MemStorage class (in-memory storage) for development
- **Methods**: User creation, retrieval by ID and username

### UI Design System
- **Theme**: "New York" style from shadcn/ui
- **Color Scheme**: Neutral base with blue primary, orange accent
- **Components**: Comprehensive set including forms, navigation, dialogs
- **Responsive**: Mobile-first design with breakpoint utilities

### Pages & Sections
- **Company Page**: Hero, about, services, vision sections
- **Directions Page**: Contact info and transportation guide
- **Layout**: Fixed header navigation and footer
- **Content**: Korean language corporate content

## Data Flow

1. **Client Requests**: React Router (wouter) handles client-side navigation
2. **API Calls**: TanStack Query manages server state and caching
3. **Backend Routes**: Express.js handles API endpoints (prefixed with `/api`)
4. **Database**: Drizzle ORM interfaces with PostgreSQL
5. **Response**: JSON responses with error handling middleware

## External Dependencies

### Database
- **Provider**: Neon Database (serverless PostgreSQL)
- **Connection**: Environment variable `DATABASE_URL` required
- **ORM**: Drizzle with PostgreSQL dialect

### UI Libraries
- **Radix UI**: Headless component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Date-fns**: Date manipulation utilities

### Development Tools
- **Replit Integration**: Runtime error overlay and cartographer
- **TypeScript**: Strict type checking enabled
- **ESLint/Prettier**: Code formatting and linting (implied)

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Server**: Development server with HMR via Vite
- **Port**: 5000 (configured in .replit)
- **Hot Reload**: Vite middleware for frontend, tsx for backend

### Production
- **Build**: Vite builds frontend, esbuild bundles backend
- **Output**: Static files in `dist/public`, server in `dist/index.js`
- **Deployment**: Replit autoscale deployment target
- **Port Mapping**: Internal 5000 → External 80

### Database Setup
- **Migration**: `npm run db:push` applies schema changes
- **Environment**: Requires `DATABASE_URL` environment variable
- **Provider**: PostgreSQL 16 module in Replit

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```