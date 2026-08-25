---
repo: "Brainrotlang/brainrot-webpage"
name: "brainrot-webpage"
description: "The webpage source code for the Brainrot esoteric programming language"
readmeQualityOk: true
url: "https://github.com/Brainrotlang/brainrot-webpage"
homepage: "https://brainrotlang.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["brainrot", "brainrot-meme", "react", "reactjs", "wasm", "tailwind", "tailwind-css", "tailwindcss"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-12-14T18:36:58Z"
lastCommitAt: "2026-08-24T06:46:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 88
maintainers: ["leo-aa88", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8662b09a3ef68c9b09e6a90fc1cb3cf477aef3d90f32e5c9ac4ffc0a50262d8/Brainrotlang/brainrot-webpage"
postedAt: "2026-08-21T04:15:39.689Z"
---

# Brainrot Webpage

A small React + TypeScript + Tailwind single-page application for the **Brainrot** programming language docs.

## Features

- **React + TS**: TypeScript for type safety, React for the UI.
- **Tailwind**: For a modern and responsive UI.
- **Brainrot Logo**: Showcases the brand with an imported image.

## Requirements

- Node.js v18+ (or similar)
- Yarn or npm
- TypeScript dev dependencies

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/Brainrotlang/brainrot-webpage.git
   cd brainrot-webpage
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or npm install
   ```

3. (Optional) If you see ESLint or TS parser issues:

   ```bash
   yarn add -D typescript @typescript-eslint/parser
   ```

## Running the Development Server

```bash
yarn start
```

- Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Building for Production

```bash
yarn build
```

- Outputs a production-ready build in the `build/` folder.

## Project Structure

```
brainrot-webpage/
├─ public/
│  └─ favicon.ico
├─ src/
│  ├─ App.tsx
│  ├─ index.css
│  ├─ brainrot-logo.png
│  └─ ...other components...
├─…
