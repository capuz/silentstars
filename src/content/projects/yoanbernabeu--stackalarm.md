---
repo: "yoanbernabeu/stackalarm"
name: "stackalarm"
description: "Security news for your stack: an agent skill and the CLI it relies on. Ask your AI agent \"anything today?\" and get a straight answer."
readmeQualityOk: true
url: "https://github.com/yoanbernabeu/stackalarm"
homepage: "https://stackalarm.dev/"
language: "Go"
languages: ["Go", "Astro"]
languagePcts: [61, 26]
topics: ["agent-skills", "claude-code", "cli", "cve", "golang", "security", "security-advisories", "vulnerability"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-23T09:52:23Z"
lastCommitAt: "2026-11-13T11:25:59Z"
lastReleaseAt: "2026-10-24T17:38:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 61
maintainers: ["yoanbernabeu"]
openGraphImageUrl: "https://opengraph.githubassets.com/061c924c9e96162fd86352da598ef1debb620c332407af2b47fa0ef7b4427292/yoanbernabeu/stackalarm"
---

# stackalarm

**Type `/stackalarm` in your AI agent and get a straight answer about your project's security today.**

stackalarm is an agent skill and the CLI it relies on. Open a project in Claude Code, Codex, Cursor or another agent, run the skill, and the agent tells you what in this week's security news affects *this* repository, how urgent it is, and what to change.

**[stackalarm.dev](https://stackalarm.dev)**: what it does and an example answer. **[Documentation](https://stackalarm.dev/docs/)**: the skill, every CLI option, the scheduled watch, the sources.

## How it works

- **The skill is the analyst.** It reads the project (manifests, lockfiles, Dockerfiles, CI, git remotes), runs the CLI, completes it with a web search and your ecosystem's audits (`composer audit`, `npm audit`, `pip-audit`, `govulncheck`…), judges what applies, and offers to fix what lives in the repository, one change at a time, after asking. It never pushes, deploys or touches a server.
- **The CLI is its eyes.** It reads more than 270 sources first-hand: project and vendor announcements, the GitHub Advisory Database, OSV.dev, the NVD and EUVD CVE databases, CERTs, CISA KEV, catalogs of public…
