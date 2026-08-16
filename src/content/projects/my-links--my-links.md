---
repo: "my-links/my-links"
name: "my-links"
description: "Another bookmark manager that lets you manage and share your favorite links in an intuitive interface"
readmeQualityOk: true
url: "https://github.com/my-links/my-links"
homepage: "https://www.mylinks.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["next", "favorites", "open-source", "tool", "bookmark", "manager"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-04-28T02:31:10Z"
lastCommitAt: "2026-08-16T04:07:26Z"
lastReleaseAt: "2024-08-30T21:40:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 73
maintainers: ["Sonny93"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b041a3979bc0e92f9284233491c76f64e9d194627e3b93245334cef76b7413/my-links/my-links"
discussionCount: 0
---

> More screenshots are available in the [`docs/public/screenshots`](https://github.com/my-links/my-links/blob/HEAD/docs/public/screenshots) directory.

  <h1>MyLinks</h1>
  <p>A self-hostable bookmark manager: organize, search and share your favorite links.</p>
  <p>
  </p>
</div>

## Features

- **Collections** — group links by project or topic; a link can live in several at once, with an **Inbox** for the rest.
- **Search** — find any link or collection by name or URL.
- **Shareable collections** — a public collection is reachable with a single link, no account required on the other end.
- **Most-used links first** — opening a link counts a click, so your favorites rank themselves.
- **Browser extension** — save and search links from a side panel in Chromium and Firefox, with optional two-way syncing to your native bookmarks.
- **Privacy-focused, open-source, self-hostable** — run it on your own server and keep every link on hardware you control.

## Quickstart (Docker)

```bash
mkdir my-links-deployment && cd my-links-deployment
# docker-compose.yml pulling sonny93/my-links, plus a .env — see the full guide
docker compose up -d
```

This pulls the image from [Docker…
