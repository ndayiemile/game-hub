# Game Hub

**Live Demo:** [https://game-hub-dun-kappa.vercel.app](https://game-hub-dun-kappa.vercel.app)

A video game discovery platform built with React and TypeScript. This project demonstrates modern frontend patterns including layered architecture, server/client state separation, and type-safe API integration. Built while learning React through tutorials, it showcases practical application of React hooks, state management, and component composition.

---

## What It Does

Game Hub lets you browse, search, and explore video games from the RAWG database. You can filter by genre and platform, sort by various criteria, and view detailed information including screenshots and trailers. The app uses infinite scrolling for seamless browsing and includes dark/light mode support.

### Key Features

- **Game browsing** with infinite scroll pagination
- **Filtering** by genre (sidebar) and platform (dropdown)
- **Search** by game title with real-time filtering
- **Sorting** by relevance, release date, rating, name, or date added
- **Game detail pages** with descriptions, screenshots, trailers, and metadata
- **Responsive design** that works on mobile, tablet, and desktop
- **Dark/light mode** with persistent theme preference
- **Optimized images** using RAWG's crop API for faster loading

---

## Architecture

The project follows a layered architecture that separates UI, state management, domain logic, and data fetching. This structure makes the codebase maintainable and testable.

### Layer Structure

```
components/     → UI components (presentation)
pages/          → Route-level page components
Hooks/          → Custom hooks (application logic)
entities/       → TypeScript interfaces (domain models)
services/       → API client and utilities (data layer)
store.ts        → Zustand store (client state)
```

### State Management Strategy

The app uses two state management solutions for different purposes:

- **Zustand** (`store.ts`) - Manages UI-driven state like search text, selected filters, and sort order. This is client-side state that doesn't need to sync with the server.
- **TanStack Query** (via custom hooks) - Handles all server state: fetching games, genres, platforms, screenshots, and trailers. Provides caching, background refetching, and automatic loading/error states.

This separation means components stay focused on rendering, while hooks handle data fetching and state updates.

### Code Patterns

**Generic API Client**
The `APIClient<T>` class is a reusable, type-safe wrapper around Axios:

```typescript
class APIClient<T> {
  endpoint: string;
  
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
```

Each resource (games, genres, platforms) gets its own instance: `new APIClient<Game>("/games")`.

**Custom Hooks Pattern**
Data fetching logic is encapsulated in custom hooks that combine Zustand state with React Query:

```typescript
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("1d"), // Cache for 24 hours
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
```

This pattern keeps components clean—they just call `useGames()` and get data, loading, and error states.

**Image Optimization**
The `image-url.ts` service leverages RAWG's crop API to optimize images:

```typescript
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
```

This ensures all game images are consistently sized (600x400) and load faster.

---

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and builds
- **TanStack Query v4** for server state management
- **Zustand** for client state (filters, search, sort)
- **React Router v6** for routing
- **Chakra UI v3** for components and styling
- **Axios** for HTTP requests
- **React Infinite Scroll Component** for pagination

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Chakra UI wrapper components
│   ├── GameCard.tsx    # Individual game card
│   ├── GameGrid.tsx    # Grid with infinite scroll
│   ├── GenreList.tsx   # Sidebar genre filter
│   └── ...
├── pages/              # Route-level components
│   ├── HomePage.tsx
│   ├── GameDetailPage.tsx
│   └── ErrorPage.tsx
├── Hooks/              # Custom React hooks
│   ├── useGames.ts     # Infinite query for games
│   ├── useGame.ts      # Single game query
│   ├── useGenres.ts
│   └── ...
├── entities/           # TypeScript interfaces
│   ├── Game.ts
│   ├── Genre.ts
│   └── ...
├── services/           # API and utilities
│   ├── api-client.ts  # Generic API client
│   └── image-url.ts   # Image optimization
├── data/               # Static fallback data
├── store.ts            # Zustand store
└── routes.tsx          # Route configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/game-hub.git
   cd game-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### API Key

The app uses the RAWG API. An API key is included for demo purposes, but you can get your own free key at [rawg.io/apidocs](https://rawg.io/apidocs) if needed.

---

## Implementation Details

### Infinite Scrolling

Uses `react-infinite-scroll-component` with TanStack Query's `useInfiniteQuery`. The `GameGrid` component automatically fetches the next page when the user scrolls near the bottom. Loading skeletons appear while fetching additional pages.

### Caching Strategy

TanStack Query caches all API responses for 24 hours (`staleTime: ms("1d")`). This means:
- Filtering and sorting are instant (no network requests)
- Navigating back to a game detail page uses cached data
- Background refetching keeps data fresh without blocking the UI

### Error Handling

React Router's error boundaries catch errors at the route level. The `ErrorPage` component displays user-friendly error messages. Individual queries handle their own loading and error states via React Query.

### Responsive Design

Uses Chakra UI's responsive props throughout. The layout switches from a sidebar + main grid on desktop to a single column on mobile. Genre filters move from a sidebar to a dropdown on smaller screens.

---

## API Integration

The app integrates with the [RAWG Video Games Database API](https://rawg.io/apidocs):

- **GET /games** - List games with filtering, sorting, and pagination
- **GET /games/{id}** - Get detailed game information
- **GET /genres** - List all genres
- **GET /platforms** - List all platforms
- **GET /games/{id}/screenshots** - Get game screenshots
- **GET /games/{id}/movies** - Get game trailers

All API calls go through the generic `APIClient` class, which handles base URL, API key, and response typing.

---

## Contributing

Contributions are welcome! Here's how the project is organized to help you get started:

1. **Adding a new feature?** Check the relevant layer:
   - UI changes → `components/`
   - New page → `pages/` and `routes.tsx`
   - New data fetching → `Hooks/` and `services/api-client.ts`
   - New entity type → `entities/`

2. **State management:**
   - UI state (filters, search) → `store.ts` (Zustand)
   - Server data → Custom hooks using React Query

3. **Follow existing patterns:**
   - Use the generic `APIClient` for new API endpoints
   - Create custom hooks for data fetching
   - Keep components focused on rendering

Feel free to open an issue or submit a pull request!

---

## Deployment

The app is deployed on Vercel with automatic deployments from the main branch. The build process runs `tsc -b && vite build` to type-check and bundle the application.

---

## Acknowledgments

- Game data from [RAWG Video Games Database API](https://rawg.io/)
- UI components from [Chakra UI](https://chakra-ui.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Built with React and TypeScript**
