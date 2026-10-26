---
repo: "AISafetycom/AISafety.com"
name: "AISafety.com"
description: "Source code for AISafety.com"
readmeQualityOk: true
url: "https://github.com/AISafetycom/AISafety.com"
homepage: "https://aisafety.com"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [63, 32]
stars: 7
forks: 12
openIssues: 9
closedIssues: 279
watchers: 7
contributors: 14
recentReleases: 0
createdAt: "2024-02-25T15:59:27Z"
lastCommitAt: "2026-10-26T09:17:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 86
maintainers: ["bryceerobertson", "dependabot[bot]", "corgi-rika"]
openGraphImageUrl: "https://opengraph.githubassets.com/d128ab465638234f93ee6b7edac831faf15b6015c372a1a00b01c5082e006398/AISafetycom/AISafety.com"
---

# AISafety.com

A community resource website helping people find events, organizations, jobs, funding, and learning resources in AI safety. Migrated from WebFlow.

## Tech Stack

| What       | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 16 (App Router)             |
| Language   | TypeScript                          |
| Styling    | Constraint-based CSS (not Tailwind) |
| Data       | Airtable                            |
| Map        | D3.js                               |
| Deployment | Vercel                              |

## Getting Started

```bash
nvm use
npm install
npm run dev
```

That's it — no credentials needed. Without Airtable credentials the dev
server runs in **contributor mode**: it fetches the site's data from the
live site's public [Data API](https://github.com/AISafetycom/AISafety.com/blob/HEAD/docs/api.md), so anyone can clone the repo
and see the full site locally.

A few things work differently in contributor mode:

- Featured cards don't show (their curation data is internal).
- The "Updated X days ago" line under page titles is hidden.
- Features that need private credentials — the…
