---
repo: "SteveHedden/ndoli"
name: "ndoli"
description: "A personal knowledge graph (second brain) for Claude Code and Codex — tracks your professional network, projects, and opportunities using semantic web standards (RDF/OWL/SHACL)."
readmeQualityOk: true
url: "https://github.com/SteveHedden/ndoli"
language: "HTML"
languages: ["HTML", "Shell"]
languagePcts: [67, 33]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-10T21:54:25Z"
lastCommitAt: "2026-07-05T20:16:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 24
maintainers: ["SteveHedden"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f422f201fa075774cafb3dea171dcb427d8742a6a93bb85606e01719b85d170/SteveHedden/ndoli"
---

# ndoli

A personal knowledge graph (second brain) for Claude Code and Codex — tracks your professional network, projects, and opportunities using semantic web standards (RDF/OWL/SHACL).

## What it is

ndoli gives you a structured, queryable KG that your AI agent reads on demand. Instead of re-explaining your context every time, the agent already knows your contacts, opportunities, and projects.

The KG lives in `KG/` as Turtle (`.ttl`) files, organized as three tiers:

- **Tier 1 — Ontology:** classes and relationships (the theory of your professional world)
- **Tier 2 — Controlled vocabularies:** catalogs of actual entities (your contacts, opportunities, projects)
- **Tier 3 — Observations:** dated, immutable records of interactions and findings (the evidence layer)

The KG is shared across both tools — Claude Code and Codex read and write the same TTL files.

## Setup

```bash
git clone https://github.com/SteveHedden/ndoli ~/ndoli
cd ~/ndoli
bash install.sh
```

`install.sh` sets up both Claude Code and Codex:

| What | Claude Code | Codex |
|---|---|---|
| KG path config | `~/.claude/ndoli_config` | `~/.codex/config.toml` |
| Global instructions | appended to…
