---
repo: "BinaryBourbon/fountain"
name: "fountain"
description: "Agent Orchestrator Built on Sprites"
readmeQualityOk: true
url: "https://github.com/BinaryBourbon/fountain"
homepage: "https://binarybourbon.github.io/fountain/"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [81]
stars: 11
forks: 1
openIssues: 41
closedIssues: 338
watchers: 1
contributors: 7
recentReleases: 7
createdAt: "2026-05-10T00:53:37Z"
lastCommitAt: "2026-08-25T04:10:02Z"
lastReleaseAt: "2026-08-07T03:42:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 59
maintainers: ["jhgaylor", "mdonigian", "repo-ward[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7f4e598c78fab869ebc1f0a3615025ab9cba50e0d387fec9f26330be994f5f4/BinaryBourbon/fountain"
---

# Fountain

A multi-tenant API and UI for managing agents, repos, secrets, and conversations. It's for people who want to create sandboxed coding agent instances with preconfigured sets of env vars, MCP servers, skills, repos, and packages. Users treat Fountain as a building block for their own workflows, but also use the UI to get started and to debug. It exists because running Claude instances with worktrees locally — and shuffling MCP configurations and skill setups by hand — is painful.

## Self-hosting

Run your own instance: [docs/self-hosting.md](https://github.com/BinaryBourbon/fountain/blob/HEAD/docs/self-hosting.md).

```sh
cp .env.compose.example .env   # then fill in the generated keys
docker compose up -d
```

Prefer Kubernetes? A portable baseline — plain manifests, `kubectl apply -k`,
no operators assumed — lives in [`deploy/k8s/`](https://github.com/BinaryBourbon/fountain/blob/HEAD/deploy/k8s/).

## Four surfaces

Every public feature lives on the first three; the SDK wraps the verbs most
code actually reaches for.

| Surface | Use it when |
|---|---|
| **Web UI** (`/dashboard`) | Getting started, debugging conversations, managing resources visually |
| **REST…
