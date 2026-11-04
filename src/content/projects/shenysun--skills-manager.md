---
repo: "shenysun/skills-manager"
name: "skills-manager"
description: "CLI-first hub for agent skills: one npx install, manage in chat, distribute to 70+ agents"
readmeQualityOk: true
url: "https://github.com/shenysun/skills-manager"
homepage: "https://www.npmjs.com/package/skills-manager-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent-skills", "ai-agents", "claude-code", "cli", "codex", "cursor", "opencode", "skill-manager", "skills", "typescript"]
stars: 221
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-08-26T09:34:13Z"
lastCommitAt: "2026-11-04T08:03:58Z"
lastReleaseAt: "2026-10-27T03:20:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 28
maintainers: ["shenysun"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d9adcfee9ccc77d44d41b85fc1934ce6767f84d59ab306c33dea31fcfba6d61/shenysun/skills-manager"
---

# Skills Manager

**English** | [简体中文](https://github.com/shenysun/skills-manager/blob/HEAD/README.zh-CN.md)

Manage your agent skills **from the conversation**: one `npx` command installs the manager skill, and from then on you just ask your agent — install, import, distribute, update, backfill provenance. Works with any skill-loading agent (Claude Code, Codex, Cursor, …).

> **CLI-first, conversation-driven.** This is `skills-manager-cli` — a terminal/npm tool with an optional local web dashboard. It is not a desktop app; if you were looking for the desktop application of the same name, that is a different project ([xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager)).

**What makes it different:**

- **One hub, every agent** — a single content library (`~/.skills-manager`) distributes any subset to any of the 70+ catalog agents, symlink or copy per target, with stale-copy detection and rollback.
- **Five source types** — git repos and URLs, direct download URLs (SKILL.md / zip / tar), local zip archives, Claude plugin marketplaces, and well-known discovery indexes.
- **Updates that don't cry wolf** — the update anchor is the git tree SHA of the…
