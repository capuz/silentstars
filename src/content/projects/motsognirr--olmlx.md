---
repo: "motsognirr/olmlx"
name: "olmlx"
description: "Small server that exposes an Ollama compatible interface to MLX"
url: "https://github.com/motsognirr/olmlx"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 8
closedIssues: 254
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-05T22:23:11Z"
lastCommitAt: "2026-06-26T21:32:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 55
maintainers: ["dpalmqvist"]
openGraphImageUrl: "https://opengraph.githubassets.com/74af6131b8dd8b36b8f43772df109948e517fe217023aec1d37f4bae6396c6f0/motsognirr/olmlx"
---

# olmlx

Drop-in Ollama API replacement powered by Apple's [MLX](https://github.com/ml-explore/mlx) framework. Get faster inference on Mac M-series hardware while using any tool that speaks the Ollama REST API.

## Requirements

- macOS with Apple Silicon (M1/M2/M3/M4/M5)
- Python 3.11+
- [uv](https://docs.astral.sh/uv/)

## Install

### Option 1: Global install (recommended)

```bash
# Install globally — no clone needed
uv tool install git+ssh://git@github.com/motsognirr/olmlx.git

# Start the server
olmlx
```

On first run, `~/.olmlx/models.json` is created with example model mappings.

### Option 2: From source

```bash
git clone <repo-url> && cd olmlx
uv sync --no-editable
uv run olmlx
```

The server starts on `http://localhost:11434` — the same default port as Ollama.

## CLI

```bash
olmlx                        # Start the server (default)
olmlx serve                  # Start the server (explicit)
olmlx chat <model>           # Interactive terminal chat with MCP tool support
olmlx models list            # List locally downloaded models
olmlx models pull <name>     # Download a model
olmlx models show <name>     # Show model details
olmlx models delete <name>   # Delete a…
