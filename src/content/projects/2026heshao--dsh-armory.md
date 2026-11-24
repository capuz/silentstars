---
repo: "2026heshao/dsh-armory"
name: "dsh-armory"
description: "All-in-one board for DeepSeek Harness: MCP manager + Skills + WorkBuddy experts (attach/switch/detach any time) + tool-usage tailor + three direct markets (WorkBuddy connectors, SkillHub 190k+ skills) with one-click install · DSH all-in-one dashboard: MCP/skills/experts that can be attached, switched, or detached anytime / tool ledger / three direct markets with one-click install"
originalDescription: "All-in-one board for DeepSeek Harness: MCP manager + Skills + WorkBuddy experts (attach/switch/detach any time) + tool-usage tailor + three direct markets (WorkBuddy connectors, SkillHub 190k+ skills) with one-click install · DSH 一体化看板：MCP/技能/专家随时挂换/工具账本/三大市场直连安装"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/2026heshao/dsh-armory"
homepage: "https://github.com/2026heshao/dsh-armory#readme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["ai-agent", "dashboard", "deepseek", "deepseek-harness", "dsh", "dsh-plugin", "mcp", "model-context-protocol", "skill-manager", "skills"]
stars: 136
forks: 20
openIssues: 1
closedIssues: 26
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T10:23:35Z"
lastCommitAt: "2026-11-24T01:59:53Z"
lastReleaseAt: "2026-10-23T11:50:26Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 38
maintainers: ["2026heshao", "kaikkouxiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/e104164c132e684d8b0fde5e7f2e754d6482184d921cdcbbddd8944d193b4eb9/2026heshao/dsh-armory"
---

# dsh-armory · Armory

Chinese | [English](https://github.com/2026heshao/dsh-armory/blob/HEAD/README.en.md)

> **You don't need to remember what's installed in DSH.**
> Armory brings MCP, skills, experts, plugins, and four marketplaces into one panel: 316 connectors, 190,000+ skills, and 429 experts. What's installed, what's connected, and which tools are consuming tokens are visible as soon as you open it. Whatever a session needs can also be called up directly.

## Install the panel

```sh
# npm (recommended, no build step required)
dsh plugin --profile web add dsh-armory

# From GitHub
dsh plugin --profile web add github:2026heshao/dsh-armory
```

After installing, **fully quit DSH and then restart it**. A new row, Dafeiyu Armory (大肥鱼军械库), appears in the top-left corner under the Global Panel. Click it to open. The floating button in the bottom-right corner and the bottom of the left sidebar also open it. On desktop, replace `--profile web` with `--profile desktop`.

You can keep just one of the three entry points or enable all of them. Switch them in the Entry menu at the top-right of the panel. You can't end up with all three disabled and no way to open it.
