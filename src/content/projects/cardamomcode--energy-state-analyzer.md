---
repo: "cardamomcode/energy-state-analyzer"
name: "energy-state-analyzer"
description: "VScode extension for analyzing the energy state of Python, TypeScript, Kotlin and F# code"
readmeQualityOk: true
url: "https://github.com/cardamomcode/energy-state-analyzer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["code-analysis", "code-analysis-tool", "fsharp", "python", "typescript", "vscode-extension", "code-quality", "code-quality-analyzer", "cognitive-complexity", "cyclomatic-complexity"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2025-08-01T23:26:56Z"
lastCommitAt: "2026-08-30T09:25:39Z"
lastReleaseAt: "2026-08-28T13:37:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 89
maintainers: ["dbrattli", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/231cd80ea97fad24ae40b7fa96e25eb130cf380a1bffa9a8c86166b43e18adf4/cardamomcode/energy-state-analyzer"
---

# Energy State Analyzer

Visualizes "energy states" in Python, F#, TypeScript, and Kotlin code as you edit: parts of a file that are complex, deeply nested, or otherwise harder to understand and maintain get highlighted with colored gutter icons, inline decorations, and entries in the Problems panel.

## Features

Real-time analysis of the active Python, F#, TypeScript, or Kotlin file, re-run on every edit and on editor focus change, via these detectors (see [docs/detectors](https://github.com/cardamomcode/energy-state-analyzer/blob/HEAD/docs/detectors/README.md) for full detail on each):

- [Cyclomatic complexity](https://github.com/cardamomcode/energy-state-analyzer/blob/HEAD/docs/detectors/cyclomatic-complexity.md), too many independent execution paths.
- [Cognitive complexity](https://github.com/cardamomcode/energy-state-analyzer/blob/HEAD/docs/detectors/cognitive-complexity.md), too hard to read due to nesting.
- [Excessive nesting](https://github.com/cardamomcode/energy-state-analyzer/blob/HEAD/docs/detectors/excessive-nesting.md), control-flow blocks nested too deep.
- [File…
