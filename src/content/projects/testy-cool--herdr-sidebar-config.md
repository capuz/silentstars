---
repo: "testy-cool/herdr-sidebar-config"
name: "herdr-sidebar-config"
description: "Workspace → tab → agent sidebar preset for Herdr, with compact single-tab groups, readable task labels, and provider icons."
readmeQualityOk: true
url: "https://github.com/testy-cool/herdr-sidebar-config"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agents", "claude-code", "codex", "ghostty", "herdr", "herdr-plugin", "python", "sidebar", "terminal", "configuration"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-09-07T11:59:46Z"
lastCommitAt: "2026-10-23T09:33:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["testy-cool", "Mistakey", "clay-coffman"]
openGraphImageUrl: "https://opengraph.githubassets.com/55e628c00991099085f6a9fc246e26caa3cd83413db7a6bac744fa760ae9d16d/testy-cool/herdr-sidebar-config"
---

# Herdr Agent Sidebar

**See what each agent is doing, grouped by workspace and tab.**

Turn [Herdr](https://herdr.dev)'s Agents list into a compact task tree, with
readable labels, provider icons, **optional animated loaders**, and **automatic
dimming of inactive spaces and their agents**. This customizes the built-in
sidebar; it does not add a file explorer or another pane. **No Herdr fork or build.**

*Real settings and loader demo in Herdr 0.8.2 / Ghostty 1.3.1 on Linux.
Titles and states are demonstration data; the plugin and rendering are real.
[Capture details](https://github.com/testy-cool/herdr-sidebar-config/blob/HEAD/docs/demo.md).*

- **Find the right agent.** One-tab workspaces stay compact; multiple tabs get a
  tree. Working groups can move to the top without separating their agents.
- **Tell machines apart.** When you connect another machine, each agent row shows
  its machine name. A local-only session keeps the current compact rows. Install
  the plugin on the other machine too if you want its task labels and grouping.
- **Read the task.** Uses native conversation titles and local fallbacks—not
  another model call.
- **Name your agents.** If you keep one folder…
