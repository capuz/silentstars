---
repo: "pathsim/pathview"
name: "pathview"
description: "A Python first graphical user interface for PathSim."
readmeQualityOk: true
url: "https://github.com/pathsim/pathview"
homepage: "http://view.pathsim.org/"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [60, 29]
topics: ["blockdiagram", "simulation", "block-diagram", "browser-based", "drag-and-drop", "open-source", "pyodide", "python", "scientific-computing", "simulink-alternative"]
stars: 91
forks: 14
openIssues: 9
closedIssues: 103
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2025-06-22T20:20:26Z"
lastCommitAt: "2026-09-19T08:13:10Z"
lastReleaseAt: "2026-01-23T16:53:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 50
maintainers: ["milanofthe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/79b3491ed3843c0f518feda0dc018a18d75f1be03cbff0ff96b5ab385f819739/pathsim/pathview"
discussionCount: 3
---

</p>

------------

# PathView - System Modeling in the Browser

A web-based visual node editor for building and simulating dynamic systems with [PathSim](https://github.com/pathsim/pathsim) as the backend. Runs entirely in the browser via Pyodide by default — no server required. Optionally, a Flask backend enables server-side Python execution with any packages (including those with native dependencies that Pyodide can't run). The UI is hosted at [view.pathsim.org](https://view.pathsim.org), free to use for everyone.

## Tech Stack

- [SvelteKit 5](https://kit.svelte.dev/) with Svelte 5 runes
- [SvelteFlow](https://svelteflow.dev/) for the node editor
- [Pyodide](https://pyodide.org/) for in-browser Python/NumPy/SciPy
- [Plotly.js](https://plotly.com/javascript/) for interactive plots
- [CodeMirror 6](https://codemirror.net/) for code editing

## Installation

### pip install (recommended for users)

```bash
pip install pathview
pathview serve
```

This starts the PathView server with a local Python backend and opens your browser. No Node.js required.

**Options:**
- `--port PORT` — server port (default: 5000)
- `--host HOST` — bind address (default: 127.0.0.1)
- `--no-browser` —…
