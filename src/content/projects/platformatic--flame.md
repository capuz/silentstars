---
repo: "platformatic/flame"
name: "flame"
description: "Utility to generate flamegraphs"
url: "https://github.com/platformatic/flame"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 166
forks: 2
openIssues: 5
closedIssues: 9
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-08-25T14:00:43Z"
lastCommitAt: "2026-06-27T00:36:38Z"
lastReleaseAt: "2026-01-20T09:23:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 22
maintainers: ["renovate[bot]", "mcollina"]
openGraphImageUrl: "https://opengraph.githubassets.com/43b64ba6e708639b862dcbf1d22d5896ca0ba7c9ce427219a5b447984b419690/platformatic/flame"
---

# @platformatic/flame

🔥 CPU and heap profiling and flamegraph visualization tool built on top of [@platformatic/react-pprof](https://github.com/platformatic/react-pprof).

## Features

- **Dual Profiling**: Captures both CPU and heap profiles concurrently for comprehensive performance insights
- **Auto-Start Profiling**: Profiling starts immediately when using `flame run` (default behavior)
- **Automatic Flamegraph Generation**: Interactive HTML flamegraphs are created automatically for both CPU and heap profiles on exit
- **LLM-Friendly Markdown Analysis**: Generates markdown reports with hotspot analysis, ideal for AI-assisted performance debugging
- **Sourcemap Support**: Automatically translates transpiled code locations back to original source files (TypeScript, bundled JavaScript, etc.)
- **Clear File Path Display**: Shows exact paths and browser URLs for generated files
- **Manual Control**: Optional manual mode with signal-based control using `SIGUSR2`
- **Interactive Visualization**: WebGL-based HTML flamegraphs with zoom, search, and filtering
- **CLI Interface**: Simple command-line tool for profiling and visualization
- **Zero Config**: Works out of the box with…
