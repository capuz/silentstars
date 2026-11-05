---
repo: "CrytoPlanet/bullbear-dashboard"
name: "bullbear-dashboard"
description: "Bull-Bear State Machine"
originalDescription: " 牛熊状态机"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/CrytoPlanet/bullbear-dashboard"
homepage: "https://bullbear-dashboard.vercel.app"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [43, 42]
stars: 11
forks: 5
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-12-29T06:33:12Z"
lastCommitAt: "2026-11-05T14:05:14Z"
lastReleaseAt: "2026-01-12T03:46:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 71
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e63d8695815c98b0789485432efc9455f66f1b67f6d8b30953b61393c50f99c/CrytoPlanet/bullbear-dashboard"
---

# Crypto Market State Machine
## Crypto Market State Machine (Bull-Bear State Machine)

Compresses complex market analysis into a **data-driven four-quadrant state machine**:  
Each day you only need to input two types of data (trend structure + capital posture), and the system outputs which state the BTC market is currently in, then uses a validation layer to give a risk temperature and ETF acceleration hints.

> ⚠️ Disclaimer: This project is for research and educational purposes only and does not constitute investment advice of any kind.

---

## Vision

Replace emotional market judgment with a **data-driven approach**, helping investors clearly understand:
- Which phase of the bull/bear cycle are we in right now?
- Is capital on the offensive or on the defensive?
- Is the risk temperature too high?
- Is the ETF amplifying the trend?

---

## Core Concept: Input → Four-Quadrant Output → Validation Layer (does not change state)

- **Input A: Trend structure (MA50 / MA200)** → outputs `Trend = 趋势多 / 趋势空`
- **Input B: Capital posture (Stablecoin vs TOTAL)** → outputs `Funding = 资金进攻 / 资金防守`
- **Output: Four-quadrant state (2×2)** → directly locates one of the 4 states
-…
