---
repo: "baekenough/oh-my-customcode"
name: "oh-my-customcode"
description: "oh-my-zsh style customization framework for Claude Code"
readmeQualityOk: true
url: "https://github.com/baekenough/oh-my-customcode"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [60]
stars: 34
forks: 6
openIssues: 4
closedIssues: 1047
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-25T12:25:34Z"
lastCommitAt: "2026-08-30T00:45:08Z"
lastReleaseAt: "2026-02-05T08:57:30Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 44
maintainers: ["baekenough", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1141781517/251c4ed9-1f58-40ef-9fa8-dee5579b2545"
fundingLinks: ["GITHUB:https://github.com/baekenough"]
discussionCount: 0
---

</div>

# oh-my-customcode

> **Your AI Agent Stack. Compiled, Not Configured.**

**[한국어 문서 (Korean)](https://github.com/baekenough/oh-my-customcode/blob/HEAD/README_ko.md)**

50 agents. 115 skills. 23 rules. One command.

```bash
npm install -g oh-my-customcode && cd your-project && omcustom init
```

---

## Philosophy

oh-my-customcode is built on two ideas:

**1. Agent systems are compiled, not configured.**

| Compile Concept | oh-my-customcode |
|----------------|-----------------|
| Source code | `.claude/skills/` — reusable knowledge and workflows |
| Build artifacts | `.claude/agents/` — executable specialists assembled from skills |
| Compiler | `mgr-sauron` (R017) — structural verification and integrity |
| Spec | `.claude/rules/` — constraints and build rules |
| Linker | Routing skills — connect agents to tasks |
| Standard library | `guides/` — shared reference documentation |

Skills are source. Agents are compiled output. Sauron verifies the build. This separation means skills evolve independently of agents, and agents can be recompiled from updated skills at any time.

</p>

**2. If it can't be done, make it work.**

When no specialist exists for a task,…
