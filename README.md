# Media Search

## Overview

Media Search is a responsive web application for finding photos and videos from one place. Enter a search term, switch between photo and video results, and save the media you want to revisit in a personal collection. Photo search is powered by Unsplash and video search by Pexels.

## Tech Stack Used

- React 19 for the user interface
- Vite for development and production builds
- Redux Toolkit and React Redux for application state
- React Router for Home and Collection page navigation
- Axios for API requests
- Tailwind CSS for styling and responsive layouts
- Unsplash API for photo search
- Pexels API for video search
- Browser `localStorage` to persist saved collection items

## Features

- Search media by keyword.
- Browse separate photo and video result tabs.
- Fetch photo results from Unsplash and video results from Pexels.
- View images and videos in media cards, with links to their original source.
- Save unique media items to a personal collection.
- Remove individual saved items or clear the entire collection.
- Keep the saved collection after a browser refresh using `localStorage`.
- Show loading and error states while search results are being requested.
- Navigate between the search home page and collection page.

## What I Learned

- How to structure a React application with reusable components and page-based routing.
- How to manage shared search, tab, result, and collection state with Redux Toolkit slices.
- How to integrate multiple third-party APIs with Axios and normalize their different response shapes for one UI.
- How to trigger data fetching in response to Redux state changes with `useEffect`.
- How to persist client-side state with `localStorage` and prevent duplicate saved items.
- How to build responsive UI layouts and interactive states with Tailwind CSS.

## Glimpse 
<p align="center">
  <img src="https://github.com/user-attachments/assets/d484c4e5-d73b-4665-bc07-64968bdaa684" width="48%" alt="Desktop Home" />
  <img src="https://github.com/user-attachments/assets/d52c741c-d3e3-4f4b-959d-18fe5566592e" width="48%" alt="Desktop Collection" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/5a535df7-1769-4a83-b126-555c89a21da0" width="30%" alt="Mobile View" />
</p>


## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and add your API keys:

   ```env
   VITE_UNSPLASH_KEY=your_unsplash_access_key
   VITE_PEXELS_KEY=your_pexels_api_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal.

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
