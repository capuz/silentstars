---
repo: "Brainrotlang/brainrot-webpage"
name: "brainrot-webpage"
description: "The webpage source code for the Brainrot esoteric programming language"
readmeQualityOk: true
url: "https://github.com/Brainrotlang/brainrot-webpage"
homepage: "https://brainrotlang.com/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [77, 20]
topics: ["brainrot", "brainrot-meme", "react", "reactjs", "wasm", "tailwind", "tailwind-css", "tailwindcss"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2024-12-14T18:36:58Z"
lastCommitAt: "2026-08-31T17:45:26Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 88
maintainers: ["leo-aa88", "cursoragent", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e83ec8fd5fc779ed3028e6b30af6fbdac7f722077ba52a7722a80f01d221397/Brainrotlang/brainrot-webpage"
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

## Deploying: the host must fall back to `index.html`

This is a single-page app with real client-side routes (`/tour/...`), so any
URL that is not a file on disk has to be…
