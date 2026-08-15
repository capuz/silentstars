---
repo: "DitriXNew/EDT-MCP"
name: "EDT-MCP"
description: "MCP for 1C:EDT"
readmeQualityOk: true
url: "https://github.com/DitriXNew/EDT-MCP"
language: "Java"
languages: ["Java"]
languagePcts: [85]
topics: ["1c-enterprise", "edt", "mcp", "mcp-server"]
stars: 242
forks: 51
openIssues: 27
closedIssues: 179
watchers: 9
contributors: 14
recentReleases: 0
createdAt: "2026-01-03T05:33:11Z"
lastCommitAt: "2026-08-15T04:04:37Z"
lastReleaseAt: "2026-02-14T22:33:10Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 30
maintainers: ["Jimmo910", "DitriXNew", "057-Pavel"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f9018c4b6a378ecce462ae4c3e10e857a9ffaa219ae697e9932ef472342e3c7/DitriXNew/EDT-MCP"
discussionCount: 0
---

> **Build & Unit Tests**, **E2E**, and **MCP Conformance** all run on stock GitHub-hosted runners (cloud CI) — no docker image, no self-hosted runner. E2E and Conformance run against **EDT 2026.2** (build 2026.2, Eclipse 4.38 / Java 25): the setup step installs a headless EDT of that version on the runner via `p2 director`. E2E additionally imports the test fixtures into an empty workspace via the plugin's headless bootstrap (`EDT_MCP_IMPORT_PROJECTS`) and skips the live-infobase tools, so no 1C platform is needed. Each badge reflects its latest run.

# EDT MCP Server

MCP (Model Context Protocol) server plugin for 1C:EDT, enabling AI assistants (Claude, GitHub Copilot, Cursor, etc.) to interact with EDT workspace.

> [!TIP]
> **Contributing / making changes?** Read [CLAUDE.md](https://github.com/DitriXNew/EDT-MCP/blob/HEAD/CLAUDE.md) first — it's the code-conduct "minefield map": hard don'ts and the stop-and-think-twice zones for this codebase (BM transactions, the bilingual ru/en model, cascading rename, etc.). Detailed how-to lives in the skills under `.claude/skills/`.

> [!IMPORTANT]
> **EDT version compatibility:**
> Supports 1C:EDT **2026.1 and 2026.2** (Ruby) from a single…
