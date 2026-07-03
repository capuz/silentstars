---
repo: "johnwatson484/dream-league-web"
name: "dream-league-web"
description: "Dream League website"
url: "https://github.com/johnwatson484/dream-league-web"
language: "JavaScript"
languages: ["JavaScript", "Nunjucks"]
languagePcts: [51, 48]
topics: ["hacktoberfest"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-06-22T14:51:01Z"
lastCommitAt: "2026-07-03T12:22:40Z"
lastReleaseAt: "2021-08-12T20:33:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 39
maintainers: ["johnwatson484"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ec319fab9c0f94325a5e120273532f50e6a000244ef2ffe609a589089d122ec/johnwatson484/dream-league-web"
---

# Dream League Web

Dream League website (server-rendered Nunjucks frontend).

## Prerequisites

- Node.js >= 24 (see `.nvmrc`)

## Local development

```bash
nvm use
npm install
cp .env.example .env   # set API_HOST if API is not on localhost:3001
npm run local          # starts dev server with --watch
```

**Note:** Requires [dream-league-api](https://github.com/johnwatson484/dream-league-api) to be running (default: `http://localhost:3001`).

### Debug mode

```bash
npm run dev:debug      # same as dev but with --inspect (port 9229)
```

## Testing

```bash
npm test               # all tests with coverage
npm run test:unit      # unit tests only
npm run test:integration  # integration tests only
npm run test:watch     # watch mode
npm run test:lint      # ESLint
```

## Docker (full containerised mode)

```bash
docker compose --profile app up    # starts web app in container (needs API network)
```

## Multi-service development

For running the full stack (API + Web), see the [dream-league-core](https://github.com/johnwatson484/dream-league-core) orchestration repo.
