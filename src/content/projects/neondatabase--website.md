---
repo: "neondatabase/website"
name: "website"
description: "Official docs and website for Neon."
readmeQualityOk: true
url: "https://github.com/neondatabase/website"
homepage: "https://neon.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["docs", "website"]
stars: 333
forks: 337
openIssues: 26
closedIssues: 250
watchers: 10
contributors: 311
recentReleases: 0
createdAt: "2021-03-28T20:53:23Z"
lastCommitAt: "2026-11-03T19:05:59Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 46
maintainers: ["danieltprice", "rishi-raj-jain", "philip"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/77690634?s=400&v=4"
---

# Neon Next.js

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Learn more](#learn-more)
  - [Build the website](#deploy-on-vercel)
- [Project Structure](#project-structure)
- [Code Style](#code-style)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [VS Code](#vs-code)
- [Docs](#docs)

## Getting Started

1. Clone this repository

```bash
git clone git@github.com:neondatabase/website.git
```

2. Install dependencies

```bash
npm install
```

3. Fill environment variables

```bash
cp .env.example .env
```

4. Check for environment variables

You can find this information on the following internal Neon Notion page: [How to build the Neon website locally](https://www.notion.so/neondatabase/How-to-build-the-Neon-website-locally-b5fc26e020d14b6eb90fdd6f41e29db4#03975baa5bdb436bbd67553da064b541).

## Usage

### Run the website

```bash
npm run dev
```

Open <http://localhost:3000> with your browser to see the result.

You can start editing the page by modifying `src/app/page.jsx`. The page auto-updates as you edit the file.

### Build the website

```bash
npm run build
```

### Run the built website

```bash
npm run start
```

### Checks broken…
