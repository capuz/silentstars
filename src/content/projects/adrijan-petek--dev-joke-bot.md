---
repo: "Adrijan-Petek/dev-joke-bot"
name: "dev-joke-bot"
description: "Random Dev Joke/Quote Bot that updates your README every 12 hours with a new joke and makes it visually fun."
readmeQualityOk: true
url: "https://github.com/Adrijan-Petek/dev-joke-bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["ai", "api", "automation", "bot", "chatbot", "developer-humor", "discord-bot", "entertainment", "fun-bot", "humor-bot"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T23:36:05Z"
lastCommitAt: "2026-11-12T05:39:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 76
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/72ade2277fab4abebe3d642e256bf1cba3347bcfaa97e63e3e30eaa465afc3cb/Adrijan-Petek/dev-joke-bot"
---

# Dev Joke Bot

A small Node.js/TypeScript CLI that prints random developer jokes from a local JSON database. The README can be automatically updated on a schedule with a rotating joke via GitHub Actions.

## Features

- Random joke output from a curated dataset (`jokes.json`)
- Category filtering (`--category`) and keyword search (`--search`)
- Joke statistics (`--stats`) and category listing (`--list`)
- Optional colored output themes (`--color`)

## Requirements

- Node.js 18+ (Node 20 recommended)

## Quick start

```bash
npm install
npm run build
npx dev-joke-bot
```

## Usage

```bash
npx dev-joke-bot [options]
```

Options:

- `--help` Show the help menu
- `--list` List all available categories
- `--stats` Show joke statistics
- `--category <name>` Get a joke from a specific category
- `--search <keyword>` Search jokes by text or tag
- `--count <n>` Print multiple random jokes
- `--color <theme>` Set output theme (`pastel`, `rainbow`, `mind`, `retro`)
- `--readme` Output a plain Markdown snippet (for CI/README updates)

Examples:

```bash
npx dev-joke-bot
npx dev-joke-bot --category Git
npx dev-joke-bot --search database --color rainbow
npx dev-joke-bot --count 3
```

##…
