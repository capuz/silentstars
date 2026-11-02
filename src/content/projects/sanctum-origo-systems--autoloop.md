---
repo: "Sanctum-Origo-Systems/autoloop"
name: "autoloop"
description: "Config-driven AI pipeline for triaging and implementing code in the issue board"
readmeQualityOk: true
url: "https://github.com/Sanctum-Origo-Systems/autoloop"
homepage: "https://andywidjaja.com/autoloop"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 25
forks: 1
openIssues: 1
closedIssues: 207
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-12T18:34:25Z"
lastCommitAt: "2026-11-02T13:37:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 46
maintainers: ["andywidjaja"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b908666e2153bc61c865353dca2bbf0b8e8ae627b29c4134f8fbf8c37361ac1/Sanctum-Origo-Systems/autoloop"
---

# autoloop

Config-driven AI pipeline that triages GitHub issues, implements them via Claude, and opens PRs. One config file. One command to start.

## Prerequisites

- **Python 3.13+**
- **uv** (recommended): [install](https://docs.astral.sh/uv/getting-started/installation/) or use pip instead
- **Node.js 22+**: required by Claude Code CLI
- **GitHub CLI (`gh`)**: [install](https://cli.github.com/) then run `gh auth login`
- **Claude Code CLI (`claude`) v2.1.310 or later**: `npm install -g @anthropic-ai/claude-code@latest`, then check with `claude --version` (requires a Claude Max or Pro subscription)
  - **Which Claude models you can use depends on the installed `claude` CLI version** (and your plan). autoloop passes `triage_model`, `impl_model` and `review_model` straight to `claude --model`, so a model newer than your CLI fails at run time. Upgrade the CLI before switching to a newer model.
  - The default `impl_model` (and `review_model`) is `claude-opus-5-5`, which needs CLI v2.1.310 or later. Older CLIs such as 2.1.160 can't run it. Upgrade, or set `impl_model` in `autoloop.toml` to a model your CLI supports.
  - Implement runs pass permission rules with `--settings`, so…
