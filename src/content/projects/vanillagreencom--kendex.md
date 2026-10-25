---
repo: "vanillagreencom/kendex"
name: "kendex"
description: "Package manager for agents, skills, hooks, and extensions. Author once, install on every harness. QOL features included."
readmeQualityOk: true
url: "https://github.com/vanillagreencom/kendex"
homepage: "https://kendex.ai"
language: "Shell"
languages: ["Shell", "Rust"]
languagePcts: [49, 24]
topics: ["agent-management", "agent-manager", "ai-agents", "pi-coding-agent", "pi-extension", "pi-package", "skill-manager"]
stars: 86
forks: 37
openIssues: 73
closedIssues: 1664
watchers: 1
contributors: 22
recentReleases: 10
createdAt: "2026-03-24T17:37:39Z"
lastCommitAt: "2026-10-25T08:16:55Z"
lastReleaseAt: "2026-09-23T04:28:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 47
maintainers: ["vanillagreen-fleet-lanes[bot]", "eaxeax"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f1760105c794a4105941c3e51a55a9f66f8a90d5939107ea91b065ebf1f936e/vanillagreencom/kendex"
---

# kendex <a href="https://daytona.io" target="_blank" rel="noopener"><picture><source media="(prefers-color-scheme: dark)" srcset="docs/images/daytona-startup-grid-dark-transparent.svg"><img src="docs/images/daytona-startup-grid-light-transparent.svg" alt="Daytona Startup Grid" height="36" align="absmiddle"></picture></a>

kendex is a desktop app and command-line tool for people who use AI coding tools such as Claude Code, Codex and Cursor. It manages agents, skills, hooks and other customizations: you set them up once and use them across your tools and projects.

## Features

- Installs customizations across your coding tools from one setup.
- Converts agent and skill files into the format each tool reads.
- Previews a package change before it applies it.
- Keeps a personal setup and a separate setup for each project.
- Adopts customizations you set up by hand with `kendex adopt <kind> <name>`. For a project skill, the real directory moves to `.agents/skills/<name>`. With symlink delivery, separate coding-tool positions become kendex-managed links, including links you made by hand. With copy delivery, they become copies.
- Browses the [community marketplace](https://kendex.ai)…
