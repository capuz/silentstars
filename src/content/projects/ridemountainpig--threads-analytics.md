---
repo: "ridemountainpig/threads-analytics"
name: "threads-analytics"
description: "A self-hosted Threads analytics dashboard. Connect your access token and explore post performance with detailed charts and metrics"
readmeQualityOk: true
url: "https://github.com/ridemountainpig/threads-analytics"
homepage: "https://threads-analytics.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 43
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-03T01:16:08Z"
lastCommitAt: "2026-09-08T08:15:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 34
maintainers: ["ridemountainpig", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/abecac0fbdf0e405d82112019c2976acea33df9b4cf4fb7979800edcec5dbc58/ridemountainpig/threads-analytics"
---

</p>
<h1 align="center">Threads Analytics</h1>
  A self-hosted Threads analytics dashboard. Connect your access token and explore post performance with detailed charts and metrics.
</p>
</p>

</p>

---

## Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Requirements](#requirements)
- [Development](#development)
- [Getting Your Threads Access Token](#getting-your-threads-access-token)
- [Analytics Reference](#analytics-reference)
- [Deployment](#deployment)
  - [Updating an existing deployment](#updating-an-existing-deployment)

---

## Quick Start

```bash
git clone https://github.com/ridemountainpig/threads-analytics.git
cd threads-analytics
pnpm install
cp .env.example .env.local # or create .env.local manually
npx prisma migrate dev --name init
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and sign in with `APP_PASSWORD`.

---

## Features

- **Overview** — stat cards (views, likes, replies, reposts, quotes, shares, engagement rate) with period-over-period delta, views trend chart (day / week / month), best posting hour recommendation, viral posts
- **Analytics** — 25+ charts across **Performance**, **Content**, and **Audience**…
