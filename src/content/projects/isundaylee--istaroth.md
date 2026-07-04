---
repo: "isundaylee/istaroth"
name: "istaroth"
description: "Project Istaroth is a RAG-based LLM system for answering Genshin Impact lore questions."
readmeQualityOk: true
url: "https://github.com/isundaylee/istaroth"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [72, 22]
topics: ["genshin", "genshin-impact", "hoyoverse", "mihoyo"]
stars: 10
forks: 3
openIssues: 20
closedIssues: 60
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-07-26T22:31:49Z"
lastCommitAt: "2026-07-04T22:52:07Z"
lastReleaseAt: "2025-08-08T04:27:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 68
maintainers: ["isundaylee"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4faf533049e96a90556f2cd964a1f00a56877f0f325331eba276074d0f04f3c/isundaylee/istaroth"
---

# Istaroth

Istaroth is a Retrieval-Augmented Generation (RAG) system for Genshin Impact that extracts, cleans, and structures textual content to answer lore questions about the world of Teyvat.

Special thanks to Dimbreath for his wonderful work on AnimeGameData!

## Texts Included

- Quests
- Readables (weapons, artifacts, books, misc map texts)
- Character stories
- Character voicelines
- Material texts
- Shishu (诗漱) lore manual (third-party)

## Getting Started

### Python Environment Setup

Requires **Python 3.12** (see `.python-version`) and [uv](https://docs.astral.sh/uv/).

```bash
uv sync              # creates .venv and installs all dependencies
pre-commit install   # if you plan on doing development
```

By default, `uv sync` installs CPU-only PyTorch from the [pytorch-cpu index](https://download.pytorch.org/whl/cpu) (~200MB on Linux instead of ~4GB of CUDA wheels). Local embedding builds use `ISTAROTH_TRAINING_DEVICE=cpu` by default; override via `.env.common` if needed.

After changing dependencies, regenerate the Docker export files (use shell redirect, not `-o`; CI diffs stdout and the header comment must match):

```bash
uv export --frozen --only-group ml…
