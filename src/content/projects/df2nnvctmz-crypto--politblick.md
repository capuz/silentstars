---
repo: "df2nnvctmz-crypto/Politblick"
name: "Politblick"
description: "An app for better politic decisions and accountability."
readmeQualityOk: true
url: "https://github.com/df2nnvctmz-crypto/Politblick"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-28T22:18:46Z"
lastCommitAt: "2026-09-07T08:34:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 42
maintainers: ["df2nnvctmz-crypto", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ebbff4d0c12ee5b13448117b0ee988e4de426341021a375cee7aab2219fce49/df2nnvctmz-crypto/Politblick"
---

# Politblick

## Data pipeline

There is no backend. Every dataset is fetched on a schedule by GitHub Actions, committed to
this repo, and served as static JSON — so visitor traffic never reaches the upstream APIs.

| Script | Source | Writes | Schedule |
| --- | --- | --- | --- |
| `fetch-core.mjs` | abgeordnetenwatch | `public/data/roster,polls,poll-results.json` | every 4 h |
| `fetch-sidejobs.mjs` | abgeordnetenwatch | `public/data/sidejobs.json` | daily |
| `fetch-lobbyregister.mjs` | Lobbyregister API v2 | `data/lobby-register.json` | weekly |
| `fetch-parteispenden.mjs` | bundestag.de (HTML) | `public/data/party-donations.json` | daily |
| `fetch-committees.mjs` | abgeordnetenwatch | `public/data/committees.json` | weekly |
| `fetch-history.mjs` | abgeordnetenwatch | `public/data/vote-history.json` | manual (`workflow_dispatch`) |
| `build-vote-history-summary.mjs` | *(no network)* | `public/data/vote-history-summary.json` | same job as `fetch-history` |
| `verify-vote-history-summary.mjs` | *(no network)* | *(checks only)* | that job **and** every deploy |
| `build-lobby-links.mjs` | *(no network)* | `public/data/lobby-links.json` | after every fetch |

`data/` is **not**…
