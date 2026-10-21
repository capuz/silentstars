---
repo: "with-logic/crew"
name: "crew"
description: "A package manager for agent skills."
readmeQualityOk: true
url: "https://github.com/with-logic/crew"
homepage: "https://crew.logic.inc"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 48
forks: 3
openIssues: 20
closedIssues: 27
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-20T07:11:12Z"
lastCommitAt: "2026-10-21T21:15:12Z"
lastReleaseAt: "2026-07-06T13:59:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["stevekrenzel", "dependabot[bot]", "jgarms"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e4334f82ec56422ecda3161fb160e5d65a7098bc0dbced8922fc80e0ee725e2/with-logic/crew"
---

**A package manager for [agent skills](https://agentskills.io/specification).**

Install a skill once and `crew` copies it into every supported coding agent.
Share team skills through git, keep them reviewed in PRs, and roll updates out
without hand-copying folders between tools.

Homecrew is an open-source project by [Logic, Inc](https://logic.inc).

```
crew tap add @acme/skills
crew install acme/team-baseline
crew autoupdate enable
```

Three commands. A new hire goes from empty laptop to "they know how we ship
code" in about two minutes — across Claude Code, Codex, Cursor, Gemini CLI,
GitHub Copilot, Goose, and [every other supported agent](#agents).

---

## Why Homecrew

> **Your team has great skills. You should have all of them.**

Right now, the best prompts and agent playbooks either sit on one person's
machine or get copy-pasted through gists and Slack messages that nobody keeps
current. Homecrew gives them install commands, source tracking, and a reliable
update path.
Anyone can publish. Anyone can install.

- **Publish a skill.** Any git repo with a `SKILL.md` at the root is
  installable. Push to GitHub, send the link — `crew install @you/skill` and
  your friend has…
