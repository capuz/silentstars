---
repo: "sonirico/datetoken.js"
name: "datetoken.js"
description: "Time toolkit to parse strings into relative date time objects, ideal for pickers and preventing premature cache invalidation"
readmeQualityOk: true
url: "https://github.com/sonirico/datetoken.js"
homepage: "https://www.npmjs.com/package/datetoken"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["datetime", "datepicker", "relative-time", "relative-date", "time", "token", "date-token", "commonjs", "esm", "nodejs"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-11-04T19:17:43Z"
lastCommitAt: "2026-09-21T09:13:24Z"
lastReleaseAt: "2024-12-15T13:16:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 76
maintainers: ["github-actions[bot]", "sonirico", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bd1b5bdbc6121d90d04cd809f154274f92595d5a55d7e64a1bdcb83ba9e277b/sonirico/datetoken.js"
---

# datetoken

A small DSL to express relative dates as tokens. Parse `now-1d/d` into a `Date` instead of
hand-rolling arithmetic with `Date.now() - 86400000`.

Also available in [Python](https://github.com/sonirico/datetoken), [Go](https://github.com/sonirico/datetoken.go) and ... [Nim?](https://github.com/fernando24164/datetoken.nim)

## Install

```bash
npm install datetoken
```

Requires Node.js >= 20.

## Usage

```typescript
import datetoken from 'datetoken';

datetoken('now');              // current time
datetoken('now-1d/d');         // start of yesterday
datetoken('now-1d@d');         // end of yesterday
datetoken('now-7d');           // 7 days ago
datetoken('now/M');            // start of current month
datetoken('now-1M@M');         // end of last month
datetoken('now-1w/bw');        // start of last business week (Monday)
datetoken('now/Q');            // start of current quarter
datetoken('now-3M+2w-4d/w');   // chains work: 3 months ago + 2 weeks - 4 days, snapped to start of week
```

## Token grammar

```
now [±<amount><unit>]... [/<snap> | @<snap>]
```

Everything starts with `now`. Then zero or more arithmetic operations, optionally ending with
a snap to a…
