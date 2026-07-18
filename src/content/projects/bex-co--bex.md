---
repo: "bex-co/bex"
name: "bex"
description: "The open-source Render alternative — AI-native. Git push → build → deploy on your own infrastructure; agents are first-class users."
readmeQualityOk: true
url: "https://github.com/bex-co/bex"
homepage: "https://bex.co"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [55, 36]
topics: ["deploy", "gitops", "golang", "hetzner", "kubernetes", "kubernetes-operator", "paas", "ai-agents", "heroku-alternative", "mcp"]
stars: 413
forks: 44
openIssues: 3
closedIssues: 2
watchers: 44
contributors: 3
recentReleases: 0
createdAt: "2024-04-30T01:49:56Z"
lastCommitAt: "2026-07-18T05:46:40Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 34
maintainers: ["puncsky", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af4e84f799f9004d239d9a49512fd4016fa67733021f6dc88961d05fd45f3521/bex-co/bex"
---

# bex

**The open-source Render alternative — AI-native.**

Push a Git repo (or a prebuilt image), get a running HTTPS service at `<name>.onbex.co` — on machines you own. bex runs identically as a local Docker mock and on Hetzner; only the infrastructure provider overlay changes. Built so AI agents can deploy and operate apps as first-class users, not an afterthought.

> [!WARNING] > **bex is under active development and is not yet ready for production use. APIs, configuration, and behavior may change without notice.**

## Why bex

- **Own your PaaS.** Render's developer experience — deploy-from-git, custom domains + TLS, suspend/resume — on your own hardware, Apache-2.0.
- **Drop-in familiar.** `bex.yml` is `render.yaml`-shaped, and `bex-api` speaks Render's REST and GraphQL, verified against Render's OpenAPI spec ([docs/ADR006-bex-api.md](https://github.com/bex-co/bex/blob/HEAD/docs/ADR006-bex-api.md)). How far the compatibility actually goes — every Render capability × REST/GraphQL/MCP/UI, with evidence — is the parity ledger ([docs/ADR018-render-parity.md](https://github.com/bex-co/bex/blob/HEAD/docs/ADR018-render-parity.md)).
- **Built for agents.** Every action is an API…
