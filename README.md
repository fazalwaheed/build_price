# Design Construction Cost Estimation App

A frontend construction cost estimation app built with React, TypeScript, Vite, and Tailwind CSS. The app guides a user through a simple mobile-style flow for estimating house construction costs, selecting materials, reviewing cost breakdowns, and generating a summary report.

Original design reference:
`https://www.figma.com/design/0tQT8jPdW6CM3SM3rGvh9j/Design-Construction-Cost-Estimation-App`

## Overview

This project is a single-page React application with screen-based navigation managed in local component state. It is currently focused on the UI and estimation flow rather than a backend or persistent database.

Main user flow:

1. Splash screen
2. Onboarding screens
3. Authentication screen
4. Home dashboard
5. Material selection
6. Cost calculation
7. Report screen
8. Profile screen

## Language And Stack

Primary languages:

- TypeScript
- CSS
- HTML

Core tools and libraries:

- React 18
- Vite 6
- Tailwind CSS 4
- Motion for animations
- Recharts for charts and cost visualization
- Lucide React for icons
- Radix UI components for reusable UI primitives

## Features

- Mobile-inspired construction estimation workflow
- House area input in square feet
- Material quantity and cost selection
- Cost distribution visualization with charts
- Report summary with subtotal, tax, and grand total
- Currency formatting in Pakistani Rupees (`PKR`)
- Pakistan-localized date formatting in reports
- Profile and quick action screens

## Project Structure

```text
Design Construction Cost Estimation App/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── components/
│   │   │   ├── AuthScreen.tsx
│   │   │   ├── CostCalculation.tsx
│   │   │   ├── HomeDashboard.tsx
│   │   │   ├── MaterialSelection.tsx
│   │   │   ├── OnboardingScreens.tsx
│   │   │   ├── ProfileScreen.tsx
│   │   │   ├── ReportScreen.tsx
│   │   │   ├── SplashScreen.tsx
│   │   │   ├── figma/
│   │   │   └── ui/
│   │   └── lib/
│   │       ├── currency.ts
│   │       └── date.ts
│   ├── main.tsx
│   └── styles/
│       ├── fonts.css
│       ├── globals.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── guidelines/
├── index.html
├── package.json
├── postcss.config.mjs
├── vite.config.ts
└── README.md
```

## Important Files

- `src/app/App.tsx`
  Controls screen navigation and shared app state.

- `src/app/components/HomeDashboard.tsx`
  Entry point for starting a new estimation.

- `src/app/components/MaterialSelection.tsx`
  Lets the user review materials, prices, and quantities.

- `src/app/components/CostCalculation.tsx`
  Displays total cost and chart-based material breakdown.

- `src/app/components/ReportScreen.tsx`
  Shows the final report with totals and detailed line items.

- `src/app/lib/currency.ts`
  Centralized formatter for Pakistani Rupee values.

- `src/app/lib/date.ts`
  Pakistan-localized date formatting utility.

## State Management

The app currently uses local React state only:

- `currentScreen` controls which screen is visible.
- `houseArea` stores the entered house size.
- `selectedMaterials` stores the chosen materials and quantities.

There is no global store, backend API, or persistent storage yet.

## Running The Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Development Notes

- The app is currently frontend-only.
- Screen navigation is handled manually inside `App.tsx`.
- Material pricing is hardcoded in the current implementation.
- The project contains a large reusable `ui/` component set, though only part of it is actively used in the estimation flow.

## Current Currency Behavior

The application now formats visible monetary values in Pakistani Rupees (`PKR`) using shared helpers in:

- `src/app/lib/currency.ts`
- `src/app/lib/date.ts`

## Known Issue

In the current environment, `npm run build` may fail because of a Vite config or filesystem access issue related to `vite.config.ts`, not because of the README itself.

## Future Improvements

- Add backend integration for saving reports
- Add editable user profile data
- Support dynamic material pricing from an API or admin panel
- Export real PDF reports
- Add validation and form handling improvements
- Add tests for estimation logic and formatting helpers

## License

This repository does not currently define a license file.
