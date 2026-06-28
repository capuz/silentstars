---
repo: "kdeps/kdeps"
name: "kdeps"
description: "Run AI workflows locally. Or deploy them anywhere. AI agent framework in YAML — workflow pipelines + autonomous agent loop. NVIDIA Inception member. Build, deploy, export as Docker/K8s/ISO."
url: "https://github.com/kdeps/kdeps"
homepage: "https://kdeps.com"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["agent", "llms", "workflow", "yaml", "orchestration", "ai", "llamafile", "nvidia"]
stars: 35
forks: 4
openIssues: 22
closedIssues: 337
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-08-01T01:46:41Z"
lastCommitAt: "2026-06-28T02:02:07Z"
lastReleaseAt: "2025-02-02T00:43:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 61
maintainers: ["jjuliano", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/836501717/81bba773-3b05-4680-9d12-d15b311c38e8"
discussionCount: 1
---

# kdeps

Run AI workflows locally. Or deploy them anywhere. Proud member of the [NVIDIA Inception](https://www.nvidia.com/en-us/startups/) program for AI startups.

## Run in 30 seconds

```bash
# Install
brew install kdeps/tap/kdeps
# or
curl -LsSf https://raw.githubusercontent.com/kdeps/kdeps/main/install.sh | sh

# Run - you're in an AI REPL immediately
kdeps
```

No API key needed if you have [Ollama](https://ollama.com) or [llamafile](https://github.com/Mozilla-Ocho/llamafile) installed. kdeps auto-detects local models and downloads them on first use.

```bash
kdeps --model llama3.2              # use any Ollama model
kdeps --model llama3.2:1b-q4        # GGUF quantization - auto-downloaded from HuggingFace
kdeps --model /path/to/model.gguf   # point directly at a local GGUF file
kdeps ./my-agent/                   # load your workflow as tools for the agent
```

**Local models** - three options, zero cloud dependency:
- **Ollama** (`backend: ollama`) - managed model server, `ollama pull llama3.2` then `kdeps`
- **llamafile** (`backend: file`) - model + server as a single binary, runs on any OS, no install
- **GGUF** (`backend: gguf`) - raw GGUF files, point `llm.model_path`…
