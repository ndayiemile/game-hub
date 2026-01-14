# Game Hub

Game Hub is a modern web application for discovering, browsing, and exploring video games. It features a responsive UI, dynamic filtering, and rich game details, providing a seamless experience for gamers and enthusiasts.

## Features

- **Game Discovery**: Browse a large collection of games with cover images, critic scores, and genres.
- **Game Details**: View detailed information for each game, including screenshots, trailers, platforms, publishers, and attributes.
- **Filtering & Sorting**: Filter games by genre and platform, and sort by popularity, release date, or rating.
- **Search**: Quickly search for games by title.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- **Dark/Light Mode**: Toggle between color modes for comfortable viewing.
- **Skeleton Loading**: Smooth loading experience with skeleton components.

## Implementation

- **Component-Based Architecture**: Built with reusable React components for UI elements, game cards, filters, and navigation.
- **Custom Hooks**: Uses custom React hooks for data fetching and state management (e.g., `useGames`, `useGenres`, `usePlatforms`).
- **API Integration**: Fetches game data, genres, platforms, screenshots, and trailers from an external API using a centralized API client.
- **State Management**: Utilizes a global store for managing filters, search queries, and theme state.
- **TypeScript**: Strongly typed codebase for reliability and maintainability.
- **Vite**: Fast development and build tooling with Vite.

## Technologies Used

- **React** (with TypeScript)
- **Vite** (build tool)
- **ESLint** (code linting)
- **Custom CSS** (with theme support)
- **External Game API** (for game data)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```


## Project Structure

- `src/components/` — UI and feature components
- `src/pages/` — Main pages (Home, Game Details, Error)
- `src/Hooks/` — Custom React hooks for data fetching
- `src/entities/` — TypeScript entity definitions
- `src/services/` — API client and utilities
- `src/data/` — Static data (genres, platforms)