---
repo: "Trampoline-AI/avalanche"
name: "avalanche"
description: "Avalanche makes agents first-class steps in typed data pipelines. Compose adaptive agent work with deterministic Python transformations in one DAG, run it through the Avalanche operator, and inspect every run from the web UI. Agentic ETL is here."
readmeQualityOk: true
url: "https://github.com/Trampoline-AI/avalanche"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [69, 30]
stars: 24
forks: 4
openIssues: 6
closedIssues: 8
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-06-30T19:48:06Z"
lastCommitAt: "2026-10-21T17:31:16Z"
lastReleaseAt: "2026-09-17T14:50:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["eriberdy022", "glesperance"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9879790e6d01457b71354432e72e37a41d21132e094fa848091d89bc2657d84/Trampoline-AI/avalanche"
---

# Avalanche

Avalanche makes agents first-class steps in typed data pipelines. Compose adaptive agent work with deterministic Python transformations in one DAG, run it through the Avalanche operator, and inspect every run from the web UI.

  crafted with ♥ in MTL · NYC · FLP<br/>by <a href="https://trampoline.ai">Trampoline AI</a>

> [!NOTE]
> Avalanche is an early release candidate intended for local development and experimentation. APIs and operational behavior may change before a stable release.

## API reference

The [API reference](https://github.com/Trampoline-AI/avalanche/blob/HEAD/docs/api/README.md) covers the interfaces used to write and run
workflows: step decorators, graph operations, run handles, inputs and context,
files and workspaces, agents, classifiers, Iceberg/Lance storage, streams,
cursors, and CLI commands. Entries list parameters, fields, returns, and errors.
The same reference is bundled in the [Avalanche skill](https://github.com/Trampoline-AI/avalanche/blob/HEAD/skills/avalanche/SKILL.md)
for offline API lookup.

## Requirements

- Python 3.13.
- A LLM provider API key or Codex subscription for agent steps.
- uv (recommended, https://docs.astral.sh/uv/)…
