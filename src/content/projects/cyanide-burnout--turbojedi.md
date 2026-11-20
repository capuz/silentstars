---
repo: "cyanide-burnout/TurboJedi"
name: "TurboJedi"
description: "Turbo Vision viewer of the systemd journal, scriptable in Lua, with an MCP server for AI agents"
readmeQualityOk: true
url: "https://github.com/cyanide-burnout/TurboJedi"
language: "C++"
languages: ["C++"]
languagePcts: [79]
topics: ["cpp", "journal", "journald", "linux", "log-viewer", "ncurses", "systemd", "terminal", "tui", "turbo-vision"]
stars: 47
forks: 0
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 1
recentReleases: 10
createdAt: "2026-10-23T20:39:22Z"
lastCommitAt: "2026-11-20T12:22:36Z"
lastReleaseAt: "2026-11-07T12:08:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/59a39d980ed1604d6cc32b95d98f00fbc52f11e65b0dc4f4083f5031c3e77836/cyanide-burnout/TurboJedi"
---

# TurboJedi

Turbo Journald Interface (J[e]DI) — a Turbo Vision viewer of the systemd journal. Every window is a journal client of its own:
its filter goes to the journal as a query, so a window of one unit or of errors only reads just those
entries, while other windows follow the whole system next to it.

It is scriptable in Lua 5.4: plugins make the Actions menu of an entry and watch the journal as it comes, see
[plugins](https://github.com/cyanide-burnout/TurboJedi/blob/HEAD/Documentation/PLUGINS.md). It is open to AI agents as well: `turbojedi-mcp.py`, a server of the Model Context Protocol,
gives Claude Code, Codex or another agent the windows you have open, over SSH; the agent finds and points at entries
on your screen, you act, see [MCP.md](https://github.com/cyanide-burnout/TurboJedi/blob/HEAD/Documentation/MCP.md). And it asks a language model itself: Arrakis explains the
entries you mark or the errors of a window, answers questions about them, by a model on your machine or a service of
your choice, see [ARRAKIS.md](https://github.com/cyanide-burnout/TurboJedi/blob/HEAD/Documentation/ARRAKIS.md).
