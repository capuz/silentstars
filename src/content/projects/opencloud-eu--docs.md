---
repo: "opencloud-eu/docs"
name: "docs"
description: "📖 OpenCloud Documentation built with Docusaurus 🦖 "
readmeQualityOk: true
url: "https://github.com/opencloud-eu/docs"
language: "MDX"
languages: ["MDX"]
languagePcts: [77]
stars: 12
forks: 34
openIssues: 17
closedIssues: 117
watchers: 4
contributors: 44
recentReleases: 0
createdAt: "2025-01-23T14:53:59Z"
lastCommitAt: "2026-09-10T08:20:55Z"
lastReleaseAt: "2025-03-17T11:23:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 79
maintainers: ["openclouders", "Svanvith", "Heiko-Pohl"]
openGraphImageUrl: "https://opengraph.githubassets.com/359c8f1fd7fcae0312da88d30f02b73f914661071154a3aa9cb98165b2ee6d4a/opencloud-eu/docs"
---

# 🌐 Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
pnpm install
```

## Local Development

Clone this repository and start the local dev server:

```bash
pnpm start
```

This command will launch a local development server and open the site in your browser. Changes are hot-reloaded automatically.

> ⚠️ `docs` tree contains redirects, because some documentation files may have been removed or moved, and old bookmarks should still work. To have those working in the local dev server, the documentation needs to be built first:

```bash
pnpm build
pnpm run serve
```

### Start docs in German

To launch the documentation in German, run:

```bash
pnpm run start --locale de
```

> ⚠️ Switching languages via the language switcher is currently not supported.

## Build

```bash
pnpm build
```

This command generates static content in the `build` folder. You can serve it using any static file hosting service.

## Deployment

### Using SSH:

```bash
USE_SSH=true pnpm deploy
```

### Without SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

If you're using GitHub Pages, this will push the…
