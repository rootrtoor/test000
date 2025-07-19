# Jerry Trudell 2024 Campaign Website

## Overview

This is a modern political campaign website built for Jerry Trudell's 2024 mayoral campaign. The application is a full-stack web application featuring a React frontend with a Node.js/Express backend, designed to showcase the candidate's platform, collect contact form submissions, and engage voters.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### AWS Deployment Configuration (January 2025)
- ✓ Added comprehensive AWS deployment support
- ✓ Created CloudFormation infrastructure templates  
- ✓ Implemented AWS Lambda contact form handler
- ✓ Added AWS Amplify deployment configuration
- ✓ Created deployment scripts and documentation
- ✓ Fixed CSS import order issue
- ✓ Updated contact form to use environment variables for API endpoints

### Simplified Deployment (January 2025)
- ✓ Created simplified contact form that works without backend
- ✓ Added Netlify Forms integration with mailto fallback
- ✓ Streamlined AWS Amplify configuration
- ✓ Added one-click deployment options
- ✓ Created user-friendly deployment documentation
- ✓ Added SEO optimization with meta tags and structured data
- ✓ Made deployment process accessible to non-technical users

## System Architecture

### Full-Stack Structure
The application follows a monorepo structure with clear separation between client and server code:
- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` for type-safe database operations
- **Migrations**: Stored in `./migrations` directory
- **Connection**: Uses Neon Database serverless PostgreSQL

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom campaign color variables
- **Build Tool**: Vite with hot module replacement in development

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Structure**: RESTful endpoints under `/api` prefix
- **Storage**: Abstracted storage interface with in-memory implementation for development
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

### Component Structure
The frontend is organized into logical sections:
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Campaign banner with call-to-action buttons
- **About Section**: Candidate biography and qualifications
- **Issues Section**: Policy platform and priorities
- **Testimonials**: Community endorsements
- **Get Involved**: Volunteer and donation opportunities
- **Contact Form**: Structured contact submission with newsletter signup

## Data Flow

### Contact Form Submission
1. User fills out contact form with personal details and message
2. Frontend validates data using Zod schema from shared types
3. Form data is sent to `/api/contact` endpoint via TanStack Query mutation
4. Backend validates submission using shared schema
5. Data is stored in PostgreSQL database via Drizzle ORM
6. Success/error response is returned and displayed to user

### Database Schema
- **Users Table**: Basic user authentication structure (prepared for future use)
- **Contact Submissions Table**: Stores form submissions with timestamp and newsletter preference
- **Type Safety**: Drizzle generates TypeScript types from schema definitions

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Backend**: Express.js, TypeScript runtime (tsx)
- **Database**: Drizzle ORM, Neon Database serverless driver
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **State Management**: TanStack Query
- **Validation**: Zod for runtime type checking
- **Build Tools**: Vite, esbuild, TypeScript

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Code Quality**: TypeScript for type safety
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Development Environment
- Uses tsx for running TypeScript server directly
- Vite dev server with HMR for frontend development
- In-memory storage implementation for rapid development
- Replit-specific plugins for cloud development

### Production Build
- Frontend: Vite builds optimized React bundle to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Static assets served by Express in production
- Database migrations handled via Drizzle Kit

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Separate development and production configurations
- Type-safe environment variable handling

### Key Architectural Decisions

1. **Monorepo Structure**: Chosen for simplified deployment and shared type definitions between frontend and backend
2. **Drizzle ORM**: Selected for type-safe database operations and excellent TypeScript integration
3. **shadcn/ui**: Provides consistent, accessible UI components with customizable styling
4. **TanStack Query**: Handles server state management, caching, and error handling for API calls
5. **Shared Schema**: Single source of truth for data validation between client and server
6. **Vite + Express**: Fast development experience with production-ready serving capabilities

The architecture prioritizes type safety, developer experience, and maintainability while providing a solid foundation for a political campaign website with room for future enhancements like user authentication and content management.