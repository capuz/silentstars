---
repo: "toss/apps-in-toss-harness"
name: "apps-in-toss-harness"
description: "AI agent harness for Apps in Toss mini-app development — agent plugin, skills, and dev packages (pnpm monorepo)"
originalDescription: "AI agent harness for Apps in Toss mini-app development — agent plugin, skills, and dev packages (pnpm monorepo)"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/toss/apps-in-toss-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 193
forks: 7
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-08-26T04:53:56Z"
lastCommitAt: "2026-11-06T13:20:12Z"
lastReleaseAt: "2026-10-13T15:20:56Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 28
maintainers: ["DaveDev42", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b5ccda8362c94e7e98d33e04d7416e8c7e3d8ee278ecc78743e27bd4ffbc165/toss/apps-in-toss-harness"
---

**Korean** · [English](https://github.com/toss/apps-in-toss-harness/blob/HEAD/README.en.md)

# apps-in-toss-harness

This is a harness monorepo that lets you go from an empty directory all the way to launching an Apps in Toss mini-app, without leaving your AI coding agent (Claude Code, Codex, or Cursor). The agent plugin `ait` acts as the orchestrator, tying scaffolding, development, debugging, bundling, registration, and operations into a single flow. Scaffolding is based on `create-ait-app`. Documentation lookup and console integration are handled by two MCP servers that are enabled by default. Development and debugging tools such as devtools and debugger are wired in only when needed, as opt-in.

> [!IMPORTANT]
> **Use version 0.3.1 or later of the debug tools.** `@apps-in-toss/debugger` and `@apps-in-toss/debugger-client` (formerly `@apps-in-toss/debug-console`) changed both their names and their connection rules in 0.3.1. Both packages must be 0.3.1 or later to connect. Mixing them with 0.3.0 or earlier means they will not connect, and a "needs update" notice appears. The plugin `ait` must also be 0.3.1 or later to wire up the new names.
>
> | 0.3.0 or earlier | 0.3.1 or…
