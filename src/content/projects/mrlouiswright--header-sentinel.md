---
repo: "MrLouisWright/header-sentinel"
name: "header-sentinel"
description: "CI-friendly CLI and API that fails builds when deployed URLs are missing or misconfigure HTTP security headers (HSTS, CSP, COOP, cookies...) with specific fixes. JSON & SARIF output."
readmeQualityOk: true
url: "https://github.com/MrLouisWright/header-sentinel"
homepage: "https://mrlouiswright.github.io/header-sentinel/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["ci", "cli", "csp", "github-action", "hsts", "security-headers", "content-security-policy", "headers", "sarif", "security"]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-10-13T18:25:40Z"
lastCommitAt: "2026-10-14T08:57:54Z"
lastReleaseAt: "2026-10-13T22:21:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 28
maintainers: ["MrLouisWright"]
openGraphImageUrl: "https://opengraph.githubassets.com/aea42d33483e83f1dcd3339704114c8647314e8bfbbe77a0d7d335ede2a5d4f9/MrLouisWright/header-sentinel"
---

# header-sentinel

Fail your CI when deployed URLs are missing or misconfigure HTTP security headers — with a **specific fix** (example header + Nginx/Express/Vercel/Netlify hints) for every problem. **Mozilla HTTP Observatory-style** letter grades (A+ through F), zero runtime dependencies, Node ≥ 18, JSON and SARIF (GitHub code scanning) output.

## Install

```bash
npm i -D header-sentinel        # or run ad-hoc:
npx header-sentinel https://example.com
```

## Usage

```
header-sentinel <url...> [options]

  -c, --config <file>       JSON config (default: .headerguardrc.json / .headersentinelrc.json if present)
      --fail-on <level>     error | warn | none   (default: error)
      --json                Print JSON results (includes observatory score/tests)
      --sarif [file]        Print SARIF 2.1.0 (or write to file)
      --sitemap <url>       Load URLs from sitemap.xml (repeatable)
      --baseline <file>     Only fail on findings not in baseline
      --update-baseline     Write current fingerprints to --baseline
      --no-http-upgrade     Skip HTTP→HTTPS redirect analysis
      --no-preload-check    Skip HSTS preload list / eligibility lookups
  -t, --timeout <ms>…
