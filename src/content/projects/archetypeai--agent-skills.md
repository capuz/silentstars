---
repo: "archetypeai/agent-skills"
name: "agent-skills"
description: "Agent skills for building with Archetype AI's Newton — sensor intelligence via /query (fusion, Omega embeddings, data prep, design system)"
readmeQualityOk: true
url: "https://github.com/archetypeai/agent-skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "claude-code", "newton", "physical-ai", "sensor-data", "time-series"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-01T15:09:29Z"
lastCommitAt: "2026-11-24T01:54:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["NathanNam", "duskpoet"]
openGraphImageUrl: "https://opengraph.githubassets.com/aeb0904074fbeecac4e3a182efd3adefd09012ca40fc73d93c9317613d187d0c/archetypeai/agent-skills"
---

# Archetype AI Agent Skills

Agent skills for building applications with [Archetype AI's Newton](https://www.archetypeai.io/) — a real-time sensor intelligence platform that understands physical world data through foundation models.

Inspired by [mongodb/agent-skills](https://github.com/mongodb/agent-skills).

## Skills

Five groups: **Agents** run a maintained pipeline server-side over the Agents API, **Models** call Newton directly on `/api/lens/query` and leave the orchestration to you, **Fine-tuning** adapts a Newton model to your own data, **Integrations** pair a Newton model with a third-party model, and **Design** covers the demo front-end.

### Agents

Managed end-to-end pipelines — upload an input, run a platform blueprint, poll, download the output. No model to host. The sensor agents differ by **what you already have labelled**: every regime (OSM), a handful of examples of one named fault (RED), nothing but normal operation (AD), or nothing at all (Label-Free AD). OSM, RED and AD can also be **fitted to your own data** on the platform (Optimizations → promote → Evals → a package, deployed in batch or for serving), each with its data-prep skill in front.
