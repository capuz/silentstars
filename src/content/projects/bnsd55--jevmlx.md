---
repo: "bnsd55/jevmlx"
name: "jevmlx"
description: "Jev-style parallel constrained decisions for any MLX model on Apple Silicon. Typed, schema-valid JSON in one forward pass."
readmeQualityOk: true
url: "https://github.com/bnsd55/jevmlx"
homepage: "https://github.com/bnsd55/jevmlx#readme"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["apple-silicon", "jev", "local-llm", "local-models", "mlx"]
stars: 75
forks: 8
openIssues: 8
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-09-17T10:20:12Z"
lastCommitAt: "2026-10-20T08:49:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 33
maintainers: ["bnsd55", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1374259561/0a4ed638-599d-4dd5-8c1f-91dbc586028c"
---

# jevmlx

jevmlx turns a schema of fields (booleans, enums, multi-selects) and a context string into a single batched forward pass on a local Apple Silicon model. Every allowed option for every field is scored from logits in one prefill — no text generation — and the JSON is assembled from the winners, with a probability per field.

## Quickstart

```bash
git clone https://github.com/bnsd55/jevmlx && cd jevmlx && ./setup.sh
jevmlx decide --preset support_triage --json          # one decision, CLI
jevmlx serve --model fast --port 8000                  # HTTP server
curl -s localhost:8000/decide -d '{"schema":{"x":{"type":"enum","choices":["a","b"],"description":"d"}},"context":"pick one"}'
```

Requires an Apple Silicon Mac (M1+) and Python 3.12+. First use of a model alias downloads weights (~2 GB `fast`, ~4.5 GB `quality`).

## Install

```bash
pip install git+https://github.com/bnsd55/jevmlx          # library
uv tool install git+https://github.com/bnsd55/jevmlx     # CLI only
git clone https://github.com/bnsd55/jevmlx && cd jevmlx && ./setup.sh   # dev
```

### Model aliases

| Alias | Resolves to | Use |
|---|---|---|
| `quality` | `mlx-community/Qwen2.5-7B-Instruct-4bit` |…
