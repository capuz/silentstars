---
repo: "cyanide-burnout/TurboJedi"
name: "TurboJedi"
description: "Turbo Vision viewer of the systemd journal, scriptable in Lua, with an MCP server for AI agents"
readmeQualityOk: true
url: "https://github.com/cyanide-burnout/TurboJedi"
language: "C++"
languages: ["C++"]
languagePcts: [85]
topics: ["cpp", "journal", "journald", "linux", "log-viewer", "ncurses", "systemd", "terminal", "tui", "turbo-vision"]
stars: 45
forks: 0
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 10
createdAt: "2026-10-23T20:39:22Z"
lastCommitAt: "2026-11-17T12:13:52Z"
lastReleaseAt: "2026-11-07T12:08:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a2ed0e3bbbb4caf7ad776ee058a9538eb2c3b681387ed8ef5dbb14c28a99567f/cyanide-burnout/TurboJedi"
---

# TurboJedi

Turbo Journald Interface (J[e]DI) — a Turbo Vision viewer of the systemd journal. Every window is a journal client of its own:
its filter goes to the journal as a query, so a window of one unit or of errors only reads just those
entries, while other windows follow the whole system next to it.

It is scriptable in Lua 5.4: plugins make the Actions menu of an entry and watch the journal as it comes, see
[PLUGINS.md](https://github.com/cyanide-burnout/TurboJedi/blob/HEAD/PLUGINS.md). It is open to AI agents as well: `turbojedi-mcp.py`, a server of the Model Context Protocol,
gives Claude Code, Codex or another agent the windows you have open, over SSH; the agent finds and points at entries
on your screen, you act, see [MCP.md](https://github.com/cyanide-burnout/TurboJedi/blob/HEAD/MCP.md).

Built on [magiblot/tvision](https://github.com/magiblot/tvision), libsystemd, PCRE2, Lua 5.4 and libcurl.

## Features

- Windows with journals and filters of their own: journals of this machine, of every machine or of a directory,
  one mounted from another machine over SSH or NFS as well,
  levels, source (unit, identifier, command, transport, boot, user, machine, PID,
  any…
