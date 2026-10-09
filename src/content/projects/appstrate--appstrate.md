---
repo: "appstrate/appstrate"
name: "appstrate"
description: "[⚡️] The open‑source managed agent runtime platform."
readmeQualityOk: true
url: "https://github.com/appstrate/appstrate"
homepage: "https://appstrate.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 20
forks: 1
openIssues: 76
closedIssues: 466
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-28T06:03:03Z"
lastCommitAt: "2026-10-09T18:56:53Z"
lastReleaseAt: "2026-03-25T23:44:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 50
maintainers: ["pierrecabriere", "otarbes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9072ff6fcccc0cf1baa364287ae3fe80e06b82be6084f8c5bec46c6a35523402/appstrate/appstrate"
---

# Appstrate

An open-source platform for running autonomous AI agents in sandboxed Docker containers. Each agent receives its full context (prompt, input, credentials) and runs to completion without human interaction — then returns structured results. Connect OAuth/API key services, click "Run" or schedule via cron, and let the AI handle the rest.

## Concepts

Appstrate uses the [AFPS](https://github.com/appstrate/afps-spec) (Agent Format Packaging Standard) packaging model. Everything is a **package** with a manifest, a version, and a scope.

```
                ┌───────────────────────────────┐
  Goal          │  Agent                        │  "What should the AI accomplish?"
                │  prompt.md + manifest.json    │  Runs autonomously in a container.
                ├───────────────────────────────┤
  Capability    │  Skill       (declarative)    │  Reusable instructions (SKILL.md).
                │  MCP server  (executable)     │  Packaged MCP Bundle exposing tools.
                ├───────────────────────────────┤
  Connection    │  Integration                  │  OAuth 2.0, API key, basic, mTLS,
                │                               │  or custom auth for…
