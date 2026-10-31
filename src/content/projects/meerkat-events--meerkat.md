---
repo: "meerkat-events/meerkat"
name: "meerkat"
description: "Audience engagement tool for questions and answers"
readmeQualityOk: true
url: "https://github.com/meerkat-events/meerkat"
homepage: "https://www.meerkat.events/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 23
forks: 3
openIssues: 4
closedIssues: 0
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2024-08-03T13:44:53Z"
lastCommitAt: "2026-10-31T19:01:35Z"
lastReleaseAt: "2024-11-06T05:09:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 67
undervaluedScore: 53
maintainers: ["FlorianDr", "angcorr17", "Scott1UP"]
openGraphImageUrl: "https://opengraph.githubassets.com/32a2fe2c91022776e9b12afeb3db0dc61caea5f15a136eda8dc4ba18b0f4a1af/meerkat-events/meerkat"
---

## Meerkat

The audience engagement tool for in-person and virtual conferences, used by the
Ethereum Foundation for Devcon, Devconnect, and others.

Attendees scan a QR code to ask and upvote questions and send reactions.
Organizers pick the question being answered and mark the current session as
live. A presenter view runs on the stage screen and follows the live session.

### Repository

| Path               | What it is                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| `api/`             | The application: Hono HTTP API, React Router 8 frontend (SSR), Drizzle schema and migrations      |
| `packages/react/`  | [`@meerkat-events/react`](https://github.com/meerkat-events/meerkat/blob/HEAD/packages/react/README.md) — hooks to embed live questions in your own site |
| `scripts/setup.sh` | One-shot local setup                                                                              |

## Prerequisites

- [Node.js 26](https://nodejs.org/). It no longer ships corepack, so install
  pnpm with its own installer (`curl…
