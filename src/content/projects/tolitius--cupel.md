---
repo: "tolitius/cupel"
name: "cupel"
description: "discover LLMs punching above their weight"
readmeQualityOk: true
url: "https://github.com/tolitius/cupel"
homepage: "https://cupel.run"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [53, 34]
topics: ["llm", "llm-evaluation", "local-llm"]
stars: 64
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-08T07:57:39Z"
lastCommitAt: "2026-10-26T03:02:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 8
maintainers: ["tolitius"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9835676b21492158dc79926c19086ec7bf76449c833f4dde16eade436f10e1c/tolitius/cupel"
---

# cupel <img src="cupel/ui/cupel-avatar.svg" alt="cupel" height="42">

> _separates precious LLMs from base LLMs_

score local and cloud LLMs with custom prompts and a configurable judge

  

###### _a `cupel` is the small dish used in a fire assay to separate precious metal from base metal_

## install

```bash
curl -fsSL https://cupel.run/install | bash
```
or
```
pip install cupel
```
the UI is bundled in the package

## quick start

```bash
cupel
```

opens a browser at `localhost:8042`

ships with example data (8 models scored by Claude Opus 4.6 on 8 prompts) — the dashboard is populated on first launch

- **LLM-assisted authoring** — describe what you want to test, an LLM drafts the prompt and 0–3 rubric
- **local + cloud** — oMLX, Ollama, LM Studio, SGLang, OpenRouter, Anthropic, OpenAI
- **configurable judge** — any model can score responses on a 0–3 rubric with reasoning
- **thinking model support** — separates `<think>` blocks from answers, only judges the response
- **multi-turn + tool calling** — multi-step conversations with injected tool results
- **speed tracking** — tok/s and response times per model
- **auto-discovery** — probes known ports for local inference…
