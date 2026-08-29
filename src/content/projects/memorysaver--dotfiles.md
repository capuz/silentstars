---
repo: "memorysaver/dotfiles"
name: "dotfiles"
description: "Memorysaver’s dotfiles"
readmeQualityOk: true
url: "https://github.com/memorysaver/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [58]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-11-21T06:59:46Z"
lastCommitAt: "2026-08-29T17:27:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 52
maintainers: ["memorysaver"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fe78ea5d48f4ae48fc78ca38315bc459bd3c78f0ca219c43e8043a0a56aca3c/memorysaver/dotfiles"
---

# dotfiles

Modular, idempotent dotfiles with explicit macOS, Omarchy, Arch, and
Debian-family installation paths, orchestrated with `just`.

## Quick Start

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/memorysaver/dotfiles/main/bootstrap.sh)"
```

Or manually:

```bash
git clone https://github.com/memorysaver/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
just setup
```

## What's Included

| Recipe | Tools |
|--------|-------|
| `just core` | platform shell, tmux, starship, nvim, lazygit, git-lfs, direnv |
| `just runtimes` | pyenv, uv, nvm, Node.js, Bun, Rust |
| `just agents` | Herdr, global skills (`herdr`, `i-have-adhd`, `agent-browser`), Claude Code, Codex CLI, OpenCode, Antigravity CLI (agy), Grok Build, Pi |
| `just tools` | gh, glab, jq, yq, just, agent-browser, portless, mole (macOS only) |
| `just infra` | Terraform, Pulumi, SST *(opt-in, not in default setup)* |

## Folder Structure

```
~/.dotfiles/
├── bootstrap.sh          # One-command entry point
├── justfile              # Task runner (just setup, just link, etc.)
├── lib/helpers.sh        # Shared idempotent utilities
├── install/              # Categorized install scripts
│   ├── core.sh
│   ├──…
