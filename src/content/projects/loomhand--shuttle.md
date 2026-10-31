---
repo: "loomhand/shuttle"
name: "shuttle"
description: "Local computer-use host: agents drive your own macOS or Windows desktop over MCP stdio, with your own model keys and kill switch, allowlist and confirm guard rails."
readmeQualityOk: true
url: "https://github.com/loomhand/shuttle"
homepage: "https://loomhand.github.io/shuttle/"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["agpl", "ai-agents", "byok", "computer-use", "linux", "macos", "mcp", "rust", "typescript", "windows"]
stars: 12
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-17T09:38:43Z"
lastCommitAt: "2026-10-31T01:59:43Z"
lastReleaseAt: "2026-10-20T05:26:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["CMGS", "tonicmuroq"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb91f4f2745c99e66c6a31d107e18d0e670a79b0173ee15c23171b6ae5285783/loomhand/shuttle"
---

# shuttle

shuttle (binary `shuttle`, app Shuttle) is a computer-use host that runs on your own machine. Local agents such as Claude Code, Codex and Cursor start it as an MCP server over stdio and drive your desktop through it: whole GUI plans in one call (`gui_plan`), scripts against a desk API (`script_run`), single accessibility-tree calls (`desk`) and screenshots. Model calls for target picking, grounding and checks go to an OpenAI-compatible endpoint and key you configure, OpenRouter by default (bring your own key).

shuttle is part of [loomhand](https://github.com/loomhand). Its input, capture and window layer is [cua-driver](https://github.com/loomhand/cua) (MIT).

**Documentation: [loomhand.github.io/shuttle](https://loomhand.github.io/shuttle/)** (source in [`docs/`](https://github.com/loomhand/shuttle/blob/HEAD/docs/)).

## Status

**v0.1.33 is the current release.** On macOS and Windows the daemon drives the desktop through the bundled cua-driver (`desk`, `screenshot`, `gui_plan`, `script_run`), calls models with your own key, and has its safety controls: kill switch and hotkey, indicator, confirm mode and app allowlist. On Linux (X11) the daemon drives the desktop over…
