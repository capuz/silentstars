---
repo: "AhmetErenLapanta/TeamHandbook"
name: "TeamHandbook"
description: " Manage your team's Claude Code setup from one git repository: approve a skill, an MCP server, or a slash command once, and every teammate's copy picks it up."
readmeQualityOk: true
url: "https://github.com/AhmetErenLapanta/TeamHandbook"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai-agents", "claude", "claude-code", "developer-tools", "mcp", "skills", "typescript"]
stars: 6
forks: 1
openIssues: 8
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-12T12:35:52Z"
lastCommitAt: "2026-11-18T12:04:04Z"
lastReleaseAt: "2026-09-22T12:21:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 52
maintainers: ["AhmetErenLapanta"]
openGraphImageUrl: "https://opengraph.githubassets.com/b18319c5816be48492978c727a738878b43eeeba317b44143c3a73befb79b958/AhmetErenLapanta/TeamHandbook"
---

# TeamHandbook

## Hand your sprint to agents that already know how your team works.

- **TeamHandbook Orchestrator**: in the browser. Your tickets are done by your own Claude Code, and you review the change.
- **TeamHandbook plugin**: inside Claude Code. It turns the work your team repeats into skills and gets them to everyone.

Install both:

```sh
claude plugin marketplace add AhmetErenLapanta/TeamHandbook && claude plugin install handbook@teamhandbook && npx teamhandbook-orchestrator
```

Only the orchestrator:

```sh
npx teamhandbook-orchestrator
```

Only the plugin, inside Claude Code:

```
/plugin marketplace add AhmetErenLapanta/TeamHandbook
/plugin install handbook@teamhandbook
```

The orchestrator with the installer instead of npx:

```sh
curl -fsSL https://github.com/AhmetErenLapanta/TeamHandbook/releases/download/handbook-orchestrator-latest/install.sh | sh && handbook-orchestrator
```
