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
stars: 19
forks: 0
openIssues: 26
closedIssues: 252
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-28T06:03:03Z"
lastCommitAt: "2026-08-28T14:23:40Z"
lastReleaseAt: "2026-03-25T23:44:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["pierrecabriere", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/72fca645badfc9f23ca020a806c5a34858fb05206e14479e964a76557dd22eb1/appstrate/appstrate"
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
