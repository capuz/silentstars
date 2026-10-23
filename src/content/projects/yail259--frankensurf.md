---
repo: "yail259/frankensurf"
name: "frankensurf"
description: "One call that gets your agent through any site, stitched from 28 browsing tools"
readmeQualityOk: true
url: "https://github.com/yail259/frankensurf"
homepage: "https://frankensurf.dev"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["ai-agents", "browser-automation", "mcp", "python", "web-scraping"]
stars: 97
forks: 9
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-06T12:47:04Z"
lastCommitAt: "2026-10-23T09:33:07Z"
lastReleaseAt: "2026-10-10T21:38:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 35
maintainers: ["yail259", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dc8981d1e0f8a6398e598d15e4d8681bb6024ba046b7a090cb4d8319b7da0c7/yail259/frankensurf"
---

Cheapest tool first, every page checked, a receipt for every attempt.

---

Every web tool breaks somewhere, and they break on different sites. Frankensurf sits in front of
all of them and gives your agent one call. It tries the cheapest tool first, checks the page is
real, moves to a stronger tool only when a site pushes back, and returns clean page data with a
receipt of how it got there.

## Quick start

Python 3.12+, on Linux, macOS, or Windows through WSL. No account or key needed.

```bash
pip install "frankensurf[mcp]"
frankensurf install        # every free tool: browsers, stealth browsers, local search, Crawl4AI
frankensurf read "https://www.walmart.com/search?q=air+fryer" --explain
```

The read climbs until it gets the real page:

```text
https://www.walmart.com/search?q=air+fryer
  ✗ http                   CAPTCHA                0.4s
  ✗ local                  CAPTCHA                1.5s
  ✓ camoufox               got the page           15.6s

air fryer - Walmart.com
24,192 characters via camoufox, complete (107 results), free
```

`frankensurf install` works like `playwright install`: name just the tools you want
(`frankensurf install search chromium`), add…
