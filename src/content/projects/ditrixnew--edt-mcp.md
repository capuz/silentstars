---
repo: "DitriXNew/EDT-MCP"
name: "EDT-MCP"
description: "MCP for 1C:EDT"
readmeQualityOk: true
url: "https://github.com/DitriXNew/EDT-MCP"
language: "Java"
languages: ["Java"]
languagePcts: [87]
topics: ["1c-enterprise", "edt", "mcp", "mcp-server"]
stars: 338
forks: 65
openIssues: 24
closedIssues: 455
watchers: 9
contributors: 18
recentReleases: 0
createdAt: "2026-01-03T05:33:11Z"
lastCommitAt: "2026-11-14T22:00:20Z"
lastReleaseAt: "2026-02-14T22:33:10Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 34
maintainers: ["DitriXNew", "Jimmo910", "z79284245932-design"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fdee9b94800d4dca20ee8d7ff5204180ccda07f19622bedb48c6f060b76325a/DitriXNew/EDT-MCP"
discussionCount: 2
---

> **Build & Unit Tests**, **E2E**, and **MCP Conformance** all run on stock GitHub-hosted runners (cloud CI) — no docker image, no self-hosted runner. E2E and Conformance run against **EDT 2026.2** (build 2026.2, Eclipse 4.38 / Java 25): the setup step installs a headless EDT of that version on the runner via `p2 director`. E2E additionally imports the test fixtures into an empty workspace via the plugin's headless bootstrap (`EDT_MCP_IMPORT_PROJECTS`) and skips the live-infobase tools, so no 1C platform is needed. Each badge reflects its latest run.

# EDT MCP Server

MCP (Model Context Protocol) server plugin for 1C:EDT, enabling AI assistants (Claude, GitHub Copilot, Cursor, etc.) to interact with EDT workspace.

> [!TIP]
> **Contributing / making changes?** Read [CLAUDE.md](https://github.com/DitriXNew/EDT-MCP/blob/HEAD/CLAUDE.md) first — it's the code-conduct "minefield map": hard don'ts and the stop-and-think-twice zones for this codebase (BM transactions, the bilingual ru/en model, cascading rename, etc.). Detailed how-to lives in the skills under `.claude/skills/`.

> [!TIP]
> **Using EDT-MCP on a 1C business project?** The client-neutral
> [business-project skills…
