---
repo: "alexgrist14/MoonCellar"
name: "MoonCellar"
description: "Game tracking database with a wheel of fortune — Next.js 16, React 19, TypeScript"
readmeQualityOk: true
url: "https://github.com/alexgrist14/MoonCellar"
homepage: "https://mooncellar.space"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["anime", "games", "spinner", "tracking", "wheel", "wheel-of-fortune", "bun", "feature-sliced-design", "nextjs", "react"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2024-01-18T06:31:31Z"
lastCommitAt: "2026-10-02T09:58:57Z"
lastReleaseAt: "2026-10-02T09:44:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 78
maintainers: ["sergeyhist", "alexgrist14"]
openGraphImageUrl: "https://opengraph.githubassets.com/944c118c980b5661ba1f6eccdb686f37b1c4bdebc39eb02394751a4d94ec356b/alexgrist14/MoonCellar"
---

<h1 align="center">🌙 MoonCellar</h1>

  A game tracking database — catalogue your backlog, log playthroughs, rate what you finished,<br>
  and let a wheel of fortune pick what you play next.
</p>

</p>

</p>

---

## Workspaces

One repository, one lockfile, three workspaces. Everything is installed and run from the root
with `bun --filter`.

| Workspace | Package name | What it is |
|---|---|---|
| `apps/web` | `web` | Next.js 16 App Router frontend — the site itself |
| `apps/api` | `api` | NestJS 11 service — catalogue, users, scheduled ingestion |
| `packages/schemas` | `@mooncellar/schemas` | Zod schemas shared by both: one definition, no copies |
| `infra/` | — | docker-compose stack: MongoDB, Loki, Grafana, Alloy, Prometheus, SearXNG; host nginx config |

```
MoonCellar/
├── apps/
│   ├── web/          # Next.js — see the frontend section below
│   └── api/          # NestJS — see the backend section below
├── packages/
│   └── schemas/      # @mooncellar/schemas — request/response contracts
├── infra/            # docker-compose.yml + grafana, monitoring, nginx, prometheus, searxng configs
├── docs/
└── package.json      # workspaces, catalog, shared tooling
```

---

##…
