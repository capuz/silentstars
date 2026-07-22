---
repo: "paddinglabs/margin"
name: "margin"
description: "Margin's Monorepo, available under AGPLv3"
readmeQualityOk: true
url: "https://github.com/paddinglabs/margin"
homepage: "https://margin.at"
language: "TypeScript"
languages: ["TypeScript", "JavaScript", "Go"]
languagePcts: [36, 23, 22]
topics: ["astro", "bookmarks", "extension", "go", "highlighting", "webannotation"]
stars: 99
forks: 14
openIssues: 5
closedIssues: 28
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2026-01-10T20:41:56Z"
lastCommitAt: "2026-07-22T06:11:19Z"
lastReleaseAt: "2026-01-22T02:40:42Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 35
maintainers: ["scanash00", "jphastings", "10d9f45747b3f67e73fefe877c4a2bc3"]
openGraphImageUrl: "https://opengraph.githubassets.com/0221407150e70cbd99f748d09444721b8ade5810fbd400f4a40f7ecc516c972e/paddinglabs/margin"
fundingLinks: ["KO_FI:https://ko-fi.com/scan", "OPEN_COLLECTIVE:https://opencollective.com/margin"]
---

# Margin

_Write in the margins of the web_

A web annotation layer built on [AT Protocol](https://atproto.com) that lets you annotate, highlight, and bookmark any URL on the internet.

## Project Structure

```
margin/
├── lexicons/           # AT Protocol lexicon schemas
│   └── at/margin/
│       ├── annotation.json
│       ├── bookmark.json
│       ├── collection.json
│       ├── collectionItem.json
│       ├── highlight.json
│       ├── like.json
│       ├── reply.json
│       ├── apikey.json
│       ├── preferences.json
│       └── profile.json
├── backend/            # Go API server
│   ├── cmd/server/
│   └── internal/
├── web/                # Astro SSR + React web app
│   └── src/
├── extension/          # Browser extension (WXT)
│   └── src/
└── avatar/             # Cloudflare Worker for avatar proxying
```

## Getting Started

### Docker (Recommended)

Run the full stack with Docker:

```bash
docker compose up -d --build
```

This builds both the Go backend and the Astro frontend into a single container. The Astro SSR server handles all frontend routing, static assets, and OG image generation, while the Go backend serves the API internally.

### Development

####…
