---
repo: "Seanding1998/liuyao-frv"
name: "liuyao-frv"
description: "Liu Yao Na Jia Divination Method Claude Code Skill - Open Source Free Version"
originalDescription: "六爻纳甲筮法 Claude Code Skill - 开源免费版"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Seanding1998/liuyao-frv"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-18T05:41:40Z"
lastCommitAt: "2026-07-22T06:09:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 40
maintainers: ["Seanding1998"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f0df75fe87df3fe0d16ff0f4996c2e2b0b153ae948c90a9a9e007dea2a55893/Seanding1998/liuyao-frv"
---

# Liu Yao Divination Analysis Skill

> Professional Liu Yao Na Jia divination charting + analysis tool. Automatic coin tossing charting → Ten-step method layered analysis → Deliverable HTML divination report.
>
> Open Source Free Version v1.5.10 · MIT License

## Quick Start

### Installation

Install this Skill into your Claude Code environment:

```bash
# Clone the repository
git clone https://github.com/Seanding1998/liuyao-frv.git ~/.codex/skills/liuyao-divination
```

### Dependencies

- Python 3.8+
- It is recommended to install `sxtwl` for accurate solar term calculations (supports all years):

```bash
pip install sxtwl
```

> If `sxtwl` is not installed, the script will automatically fall back to pure Python Four Pillars calculation (only supports the years 2026-2086, solar term boundary ±1 day).

### How to Use — Two Ways to Generate a Hexagram

#### Method 1: Automatic Coin Tossing (No Preparation Needed)

Just speak, and the Skill will activate automatically:

> "I can't find my ring, can you help me see where it is?"

The Agent will confirm the intention, then automatically toss three coins → generate Four Pillars → Ten-step analysis → generate HTML report.

---

####…
