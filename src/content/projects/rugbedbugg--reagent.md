---
repo: "rugbedbugg/ReAgent"
name: "ReAgent"
description: "An AI retrosynthetic agentic framework with evidence-grounded multi-objective scoring and forward-validating filter-model checks."
readmeQualityOk: true
url: "https://github.com/rugbedbugg/ReAgent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-ai", "chemistry", "llm-agents", "retrosynthesis"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-19T08:56:18Z"
lastCommitAt: "2026-09-05T07:47:44Z"
lastReleaseAt: "2026-07-19T09:37:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 37
maintainers: ["rugbedbugg"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1305560524/052abda2-99b3-4c3a-8b6a-4ca20e01a9ea"
---

# ReAgent 

Plans retrosynthetic routes for a target molecule and scores each candidate along
six independent objectives (feasibility, precursor availability, cost, safety,
sustainability, efficiency). Chemistry facts are computed deterministically with
RDKit and cheminformatics data; LLM-backed specialist agents interpret those
facts, weigh them, and emit a cited rationale for the selected route.

Single-step model and tree search come from
[AiZynthFinder](https://github.com/MolecularAI/aizynthfinder). ReAgent adds the
agentic evaluation, multi-objective aggregation, retrieval grounding, and
adaptive layers on top.

## Requirements

- Python 3.10 or 3.11
- Agent layer needs one of: local [Ollama](https://ollama.com) (`--local`), or
  `ANTHROPIC_API_KEY` (`--assess`). Planning, features, RAG, and evaluation run
  without either.

## Setup

The toolchain is pinned in `mise.toml` (Python 3.11, uv), which also creates and
activates `.venv` on entering the directory. With
[mise](https://mise.jdx.dev) installed:

```sh
mise trust
mise install        # Python 3.11 + uv; creates .venv
mise run install    # editable install with dev extras

# Pretrained single-step model + building-block…
