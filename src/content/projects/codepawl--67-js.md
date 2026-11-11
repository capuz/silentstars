---
repo: "codepawl/67.js"
name: "67.js"
description: "3D engine that AI agents drive"
readmeQualityOk: true
url: "https://github.com/codepawl/67.js"
homepage: "https://67js.codepawl.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["3d", "3d-engine", "ai-agents", "gltf", "javascript", "mcp", "model-context-protocol", "pbr", "rendering", "webgl2"]
stars: 483
forks: 22
openIssues: 39
closedIssues: 288
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-10-08T20:06:27Z"
lastCommitAt: "2026-11-11T10:34:00Z"
lastReleaseAt: "2026-11-10T12:04:59Z"
status: "newborn"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 29
maintainers: ["anxuanng", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f3e46a15bbb31a14913aeb654eb3052e4eb398529d4de6548209e743c6b5d9a/codepawl/67.js"
discussionCount: 0
---

67js is a WebGL2 renderer with addons for terrain, vegetation, characters, liquid, vehicles and media export.
A scene is plain data: each part has a geometry, a matrix and a material.
An agent builds and changes a scene through an MCP server, looks at PNG previews and renders stills or MP4 video.
The goal is to be as capable as Blender and as light as three.js. [docs/goal.md](https://github.com/codepawl/67.js/blob/main/docs/goal.md) defines each part.
See the [showcase](https://67js.codepawl.com/showcase.html), the [documentation](https://67js.codepawl.com/docs.html), the [guide for agents](https://67js.codepawl.com/llms.txt) and the [changelog](https://github.com/codepawl/67.js/blob/main/CHANGELOG.md). The [FAQ](https://67js.codepawl.com/docs.html#faq) answers common questions.

## Showcase

Each picture below is a 67js render. The linked ones open live in the browser.

## Install

**Let your agent do it.** Paste this prompt into Claude Code, Codex, Cursor, Gemini CLI or OpenCode. The agent installs
the package, reads the guide and connects the MCP server.

```text
Install 67js from npm as `67js@npm:@codepawlhq/67js` and connect its MCP server with `npx 67js-mcp`. Read…
