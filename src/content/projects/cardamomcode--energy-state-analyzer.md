---
repo: "cardamomcode/energy-state-analyzer"
name: "energy-state-analyzer"
description: "VScode extension for analyzing the energy state of Python, TypeScript, Kotlin and F# code"
readmeQualityOk: true
url: "https://github.com/cardamomcode/energy-state-analyzer"
homepage: "https://marketplace.visualstudio.com/items?itemName=cardamom-code.energy-state-analyzer"
language: "F#"
languages: ["F#"]
languagePcts: [99]
topics: ["code-analysis", "code-analysis-tool", "fsharp", "python", "typescript", "vscode-extension", "code-quality", "code-quality-analyzer", "cognitive-complexity", "cyclomatic-complexity"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2025-08-01T23:26:56Z"
lastCommitAt: "2026-09-01T08:48:06Z"
lastReleaseAt: "2026-08-31T18:50:02Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 97
maintainers: ["dbrattli", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b114931857cde2e09d5fbcc758e147326e148b3b98b4cb86b7b894ff9335054/cardamomcode/energy-state-analyzer"
---

# Energy State Analyzer

Visualizes "energy states" in Python, F#, TypeScript, Kotlin, and C++ code as you edit: parts of a file that are complex, deeply nested, or otherwise harder to understand and maintain get highlighted with colored gutter icons, inline decorations, and entries in the Problems panel.

## Features

Real-time analysis of the active Python, F#, TypeScript, Kotlin, or C++ file, re-run on every edit and on editor focus change, via these detectors (see [docs/detectors](https://github.com/cardamomcode/energy-state-analyzer/blob/HEAD/docs/detectors/README.md) for full detail on each):

- [Cyclomatic complexity](https://github.com/cardamomcode/energy-state-analyzer/blob/HEAD/docs/detectors/cyclomatic-complexity.md), too many independent execution paths.
- [Cognitive complexity](https://github.com/cardamomcode/energy-state-analyzer/blob/HEAD/docs/detectors/cognitive-complexity.md), too hard to read due to nesting.
- [Excessive nesting](https://github.com/cardamomcode/energy-state-analyzer/blob/HEAD/docs/detectors/excessive-nesting.md), control-flow blocks nested too deep.
- [File…
