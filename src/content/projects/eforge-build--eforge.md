---
repo: "eforge-build/eforge"
name: "eforge"
description: "Open source agentic build system - transforms specifications into verified source code with blind adversarial review"
url: "https://github.com/eforge-build/eforge"
homepage: "https://www.eforge.build"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-sdk", "ai-agents", "claude-code", "cli", "code-review", "typescript"]
stars: 68
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-03-15T14:47:16Z"
lastCommitAt: "2026-06-27T00:47:52Z"
lastReleaseAt: "2026-04-04T18:17:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 43
maintainers: ["markschaake"]
openGraphImageUrl: "https://opengraph.githubassets.com/363daff1c1ae4b9a424e332da564b7cff12765c0f36049929e5a52f3defe124d/eforge-build/eforge"
---

# eforge

> **Public docs:** [https://eforge.build/docs](https://eforge.build/docs) - Getting started, concepts, configuration, and the canonical reference docs for users and agents. Agent-readable artifacts at [/llms.txt](https://eforge.build/llms.txt).

eforge is an open source build-engine kernel surrounded by extensible workflow power. Normalized build source goes in; reviewed, validated code comes out. The small kernel consumes normalized build source, orchestrates dependency-aware branch and worktree execution, runs conservative build/review/validation gates, emits typed events, and leaves input authoring surfaces and richer workflow UX to optional extensions, `eforge-playbooks`, session plans, wrapper apps, and host integrations. The build phase runs in the background while you plan the next thing.

Drive eforge from Pi, Claude Code, or the CLI. Pipeline stages delegate to either pi-agent-core or the Claude Agent SDK - the interface you drive, the input surface you author in, and the harness that executes are independent. Pi is the recommended eforge execution harness for new users: provider-flexible, local, inspectable agent orchestration where runtime choice, cost, and…
