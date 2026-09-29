---
repo: "TokenBrice/blog"
name: "blog"
description: "Personal blog repo"
readmeQualityOk: true
url: "https://github.com/TokenBrice/blog"
homepage: "https://tokenbrice.xyz"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [48, 25]
topics: ["privacy", "ethereum", "defi", "blockchain", "cryptocurrency-website"]
stars: 10
forks: 10
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2020-04-26T13:08:38Z"
lastCommitAt: "2026-09-29T08:10:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 57
undervaluedScore: 46
maintainers: ["TokenBrice"]
openGraphImageUrl: "https://opengraph.githubassets.com/909a39802a751a3ed4c8ae17716b65bad2c09d91a9c57d8a163e12aec07e8295/TokenBrice/blog"
---

## tokenbrice.xyz

> Brutally honest DeFi, built on a privacy-respecting static stack.

This repository contains the bilingual EN/FR TokenBrice blog. It is built with Hugo Extended `0.161.1`, a fork of `hugo-theme-stack`, self-hosted assets, and Matomo analytics.

### Local development

```sh
make setup
make serve
```

Open `http://localhost:1313`.

Docker is also available:

```sh
docker-compose up -d --build
```

### Verification

Use the same checks CI uses before shipping:

```sh
make verify
```

The verification path runs:

- front matter validation
- content safety validation for raw scripts/iframes and missing image alt text
- TypeScript typechecking
- Hugo production build
- generated-site local reference validation

Individual commands are also available:

```sh
make validate
make validate-content
make typecheck
make build
make validate-site
```

### Assets

Static images live under `static/img`. When new static images are added, refresh derived assets and dimensions:

```sh
make webp
make avif
make imgdims
```

`data/imageDims.json` is used by render hooks to emit image dimensions and reduce layout shift.

### Search

The site uses the theme JSON search index at…
