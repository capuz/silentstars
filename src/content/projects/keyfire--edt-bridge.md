---
repo: "keyfire/edt-bridge"
name: "edt-bridge"
description: "Live 1C:EDT semantic model over MCP – read + write/refactor + debug, localhost. Eclipse/OSGi plugin for AI agents and tools"
readmeQualityOk: true
url: "https://github.com/keyfire/edt-bridge"
homepage: "https://docs.keyfire.ru/edt-bridge/"
language: "Java"
languages: ["Java"]
languagePcts: [80]
stars: 30
forks: 5
openIssues: 0
closedIssues: 30
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-06-25T11:55:40Z"
lastCommitAt: "2026-11-13T05:52:27Z"
lastReleaseAt: "2026-07-19T20:03:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 45
maintainers: ["keyfire"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e378fd2f6a49d163c7ec66216ad956e65f46f659776dd2d34496d5281bf707a/keyfire/edt-bridge"
---

# EDT-Bridge

EDT-Bridge is a 1C:EDT plugin that provides AI agents and other tools with access to EDT's semantic
model over the Model Context Protocol (MCP). The plugin requires a running EDT instance with the
project open, either in the GUI or in headless mode.

The tools provide EDT diagnostics, metadata structure and types, semantic references, and the
platform Syntax Helper supplied with EDT. They validate queries against project metadata,
create and rename objects, and build and deliver them. They also support infobase operations and
debugging. These operations use EDT's own engine.

> The server is available only on localhost. Model-changing tools require a token and return a
> plan by default. Debug tools also require a token.

**English** · [Русский](https://github.com/keyfire/edt-bridge/blob/HEAD/docs/ru/README.ru.md)

**Documentation: [docs.keyfire.ru/edt-bridge](https://docs.keyfire.ru/edt-bridge/)**

Development notes and updates (in Russian): the [1C × AI: engineering workshop](https://t.me/ceh_1c_ai) Telegram channel.

## Install (recommended: pipx)

The [**edt-bridge-mcp**](https://github.com/keyfire/edt-bridge/blob/HEAD/python/README.md) wrapper runs as a stdio…
