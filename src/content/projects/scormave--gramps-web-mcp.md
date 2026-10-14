---
repo: "Scormave/gramps-web-mcp"
name: "gramps-web-mcp"
description: "MCP server for Gramps Web. Gives AI agents structured, tool-based access to family trees through the Model Context Protocol. Built with .NET 10."
readmeQualityOk: true
url: "https://github.com/Scormave/gramps-web-mcp"
language: "C#"
languages: ["C#"]
languagePcts: [94]
stars: 14
forks: 3
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 3
createdAt: "2026-06-23T18:24:49Z"
lastCommitAt: "2026-10-14T08:58:35Z"
lastReleaseAt: "2026-10-01T08:52:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["Scormave", "shanelord01"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b4a065bee2776fb6683080c3014686960e1dcf24fde3bb640d2915b6190e7c5/Scormave/gramps-web-mcp"
---

# gramps-web-mcp

> [!WARNING]
> **Update to 2.3.1 or later.** Before 2.3.1 the `update_*` tools could drop
> stored data that the call did not mention
> ([#5](https://github.com/Scormave/gramps-web-mcp/issues/5)). If you edited a
> tree with an earlier version,
> [check it for dropped data](#data-dropped-by-updates-before-231).

Companion MCP server for the [Gramps Web](https://www.grampsweb.org/)
open-source genealogy platform. It gives AI agents structured, tool-based
access to family trees through the Model Context Protocol.

This project is **not** a standalone genealogy UI or replacement for Gramps
Web. Run it alongside an existing Gramps Web instance; your users, trees,
media, permissions, and genealogy editing UI stay in Gramps Web.

## Features

- **Up to 29 MCP tools** — read, create, update, and delete people, families, events, places,
  sources, citations, notes, media, repositories, and tags
- **Search and browse** — full-text search and paginated object listing
- **Kinship tools** — ancestors, descendants, relationships, and timelines
- **Incremental links** — add or remove one event, child, citation, or note
  with `linkMode`, keeping every other link
- **Dates as…
