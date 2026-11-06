---
repo: "shpitdev/sketchi"
name: "sketchi"
description: "Excalidraw AI + 'Rough' Icon theming + OpenCode Plugin/Tools: supports creating 4 types of digrams (more soon), modifying existing diagrams, png extract, visual grading"
readmeQualityOk: true
url: "https://github.com/shpitdev/sketchi"
homepage: "https://sketchi.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai", "diagram-editor", "diagramming", "excalidraw", "opencode", "shpit"]
stars: 13
forks: 0
openIssues: 12
closedIssues: 106
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-24T03:17:23Z"
lastCommitAt: "2026-11-06T11:25:10Z"
lastReleaseAt: "2026-01-27T21:38:49Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 61
maintainers: ["anandpant", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1140984122/1287afb3-17e8-4fc3-bd91-780eb18ebd51"
discussionCount: 1
---

Prompt to validated IR to editable Excalidraw and hosted PNG artifacts.

---

Sketchi is the canonical Nx and Cloudflare workspace for generating reliable,
editable diagrams. Model output is never treated as a finished drawing: it is
parsed into a typed intermediate representation, validated, laid out by code,
converted to real Excalidraw elements, and persisted as an artifact with PNG and
scene representations.

## What Sketchi Does

- Creates hosted flowcharts, mindmaps, sequence diagrams, timelines, state machines, Gantt charts, ER diagrams, UML class diagrams, org charts, Venn diagrams, user journey maps, Sankey diagrams, UI wireframes, quadrant charts, and bar, line, and pie charts from natural-language prompts.
- Produces validated, editable Excalidraw scenes instead of opaque images.
- Exposes Code Mode through MCP and versioned HTTP artifact endpoints.
- Keeps layout, bindings, wrapping, and scene conversion deterministic in code.
- Tests diagram contracts with fixtures, maintained scenarios, real-scene
  validation, component tests, and Storybook.
- Converts a curated SVG corpus into native Excalidraw elements and libraries.

## CLI

Install Sketchi from npm, or use the…
