---
repo: "2026heshao/dsh-armory"
name: "dsh-armory"
description: "All-in-one board for DeepSeek Harness: MCP manager + Skills + WorkBuddy experts (attach/switch/detach any time) + tool-usage tailor + three direct markets (WorkBuddy connectors, SkillHub 190k+ skills) with one-click install · DSH all-in-one dashboard: MCP/skills/experts can be attached or swapped at any time / tool ledger / direct install from three major markets"
originalDescription: "All-in-one board for DeepSeek Harness: MCP manager + Skills + WorkBuddy experts (attach/switch/detach any time) + tool-usage tailor + three direct markets (WorkBuddy connectors, SkillHub 190k+ skills) with one-click install · DSH 一体化看板：MCP/技能/专家随时挂换/工具账本/三大市场直连安装"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/2026heshao/dsh-armory"
homepage: "https://github.com/2026heshao/dsh-armory#readme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["ai-agent", "dashboard", "deepseek", "deepseek-harness", "dsh", "dsh-plugin", "mcp", "model-context-protocol", "skill-manager", "skills"]
stars: 112
forks: 16
openIssues: 1
closedIssues: 12
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T10:23:35Z"
lastCommitAt: "2026-11-12T11:39:40Z"
lastReleaseAt: "2026-10-23T11:50:26Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 39
maintainers: ["2026heshao", "kaikkouxiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f389e7be89e45470aaa911bd9befc60190c75bdc57b5a3a04b52fb6f3f7ea0c/2026heshao/dsh-armory"
---

# dsh-armory · Armory

Chinese | [English](https://github.com/2026heshao/dsh-armory/blob/HEAD/README.en.md)

> **You don't need to remember what's installed in DSH.**
> Armory brings MCP, skills, experts, plugins, and four markets into one panel: 316 connectors, 190k+ skills, and 429 experts. What's installed, what failed to connect, and which tools are consuming tokens are all visible as soon as you open it. Anything you need in a session can be called up directly.

## Install the panel

```sh
# npm (recommended, no build authorization needed)
dsh plugin --profile web add dsh-armory

# From GitHub
dsh plugin --profile web add github:2026heshao/dsh-armory
```

After installing, **fully quit DSH and then restart it**. A new line, "大肥鱼军械库" (Big Fat Fish Armory), will appear under "Global panel" in the top left. Click it to open the panel. The floating button in the bottom right and the bottom of the left sidebar also open it. On desktop, replace `--profile web` with `--profile desktop`.

You can keep just one of the three entry points or enable all of them. Switch them in "Entrances" at the top right of the panel. You can't end up with all three turned off and no way to open it.

>…
