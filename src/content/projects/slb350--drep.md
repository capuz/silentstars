---
repo: "slb350/drep"
name: "drep"
description: "Automated code review and documentation improvement tool for Gitea, GitHub, and GitLab. Powered by local LLM via open-agent-sdk."
readmeQualityOk: true
url: "https://github.com/slb350/drep"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 14
forks: 3
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2025-10-19T23:42:14Z"
lastCommitAt: "2026-08-20T04:06:31Z"
lastReleaseAt: "2026-08-19T23:18:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 59
maintainers: ["slb350"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8f4df7db71f69fba6ae0f67f4a84be704b1608c21e9d17a0c07f3afd23ad12e/slb350/drep"
---

# drep

**A local commit gate.** It runs the linters your repository already
configures, and sends the code you changed to an LLM for review.

```sh
curl --proto '=https' --tlsv1.2 -LsSf \
  https://github.com/slb350/drep/releases/latest/download/drep-ai-installer.sh | sh
```

</div>

## What it does

On `git commit` and `git push`, drep checks your changes twice.

| Layer | Source | Blocks? |
|---|---|---|
| Deterministic | ruff, eslint, tsc, gofmt, go vet, clippy | Yes |
| Semantic | an LLM you point it at | No, unless you ask |

Your linters are precise, so their findings block. A model's opinion about
naming is not precise at any severity, so it informs instead. Splitting by
source rather than by severity is what makes the gate calibratable; opt the
LLM into blocking with `--fail-on error` when you want it.

drep is a single binary. It talks to no platform, runs no server, stores
nothing, and needs no account. The deterministic half needs no model and no
API key at all.

## Install

```sh
# Shell installer (macOS and Linux, x86_64 and arm64)
curl --proto '=https' --tlsv1.2 -LsSf \
  https://github.com/slb350/drep/releases/latest/download/drep-ai-installer.sh | sh

# Homebrew…
