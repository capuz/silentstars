---
repo: "Shinigami92/vizscript"
name: "vizscript"
description: "Visual Scripting"
readmeQualityOk: true
url: "https://github.com/Shinigami92/vizscript"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 5
forks: 1
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-10-18T06:41:43Z"
lastCommitAt: "2026-11-14T10:45:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 80
maintainers: ["Shinigami92"]
openGraphImageUrl: "https://opengraph.githubassets.com/54614116a03d21d6db98683e8cb02e3483388ec25c0e12c0f4486600237714e3/Shinigami92/vizscript"
discussionCount: 0
---

# vizscript

Visualize source code as Unreal-Engine-Blueprint-style node graphs.

Open a repository and pick a script. vizscript shows it as a node graph with the code below it (or side by side, or just one of them), and keeps them in sync. The graph has two kinds of wires:

- **Exec wires** (white) show the order in which the code runs.
- **Data wires** (colored by type) connect values, such as variables, parameters and call results, to the inputs that use them.

Editing the graph edits the code: every change becomes a minimal text edit, so formatting and comments survive.

> Status: proof of concept. JavaScript/TypeScript, Python, GDScript (Godot 4) and Rust are supported. Committing changes back, more languages and more providers are planned (see [Roadmap](#roadmap)).

## Highlights

- **Blueprint concepts for any script.** Statements become nodes on the exec chain, expressions become pure nodes, and `if`, loops, `switch` and `try` become flow-control nodes. Every function gets its own graph; double-click one to see it on its own, like UE's graph tabs (double-clicking a call or a callback opens its graph too, like UE's function and collapsed graph nodes; the breadcrumb shows…
