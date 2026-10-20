---
repo: "hronaut/hronaut"
name: "hronaut"
description: "The browser your coding agent can come back to — visible, persistent, isolated workspaces over MCP."
readmeQualityOk: true
url: "https://github.com/hronaut/hronaut"
homepage: "https://hronaut.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-agents", "browser-automation", "chromium", "coding-agents", "developer-tools", "electron", "mcp", "model-context-protocol", "persistent-browser", "playwright"]
stars: 6
forks: 1
openIssues: 28
closedIssues: 113
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-23T21:30:38Z"
lastCommitAt: "2026-10-20T08:49:31Z"
lastReleaseAt: "2026-08-24T22:14:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 66
maintainers: ["Hronom", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1344235633/37bdee56-a18e-46ed-9b4a-90c9d6e635dc"
fundingLinks: ["PATREON:https://patreon.com/Netroforge", "OPEN_COLLECTIVE:https://opencollective.com/netroforge", "KO_FI:https://ko-fi.com/netroforge"]
discussionCount: 2
---

# Hronaut

Hronaut is a visible, persistent Electron browser that exposes durable agent workspaces through MCP. It keeps the browser open independently of any individual AI session, so people can watch, pause, and take over while agents work in separate local browser profiles.

[Website](https://hronaut.dev) · [Setup](https://hronaut.dev/setup) · [Browser MCP decision guide](https://hronaut.dev/browser-mcp-guide) · [Downloads](https://github.com/hronaut/hronaut/releases/latest) · [Issues](https://github.com/hronaut/hronaut/issues) · [Detailed reference](https://github.com/hronaut/hronaut/blob/HEAD/REFERENCE.md)

## Where Hronaut fits in your agent stack

Hronaut is a local, visible MCP execution layer for agents that already have their own orchestration. The caller keeps workflow and orchestration state; Hronaut binds each browser command to a tool contract and a named local workspace with its own profile, account, origin, and tab context. People can watch, pause, approve, or take over, and the caller can require bounded browser evidence before it treats an external action as complete.

| Responsibility | Owner |
| --- | --- |
| Plan the workflow and retain task state | Your SDK,…
