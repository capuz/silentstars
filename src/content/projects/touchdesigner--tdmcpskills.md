---
repo: "TouchDesigner/TDMCPSkills"
name: "TDMCPSkills"
description: "TD Skills for MCPs"
readmeQualityOk: true
url: "https://github.com/TouchDesigner/TDMCPSkills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 44
forks: 1
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 26
recentReleases: 3
createdAt: "2026-04-15T17:27:47Z"
lastCommitAt: "2026-11-15T08:26:17Z"
lastReleaseAt: "2026-11-11T06:53:01Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 29
maintainers: ["jarrettgsmith", "DarienBrito"]
openGraphImageUrl: "https://opengraph.githubassets.com/20bc0c96cec1a2ae8130a901a7e5a7dd8b9d35069c0fed9a90768f622684c82b/TouchDesigner/TDMCPSkills"
discussionCount: 1
---

# TDMCPSkills

Portable Agent Skills for TouchDesigner. Teaches AI coding agents how to build TouchDesigner networks effectively using the [TDMCP](https://github.com/TouchDesigner/TDMCP) server.

19 skills cover TOPs, CHOPs, POPs, SOPs, GLSL, materials, components, UI, and end-to-end workflow. See [SKILLS.md](https://github.com/TouchDesigner/TDMCPSkills/blob/HEAD/SKILLS.md) for the full list.

> **The `td-` prefix is reserved.** Installing skills — via the in-TD component or the plugin — **manages the `td-` skills it installed**: any `td-*` skill it previously installed and the current release no longer ships is removed on update. A `td-*` folder it did not install is left alone. Author your own skills under your **own prefix** (e.g. `mystudio-foo`); anything named `td-*` is owned by this system and may be replaced or deleted without warning.

Three separate pieces work together:

- **Skills** — reusable TouchDesigner workflow instructions (this repo)
- **MCP** — the live TDMCP connection to TouchDesigner (configured per host, see below)
- **Plugins/extensions** — provider-specific packaging (currently Claude Code only)

## Supported hosts

| Host | Skills location | MCP config |…
