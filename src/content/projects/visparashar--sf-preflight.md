---
repo: "visparashar/sf-preflight"
name: "sf-preflight"
description: "Know what a Salesforce change will set off before it ships: blast-radius analysis for flows, Apex, validation rules and permissions."
readmeQualityOk: true
url: "https://github.com/visparashar/sf-preflight"
homepage: "https://visparashar.github.io/sf-preflight/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["agentforce", "apex-framework", "ci", "devops", "flows", "impact-analysis", "mcp", "salesforce", "salesforce-developers", "sfdx"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-04T19:13:05Z"
lastCommitAt: "2026-10-25T08:41:03Z"
lastReleaseAt: "2026-10-09T04:27:01Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 52
maintainers: ["visparashar", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1404757509/e0a404de-c27e-4eea-b0d4-33df4a04c2c1"
discussionCount: 1
---

**Preflight checks for Salesforce changes: know what a change will set off — before it ships.**

AI coding agents and Headless 360 make Salesforce changes cheap to produce, but verifying them
is still slow and manual. `sf-preflight` reads your SFDX project and a git diff, follows the
change through the org's order of execution — flows, triggers, validation rules, roll-ups,
permissions — and reports the blast radius, the risks and the tests that matter.

It is open source, runs offline on your source code, and needs no org credentials. (The one request it
makes on its own is a daily check for a newer version; see [Update notices](#update-notices).)

> **Status:** early (0.x). The CLI, MCP server, GitHub Action, test generation, Agentforce
> action verification, the quality gate and evidence packs work today; org context is in beta.
> See the [roadmap](https://github.com/visparashar/sf-preflight/blob/HEAD/docs/ROADMAP.md). Feedback and contributions are very welcome.

**Website:** <https://visparashar.github.io/sf-preflight/> · **Demo videos:** <https://visparashar.github.io/sf-preflight/demos.html>

## What it finds

| Finding | Why it matters |
|---|---|
| **Recursion cycles** |…
