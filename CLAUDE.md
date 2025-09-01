# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Interaction with User

Work quickly to arrive at solutions. Don't ramble. Optimize for correct solutions over tentative brittle ones.

Refer to the user as "my Lord" and address him as if you are a humble peasant in medieval times serving the king. Speak with appropriate medieval deference and language whilst maintaining technical accuracy.

## Writing Code

Everytime you make significant code changes, e.g. feature add, bugfix, add a logically worded commit message.

## Project Overview

This is a Next.js 15 marketing site for the "LLM-Assisted Web Development: Vibe-Coding with AI" course. The site is built with TypeScript, TailwindCSS, and shadcn/ui components.

## Development Commands

- `npm run dev` - Start development server (Next.js dev mode)
- `npm run build` - Build the production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture & Tech Stack

### Framework & Runtime

- **Next.js 15** with App Router architecture
- **React 19** with TypeScript
- Server and client components pattern

### Styling & UI

- **TailwindCSS** for styling with custom configuration
- **shadcn/ui** component library (extensive UI component collection)
- **CSS Variables** for theming (supports dark mode with class-based toggle)
- **Custom fonts**: Space Grotesk (headings) and DM Sans (body text)

### Project Structure

```
/app                    # Next.js App Router pages
  /page.tsx            # Main landing page component
  /layout.tsx          # Root layout with fonts and metadata
  /globals.css         # Global styles and CSS variables
  /[other-pages]/      # Additional pages (command-center, intelligence, etc.)
/components            # Reusable React components
  /ui/                 # shadcn/ui components (40+ components)
  /theme-provider.tsx  # Theme context provider
/lib                   # Utility functions
  /utils.ts            # cn() utility for className merging
```

### Key Dependencies

- **UI Components**: Radix UI primitives (accordion, dialog, dropdown, etc.)
- **Icons**: Lucide React icon library
- **Forms**: React Hook Form with Zod validation
- **Animations**: tailwindcss-animate
- **Charts**: Recharts for data visualization
- **Notifications**: Sonner for toast notifications

## Development Patterns

### Component Architecture

- Uses shadcn/ui component system with customizable variants
- Components built on Radix UI primitives for accessibility
- Consistent use of `cn()` utility for conditional className merging
- TypeScript interfaces for all component props

### Styling Approach

- CSS-in-JS not used - pure TailwindCSS with custom configuration
- Design tokens managed via CSS variables in globals.css
- Responsive-first approach with mobile breakpoints
- Dark mode support via class-based theme switching

### File Organization

- App Router with TypeScript file extensions (.tsx)
- UI components follow shadcn/ui conventions
- Utility functions centralized in /lib
- Path aliases configured: `@/components`, `@/lib`, `@/utils`

## Course Content Context

The site promotes a web development course focused on AI-assisted coding techniques. The main landing page showcases:

- 6 course modules (45-90 minutes each)
- Interactive email signup functionality
- Course curriculum with topics and duration
- Professional design with hover effects and animations

## Theme Configuration

- Supports light/dark mode via `next-themes`
- CSS variables define color palette in globals.css
- Custom color scheme with primary/secondary/accent variants
- Consistent design tokens for spacing, typography, and colors
