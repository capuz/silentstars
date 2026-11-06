---
repo: "wippyai/bee"
name: "bee"
description: "A distributed workspace and self-improving infrastructure"
readmeQualityOk: true
url: "https://github.com/wippyai/bee"
homepage: "https://bee.wippy.ai"
language: "Lua"
languages: ["Lua"]
languagePcts: [97]
topics: ["developer-tools", "golang", "lua", "terminal", "wippy", "agents", "ai", "harness", "llm", "rsi"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-07T17:46:29Z"
lastCommitAt: "2026-11-06T02:37:00Z"
lastReleaseAt: "2026-11-01T06:24:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 61
maintainers: ["wolfy-j"]
openGraphImageUrl: "https://opengraph.githubassets.com/f35e2b3ac67aaf5cf87aea4b23be29ea733f3eafa4e2f252814085dc5edbcd30/wippyai/bee"
---

Bee is a persistent workspace your coding agents extend, built on the
[Wippy runtime](https://github.com/wippyai/runtime). Claude Code, Codex,
Antigravity, Grok, Muse and OpenCode run as sessions with their own live
terminal windows, next to a shell, your applications and **Needs you**, where
every decision waits for you. Agents drive other agents and build applications
that you and they both use, and bees on all your machines join one hive.

> [!IMPORTANT]
> Bee is alpha software. Contracts still change between releases.

## Features

- **Every coding agent in one workspace:** Claude Code, Codex, Antigravity, Grok, Muse and OpenCode run as sessions with live terminal windows; close a window and the agent keeps working.
- **Agents drive agents:** a scoped MCP server lets any agent open other agents' sessions, send them work, wait for results and talk on durable threads.
- **Bring your own MCP client:** in the folder of a running Bee in this machine's hive (`bee hive init`), `bee mcp connect --name "Terminal Claude"` pairs a client through **Needs you** and prints Claude Code and Codex configuration once; **Agents → MCP clients → Revoke** cuts access.
- **Apps built on demand:**…
