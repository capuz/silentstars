---
repo: "Houseofmvps/ultraship"
name: "ultraship"
description: "\"ULTRASHIP\" Claude Code plugin — 39 skills, 33 tools, 11 agents for ship-ready workflows: planning, review, pentesting, safety guardrails, canary monitoring, SEO/AI-readiness check, penetration testing, code review, competitive analysis, incident response. 1 dependency. 180 tests. MIT."
url: "https://github.com/Houseofmvps/ultraship"
homepage: "https://www.npmjs.com/package/ultraship"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["ai", "claude", "claude-code", "claude-code-plugin", "code-review", "developer-tools", "indie-hackers", "lighthouse", "performance", "playwright"]
stars: 109
forks: 13
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-24T17:54:10Z"
lastCommitAt: "2026-06-28T01:33:24Z"
lastReleaseAt: "2026-03-28T16:00:46Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 87
undervaluedScore: 28
maintainers: ["Houseofmvps", "anderson-0"]
openGraphImageUrl: "https://opengraph.githubassets.com/34a11c0ef0b85706346e3228c23d319e6e5e5bb3420bacd41d565d2d039ed4a6/Houseofmvps/ultraship"
fundingLinks: ["GITHUB:https://github.com/Houseofmvps"]
discussionCount: 4
---

### Claude Code plugin. 43 expert-level skills for building, shipping, and scaling production software. 37 audit tools (accessibility, vibe-coding security, AI evals, pentest, code quality, bundle size, SEO + AI Readiness check) plus a blocking ship-gate close the loop before deploy. A built-in Currency Guard keeps Claude on current docs, not stale training data.

---

**Built by [Kaileskkhumar](https://www.linkedin.com/in/kailesk-khumar-soundararajan), founder of [HouseofMVPs](https://houseofmvps.com) and [Kailxlabs](https://www.kailxlabs.co)**

</div>

---

```
0 dependencies · 274 tests · Node.js ESM · MIT
```

## Install

```bash
# Claude Code plugin
claude plugin marketplace add Houseofmvps/ultraship
claude plugin install ultraship

# Or standalone via npx
npx ultraship ship .
npx ultraship seo .
npx ultraship security .
```

## How It Works

```mermaid
flowchart LR
    U["You type a<br/>slash command"] --> S["Skill<br/>(markdown instructions)"]
    S --> A["Agent<br/>(dispatched worker)"]
    S --> T["Tools<br/>(Node.js scripts)"]
    A --> T
    T --> O["JSON Results"]
    O --> R["Scorecard / Report /<br/>Actionable Fixes"]

    style U…
