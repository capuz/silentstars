---
repo: "Elioz404/Alza"
name: "Alza"
description: "An agent-native floor-plan studio. 31 WebMCP tools, a constraint engine, and cross-origin tool exchange between two real origins"
readmeQualityOk: true
url: "https://github.com/Elioz404/Alza"
homepage: "https://alza-dev.pages.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["agentic-web", "ai-agents", "floor-plan", "model-context-protocol", "react", "threejs", "typescript", "webmcp"]
stars: 13
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-01T19:54:31Z"
lastCommitAt: "2026-11-12T05:43:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 68
undervaluedScore: 38
maintainers: ["Elioz404"]
openGraphImageUrl: "https://opengraph.githubassets.com/825771496b70e086eceef4503f932e91829b2a336ef9bb7952591e2ae01d9767/Elioz404/Alza"
---

# Alza

Alza is a floor-plan studio that a person and an agent edit together, on one live page.

https://github.com/user-attachments/assets/1883751f-3a53-48e3-b503-9e50fbb1f9fb

A floor plan is coordinates, not buttons, so an agent cannot use one by pretending to be a
mouse. Alza does not ask it to. It publishes the plan itself as typed tools through
**WebMCP** (`document.modelContext.registerTool`), on the same page a person is drawing on.
Both of them change one model, through one command path, with one undo history.

You draw walls, rooms, doors, windows, stairs, columns and furniture in a metric 2D editor,
or trace over a photo of a plan. The agent works the same model with the same actions: it
checks its work against a constraint engine, places products from a partner shop on another
origin, and raises the plan into a 3D model you can walk through. Several storeys, curved
walls and free room outlines are all part of the model, and the whole plan exports as an
IFC4 building model.

Everything runs in the browser. There is no backend and no account, and the plan does not
leave the machine. Built for the [WebMCP Challenge](https://webmcp.devpost.com/).

---

## Contents

- [Try…
