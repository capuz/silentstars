---
repo: "coda0HQ/open-artifacts"
name: "open-artifacts"
description: "Open-source, self-hosted Claude Code Artifacts on Cloudflare — publish, password-protect, and auto-update shareable HTML/Markdown pages from any coding agent."
readmeQualityOk: true
url: "https://github.com/coda0HQ/open-artifacts"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 22
forks: 1
openIssues: 13
closedIssues: 14
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-03T14:03:09Z"
lastCommitAt: "2026-07-20T06:33:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 37
maintainers: ["FradSer"]
openGraphImageUrl: "https://opengraph.githubassets.com/13610dde80c8ecd7d3ec4eea4bd35382c355ddde5a5b3b5bd6da9ee5c7c4f731/coda0HQ/open-artifacts"
---

# Open Artifacts  [](LICENSE) [](https://nodejs.org)

**English** | [简体中文](https://github.com/coda0HQ/open-artifacts/blob/HEAD/README.zh-CN.md)

Open-source, self-hosted [Claude Code Artifacts](https://code.claude.com/docs/en/artifacts):
let any coding agent publish self-contained HTML/Markdown pages to shareable
URLs, protect them with passwords (zero-knowledge, client-side encryption),
and keep them updated as the project they describe evolves. Runs entirely on
Cloudflare (Workers + D1 + R2), fits in the free tier, no accounts anywhere.

> **Hosted or self-hosted.** [coda0.com](https://coda0.com) is the official
> managed instance, run by the project — point your agent at it for zero-setup
> publishing. Or self-host the engine on your own Cloudflare account (see
> below); it's the same MIT-licensed code either way.

```mermaid
flowchart LR
  you["you"] -- "share the app's interaction flows as a page" --> agent["your agent"]
  agent -- "POST /api/artifacts" --> worker["your Worker"]
  worker -- "https://<instance>/a/3fKx9mQp2Wvb" --> url["shareable URL"]
  later["later: the flows change"] --> status["agent runs<br/>artifact.mjs status"]
  status -- "stale" --> regen["regenerates…
