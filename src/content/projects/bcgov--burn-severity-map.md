---
repo: "bcgov/burn-severity-map"
name: "burn-severity-map"
description: "Frontend for burn severity mapping"
url: "https://github.com/bcgov/burn-severity-map"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [46, 36]
topics: ["bcgov-geospatial"]
stars: 6
forks: 0
openIssues: 9
closedIssues: 6
watchers: 4
contributors: 31
recentReleases: 0
createdAt: "2025-05-12T21:38:49Z"
lastCommitAt: "2026-06-26T21:31:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 64
maintainers: ["GraydonShevchenko", "wburt", "isaac1345"]
openGraphImageUrl: "https://opengraph.githubassets.com/56e3fb51bd720ad60bff7c972f5b0b7316595c867b9365dc5332c2e0923deb11/bcgov/burn-severity-map"
---

# 🗺️ BC Government Burn Severity Map

This is a GeoBC lightweight web mapping application demo built with **React**, **Leaflet**, and **React Router**, featuring BCGov-branded UI components. It includes a simple landing page and an interactive map page with a responsive layout and clean structure.

## 🚀 Frontend Features

- 🔁 Client-side routing with React Router  
- 🗺️ Interactive map powered by Open Layers 
- 🧭 Messy and modular component structure  
- 🎨 BCGov-branded layout with header and footer  
- 📦 SCSS support for modular styling  

## 🚀 Backend Features

- 🧭 Fastapi with authenticated routes, duckdb, geoparquet, pydantic

## 📁 Project Structure
```
frontend/src/                    # Frontend component
│
├── components/
│   └── bcgov-components.tsx     # PageHeader and PageFooter components
│
├── pages/
│   ├── LandingPage.tsx          # Home page with navigation
│   └── MapPage.tsx              # Page with embedded Leaflet map
│
├── components/
│   └── map.tsx                  # LeafletMap logic and initialization
│
├── utils/
│   └── mapUtils.ts              # Leaflet map config and setup functions
│
├── style.scss                   # Global SCSS styling
├──…
