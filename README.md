# Hero IO

Hero IO is a responsive React and TypeScript application that recreates a modern app marketplace experience. Users can browse trending apps, search the full catalog, view app details with charted reviews, install apps with local storage persistence, and manage installed apps from a dedicated page.

## Overview

This project was designed around a supplied UI reference set for:

- Home page
- All Apps page
- App Details page
- My Installation page
- 404 page
- App Not Found page

The application emphasizes:

- Clean responsive layout for desktop, tablet, and mobile
- Smooth route navigation and loading feedback
- Local storage based installation state
- Animated statistics on the home page
- Search and filtering on the apps page
- Reusable components and typed app data

## Tech Stack

- React
- TypeScript
- Vite
- React Router DOM
- Recharts
- React Toastify
- CSS

## Frameworks And Packages

- `react`
- `react-dom`
- `react-router-dom`
- `recharts`
- `react-toastify`
- `vite`
- `typescript`

## Features

- Responsive navbar with active route indication
- Branded hero section with store call-to-action buttons
- Animated total count statistics section
- Trending apps grid on the home page
- All apps page with live search
- App details page with ratings chart
- Install button with persistent local storage state
- Installation page with uninstall and sort support
- Custom 404 page
- Custom app-not-found page
- Footer with branded layout and social links
- Favicon based on the Hero IO logo

## Project Structure

```text
Hero IO/
|-- assets/
|   |-- App-Error.png
|   |-- demo-app (1).webp
|   |-- demo-app (2).webp
|   |-- demo-app (3).webp
|   |-- demo-app (4).webp
|   |-- demo-app (5).webp
|   |-- demo-app (6).webp
|   |-- error-404.png
|   |-- hero.png
|   |-- icon-downloads.png
|   |-- icon-ratings.png
|   |-- icon-review.png
|   `-- logo.png
|-- public/
|   `-- _redirects
|-- src/
|   |-- components/
|   |   |-- AppCard.tsx
|   |   |-- EmptyState.tsx
|   |   |-- Layout.tsx
|   |   |-- PageHero.tsx
|   |   `-- PageLoader.tsx
|   |-- data/
|   |   `-- apps.ts
|   |-- pages/
|   |   |-- AppDetailsPage.tsx
|   |   |-- AppsPage.tsx
|   |   |-- HomePage.tsx
|   |   |-- InstallationPage.tsx
|   |   `-- NotFoundPage.tsx
|   |-- utils/
|   |   |-- apps.ts
|   |   |-- format.ts
|   |   `-- storage.ts
|   |-- App.tsx
|   |-- main.tsx
|   |-- styles.css
|   |-- types.ts
|   `-- vite-env.d.ts
|-- index.html
|-- netlify.toml
|-- package.json
|-- tsconfig.json
|-- tsconfig.app.json
|-- tsconfig.node.json
`-- vite.config.ts
```

## Routing

- `/` -> Home
- `/apps` -> All Apps
- `/apps/:id` -> App Details
- `/installation` -> My Installation
- `*` -> 404

## Data And State

- Typed app data lives in `src/data/apps.ts`
- Installed app ids are saved in browser local storage
- Installation state persists after refresh
- Search filters apps by title in real time

## How To Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

## Deployment

This project is prepared for SPA deployment on Netlify.

- `public/_redirects` handles deep-link refresh support
- `netlify.toml` defines the publish directory

## Notes

- The UI was tuned to follow the provided design screenshots as closely as possible
- Store buttons use matching external icon assets
- Home statistics use a slower count-up animation for better visual pacing
- Shared components keep the project easier to maintain and extend

## Author

Built by Md. Omar Faruk for the Hero IO project.
