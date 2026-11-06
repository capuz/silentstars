---
repo: "PocketDecks/pokemon-tcg-pocket-tier-list"
name: "pokemon-tcg-pocket-tier-list"
description: "Live Pokémon TCG Pocket deck tier list, built from Limitless tournament results and the pokemon-tcg-pocket-cards dataset. Prerendered React app on Firebase, live at pocketdecks.top"
readmeQualityOk: true
url: "https://github.com/PocketDecks/pokemon-tcg-pocket-tier-list"
homepage: "https://pocketdecks.top/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [79, 20]
topics: ["decks", "pokemon", "pokemon-tcg-pocket", "tier", "tier-list", "tierlist", "pokemon-decks", "firebase", "pokemon-api", "pokemon-tcg"]
stars: 11
forks: 2
openIssues: 4
closedIssues: 14
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-11-01T22:10:51Z"
lastCommitAt: "2026-11-06T02:43:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 74
maintainers: ["leonid-dalin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/831bd65fc78ce47c23073a824bd79f94d8f4131ad8a3c9e5bca476ebb4a10cd5/PocketDecks/pokemon-tcg-pocket-tier-list"
---

# Pokemon TCG Pocket Deck Tier List

A web application that tracks and displays the current best decks for the Pokémon TCG Pocket game. This project aims to help players stay informed about the competitive meta by analysing tournament data from [Limitless](https://limitlesstcg.com/) Tournaments.

## ✨ Features

- Real-time deck tier rankings based on tournament performance
- Detailed deck statistics and win rates
- Easy-to-use interface for browsing top decks
- Regular updates based on tournament results
- Mobile-friendly design

## 🚀 Getting Started

### Prerequisites

- Node.js 24.22.1, the version the CI workflows pin. The site and the analysis pipeline both run on that version.
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chase-mew/pokemon-tcg-pocket-tier-list.git
cd pokemon-tcg-pocket-tier-list
```
2. Install frontend dependencies at the repo root, and analysis dependencies separately:
```bash
yarn install
cd analysis && yarn install && cd ..
```
3. Start the development server:
```bash
yarn start
```
4. Open your browser and navigate to `http://localhost:3000`

## 📚 Documentation

The site relies on a data analysis pipeline…
