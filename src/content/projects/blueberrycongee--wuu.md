---
repo: "blueberrycongee/wuu"
name: "wuu"
description: "Open-source BYOK AI coding agent with a desktop app, scriptable CLI, and built-in multi-agent orchestration. Written in Go."
readmeQualityOk: true
url: "https://github.com/blueberrycongee/wuu"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [55, 34]
topics: ["ai", "automation", "byok", "cli", "coding-agent", "developer-tools", "electron", "golang", "multi-agent"]
stars: 48
forks: 10
openIssues: 0
closedIssues: 74
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-04-06T18:59:44Z"
lastCommitAt: "2026-09-11T08:15:11Z"
lastReleaseAt: "2026-07-16T04:22:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 45
maintainers: ["blueberrycongee"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fb2f10d199e544710789329da63342e6fb8d79b2f7b2144abf613687ee40d94/blueberrycongee/wuu"
---

<h1 align="center">wuu</h1>

  <p>
  </p>
  <p>
  </p>
</div>

If you have used OpenCode, Claude Code, or Codex, wuu will feel familiar. The shortest description is: **a desktop GUI for the local coding-agent workflow, built on an extension platform**.

You still open a project and work with an agent. wuu puts the rest of that workflow into one visible workspace: projects and conversations on the left; the current task in the center; files, diffs, terminals, browser, skills, and model settings alongside it.

wuu is independently developed and is not an official client for OpenCode, Claude Code, or Codex.

In our internal benchmark on real code repositories, standard wuu sessions cost about half as much per successful fix as [pi](https://github.com/badlogic/pi-mono).

## Built to be extended

wuu's main development focus is its extension system: a plugin platform so the ecosystem can grow the product without forking it.

- **One package, many capabilities.** A Wuu Plugin is an installable, upgradeable package that can add agent tools, context, desktop views, themes, settings, Skills, Hooks, MCP servers, and commands together, with one trust and upgrade lifecycle.
- **Feature…
