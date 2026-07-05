---
repo: "emergencescience/histrategy"
name: "histrategy"
description: "LLM Three Kingdoms Strategy Game"
originalDescription: "LLM三国策略游戏"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/emergencescience/histrategy"
homepage: "https://emergence.science/games/histrategy"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["aigenerated", "llm", "narrative-game", "threekingdoms"]
stars: 19
forks: 6
openIssues: 10
closedIssues: 25
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-23T08:37:20Z"
lastCommitAt: "2026-07-05T06:33:40Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["symbolscience", "emergencescience"]
openGraphImageUrl: "https://opengraph.githubassets.com/a066699c63c1e2641a4faeb9fcadefab54ac8b0293ed28b21b0cd31bd5a6e01c/emergencescience/histrategy"
---

# Histrategy (Three Kingdoms Strategy)

**An open-source, AI-powered historical strategy game.**

> *In 207 AD, the Han dynasty crumbles. Warlords vie for control of the realm. You take command — write your own chapter in history. Or re-live the chaos of 44 BC Rome, where Octavian, Antony, and Cleopatra struggle for supremacy.*

</p>

---

## Scenarios

| Scenario | Year | Factions | Language |
|----------|------|----------|----------|
| **Three Kingdoms** | 207 AD | Cao Cao, Liu Bei, Sun Quan | English, 中文 |
| **Rome Triumvirate** | 44 BC | Octavian, Antony, Cleopatra, Senate | English, 中文 |

## Quick Start

### Recommended: V1 Engine

```bash
pip install histrategy-sdk
export HISTRATEGY_ENGINE=v1
export DEEPSEEK_API_KEY="sk-..."
```

```python
from histrategy_sdk import Room

# Three Kingdoms — English
room = Room.create("my-game", faction="cao", lang="en")
result = room.play("Attack Xinye with 50,000 troops")
print(result["narrative"])

# Rome Triumvirate — English
room = Room.create("rome", faction="octavian", scenario="rome-triumvirate", lang="en")
result = room.play("Secure the Senate's support against Antony")
```

### From Source

```bash
git clone…
