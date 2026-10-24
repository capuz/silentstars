---
repo: "casoon/astro-site-files"
name: "astro-site-files"
description: "Astro integration that generates robots.txt, llms.txt, sitemap.xml, security.txt, and humans.txt at build time from typed configuration."
readmeQualityOk: true
url: "https://github.com/casoon/astro-site-files"
homepage: "https://casoon.github.io/astro-site-files/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["astro", "astro-integration", "humans-txt", "llms-txt", "robots-txt", "security-txt", "seo", "sitemap", "typescript"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-06T13:09:18Z"
lastCommitAt: "2026-10-24T07:56:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 35
maintainers: ["casoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/8928ef0eaf7870d6814dbde3c447db66aae84764cea52ab2931817e1754f66b1/casoon/astro-site-files"
---

# @casoon/astro-site-files

Astro integration that generates all standard site meta-files from typed configuration at build time.

**Website and documentation:** [casoon.github.io/astro-site-files](https://casoon.github.io/astro-site-files/)

## What it does

- Generates `robots.txt` — crawl rules with per-agent overrides and automatic sitemap reference
- Generates `llms.txt` — AI model discovery file following the [llmstxt.org](https://llmstxt.org) specification
- Generates `sitemap.xml` — built-in, enabled by default, with dynamic sources, i18n hreflang, `noindex` filtering and sitemap-index support
- Generates `rss.xml` — RSS 2.0 feed with CDATA escaping, custom namespaces and per-item hooks
- Generates `/.well-known/security.txt` — vulnerability disclosure contact per [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116)
- Generates `humans.txt` — team and technology credits per [humanstxt.org](https://humanstxt.org)

All files are written to the build output directory when `astro build` runs.

> **Successor package.** This integration replaces [@casoon/astro-crawler-policy](https://github.com/casoon/astro-crawler-policy) (robots.txt + llms.txt) and…
