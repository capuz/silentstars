---
repo: "agent-kit-startup/agent-kit"
name: "agent-kit"
description: "Plan, build, review, and ship to the real world. Full opinionated harness with built-in Project Management and DevSecOps to code and maintain software."
readmeQualityOk: true
url: "https://github.com/agent-kit-startup/agent-kit"
homepage: "https://missionkit.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [71]
topics: ["agent-kit", "ai-assisted-development", "cli", "context-management", "cursor", "developer-tools", "handoff", "monorepo", "prompt-engineering", "skills"]
stars: 24
forks: 2
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-05T16:30:55Z"
lastCommitAt: "2026-11-25T03:18:42Z"
lastReleaseAt: "2026-07-28T05:40:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 52
maintainers: ["agent-kit-startup", "agent-kit-public-sync[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e756dab0a57ddb2cbba61328d6e90ddf66d3948fa5b3b14bf0eada9cf720dc1/agent-kit-startup/agent-kit"
fundingLinks: ["GITHUB:https://github.com/agent-kit-startup"]
---

# Mission Kit

[Watch the demo on YouTube](https://www.youtube.com/watch?v=9mrAg6Mczfg) · [missionkit.io](https://missionkit.io) · [HOL Registry](https://hol.org/registry/plugins/agent-kit-startup%2Fagent-kit)

**Mission Kit** is the building gear pack for AI coding agents: orchestrated plans with to-dos, human confirmation gates, and a staging-then-prod git flow. You describe the goal: it writes a plan, runs it one unit at a time, and never promotes to production without your explicit yes.

Ships as **Agent Kit** on npm (`@dadado/agent-kit-cli`).

## Install

From your project root:

```bash
npx @dadado/agent-kit-cli@latest install
```

Node.js 22.12+. Git is recommended; the staging and prod routines depend on it. Use `@latest` so npx does not reuse a stale cached CLI. Pin `@x.y.z` when you need a reproducible install. Non-interactive: add `-y` and `--yes`.

`npx` is ephemeral, so bare `agent-kit` will not be on your PATH yet. If you hit `command not found`, run:

```bash
npx @dadado/agent-kit-cli@latest setup-global
```

or keep prefixing commands with `npx @dadado/agent-kit-cli@latest`.
