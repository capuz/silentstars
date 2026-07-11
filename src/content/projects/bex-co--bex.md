---
repo: "bex-co/bex"
name: "bex"
description: "The open-source Render alternative — AI-native. Git push → build → deploy on your own infrastructure; agents are first-class users."
readmeQualityOk: true
url: "https://github.com/bex-co/bex"
homepage: "https://bex.co"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [50, 43]
topics: ["deploy", "gitops", "golang", "hetzner", "kubernetes", "kubernetes-operator", "paas", "ai-agents", "heroku-alternative", "mcp"]
stars: 409
forks: 44
openIssues: 3
closedIssues: 1
watchers: 44
contributors: 3
recentReleases: 0
createdAt: "2024-04-30T01:49:56Z"
lastCommitAt: "2026-07-11T05:56:56Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 33
maintainers: ["puncsky", "github-actions[bot]", "doranoda"]
openGraphImageUrl: "https://opengraph.githubassets.com/a841e823eac1ea1cf232eb9f3653d25b94de0b90dd7604520fbf03e2bd8deab5/bex-co/bex"
---

# bex

**The open-source Render alternative — AI-native.**

Push a Git repo (or a prebuilt image), get a running HTTPS service at `<name>.onbex.co` — on machines you own. bex runs identically as a local Docker mock and on Hetzner; only the infrastructure provider overlay changes. Built so AI agents can deploy and operate apps as first-class users, not an afterthought.

## Why bex

- **Own your PaaS.** Render's developer experience — deploy-from-git, custom domains + TLS, suspend/resume — on your own hardware, Apache-2.0.
- **Drop-in familiar.** `bex.yml` is `render.yaml`-shaped, and `bex-api` speaks Render's REST and GraphQL, verified against Render's OpenAPI spec ([docs/bex-api.md](https://github.com/bex-co/bex/blob/HEAD/docs/bex-api.md)). How far the compatibility actually goes — every Render capability × REST/GraphQL/MCP/UI, with evidence — is the parity ledger ([docs/render-parity.md](https://github.com/bex-co/bex/blob/HEAD/docs/render-parity.md)).
- **Built for agents.** Every action is an API call or a Kubernetes CR; state is machine-readable (`phase` / `revision` / `url`). No dashboard-only actions. See the mission and roadmap in…
