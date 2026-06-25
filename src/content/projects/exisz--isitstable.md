---
repo: "exisz/IsItStable"
name: "IsItStable"
description: "Is It Stable? — Version stability verdicts for npm packages. Because upgrading shouldn't require courage."
url: "https://github.com/exisz/IsItStable"
homepage: "https://IsItStable.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["tracker", "developer-tools", "npm-package", "vibe-coding", "openclaw"]
stars: 24
forks: 1
openIssues: 62
closedIssues: 81
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-28T00:24:05Z"
lastCommitAt: "2026-06-25T01:38:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 81
undervaluedScore: 41
maintainers: ["github-actions[bot]", "exisz"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c96b4079a5f4e5ddd2990729fc37402025b2fef1cb1301eeecec368f9727f3f/exisz/IsItStable"
discussionCount: 0
---

# 🔍 IsItStable.com

> Evidence-based stability scores for npm packages. Because `latest` doesn't mean `greatest`.

🌐 **Website:** [isitstable.com](https://isitstable.com) · 📦 **npm:** [is-it-stable](https://www.npmjs.com/package/is-it-stable) · 🐙 **GitHub:** [exisz/IsItStable](https://github.com/exisz/IsItStable)

---

## What is this?

**IsItStable** answers one question: *"Should I update?"*

Every tracked package version gets a **stability score** backed by evidence: referenced GitHub issues, download stats, and community votes via GitHub reactions.

## Install & Usage (CLI)

No install needed — just run:

```bash
npx is-it-stable openclaw
```

Or install globally:

```bash
npm install -g is-it-stable
is-it-stable openclaw
```

## How it works

1. **Version issues** are created in this repo with the format `[v2026.4.23] PackageName`
2. Each issue contains a factual stability score, a brief comment, and evidence links
3. **You vote** by reacting on the issue: 👍 = stable, 👎 = unstable
4. The website reads from GitHub Issues via API — no database needed

## API

All endpoints return JSON with `Cache-Control` headers.

### `GET /api/v1/{package}/verdict`

Latest stability…
