---
repo: "clivoa/awesome-security-feeds"
name: "awesome-security-feeds"
description: "Awesome Security Feeds a curated, structured and automation-friendly collection of security RSS/Atom sources. Based on https://securityfeeds.org/"
readmeQualityOk: true
url: "https://github.com/clivoa/awesome-security-feeds"
homepage: "http://awesomesecurityfeeds.com"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["awesome-list", "cybersecurity", "feeds", "hacking", "security-news"]
stars: 37
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-27T15:07:12Z"
lastCommitAt: "2026-07-31T06:29:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 40
maintainers: ["github-actions[bot]", "clivoa"]
openGraphImageUrl: "https://opengraph.githubassets.com/285b2a8cf3413e43302249a7e7ff0d3c10246eeaf0a97d4e6af024cda65836cc/clivoa/awesome-security-feeds"
---

</p>

# Awesome Security Feeds

A **curated, structured and automation-friendly** collection of security RSS/Atom sources.

This repository is **independent** (it can be used on its own). Based on https://securityfeeds.org/
The generated artifacts are also consumed downstream by projects such as [**S33R**](https://github.com/clivoa/S33R/) (security news aggregation / briefings).

---

## Quick links

- **Full feed list (Awesome page):** `docs/awesome-feeds.md`
- **Architecture & CI flow:** `docs/architecture.md`
- **Docs index:** `docs/README.md`
- **Categories & criteria:** `docs/categories.md`

---

## What you get

- ✅ **Source of truth in YAML** (`feeds/*.yaml`) for easy review in PRs  
- ✅ **Prebuilt JSON** for fast UIs and tooling (`data/feeds.json`, `data/feeds.min.json`)  
- ✅ **OPML/XML exports** for feed readers (`data/sec_feeds_full.xml`, `data/sec_feeds_active.xml`)  
- ✅ **Feed health checks** (`data/feed_status.json`)  
- ✅ Static UI (`index.html`) with search & filters

---

## Repository structure

```text
.
├── feeds/                      # source of truth (YAML lists)
├── scripts/                    # validation, health check, exports
├── data/…
