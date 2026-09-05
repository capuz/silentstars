---
repo: "luongnv89/skills"
name: "skills"
description: "Supercharge your AI agents/bots with reusable skills"
readmeQualityOk: true
url: "https://github.com/luongnv89/skills"
homepage: "http://luongnv.com/skills/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [68, 27]
topics: ["agent", "skills"]
stars: 123
forks: 17
openIssues: 21
closedIssues: 76
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-03T23:55:30Z"
lastCommitAt: "2026-09-05T07:50:01Z"
lastReleaseAt: "2026-03-18T00:58:52Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 94
undervaluedScore: 34
maintainers: ["luongnv89"]
openGraphImageUrl: "https://opengraph.githubassets.com/74cded61f6c32ac4ed51ce1db7fa4e0c6c9d70ba7e73e2a13c88631c3d01ffcf/luongnv89/skills"
---

</p>

</p>

# Install expert workflows for AI coding agents

One command drops a tested, versioned skill into your agent. No more ad-hoc prompts. The same rigorous steps run every time.

Skills are independent files. Works with Claude Code, Cursor, Windsurf, GitHub Copilot, OpenAI Codex, OpenCode, Google Antigravity (`install.sh:23`).

[**Browse catalog**](#skill-catalog) | [**Install**](#install)

---

## Install

> Validate this runbook: `./scripts/validate-install.sh --check`

Pick one:

```bash
npx skills add https://github.com/luongnv89/skills --skill code-review
```

Pick several:

```bash
npx skills add https://github.com/luongnv89/skills --skill code-review --skill auto-push --skill test-coverage
```

All of them:

```bash
npx skills add https://github.com/luongnv89/skills
```

### agent-skill-manager

Use [agent-skill-manager](https://github.com/luongnv89/agent-skill-manager) (`asm`) for a single TUI/CLI across agents:

```bash
npm install -g agent-skill-manager
asm install github:luongnv89/skills
```

```bash
asm search   # find by name or description
asm list     # show installed skills
```

<details>
<summary>Other install methods</summary>

**Remote (no clone)**…
