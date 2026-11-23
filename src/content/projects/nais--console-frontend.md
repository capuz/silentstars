---
repo: "nais/console-frontend"
name: "console-frontend"
description: "Nais Developer Console"
readmeQualityOk: true
url: "https://github.com/nais/console-frontend"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [55, 42]
stars: 9
forks: 1
openIssues: 6
closedIssues: 50
watchers: 45
contributors: 21
recentReleases: 3
createdAt: "2023-04-13T09:59:16Z"
lastCommitAt: "2026-11-23T12:24:14Z"
lastReleaseAt: "2026-11-18T10:11:12Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 97
undervaluedScore: 58
maintainers: ["rbjornstad", "ybelMekk", "frodesundby"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b8590ad799ec9eddf4ae2481654cd7605881e0a30cbb11bc93ec298181d73f6/nais/console-frontend"
---

# Console frontend

### Local Development

The following snippet contains the most important commands for development.

```bash
pnpm install
cp .env.example .env # Copy the example environment file
pnpm run build # Build the project
pnpm run dev # Starts a development server on port 5173

pnpm run check # Check for various issues
pnpm run lint # Lint the code
pnpm run format # Format the code (Or use a Prettier extension in  your editor)
pnpm run test # Run tests with Vitest
pnpm exec playwright install chromium # Install the browser for interaction tests
pnpm run test:browser # Run Playwright interaction tests
```
