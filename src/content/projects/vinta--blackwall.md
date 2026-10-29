---
repo: "vinta/blackwall"
name: "blackwall"
description: "Opinionated lightweight sandbox for daily dev tasks with coding agents"
readmeQualityOk: true
url: "https://github.com/vinta/blackwall"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [58, 42]
topics: ["ai-agents", "claude-code", "cli", "codex", "sandbox", "security", "developer-tools"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-01T04:56:47Z"
lastCommitAt: "2026-10-29T05:48:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 49
maintainers: ["vinta"]
openGraphImageUrl: "https://opengraph.githubassets.com/83d0e523219053a927a51291588ba96281e8e16358ef7c4a0f5d1a6c9247a265/vinta/blackwall"
---

# Blackwall

Opinionated out-of-the-box sandbox for `claude` and `codex`, with delicately crafted **[presets](#presets)** that already configure daily dev tools for you (common gotchas included). So you don't need to write cumbersome sandbox configurations in Claude Code or Codex settings, or to figure out which hosts `pip`, `npm`, and `gh` need, which paths to open, and what the agent must never write.

Claude Code's sandbox covers shell commands only, and Codex's network proxy skips MCP servers, so if you want the whole agent isolated, use Blackwall. It runs everything inside Anthropic's [sandbox-runtime](https://github.com/anthropics/sandbox-runtime) (srt), hooks and MCP servers included.

> This project is named after the Blackwall in Cyberpunk 2077, a firewall NetWatch built to keep rogue AIs out of the Net.

## Installation

Needs Node.js 22.21 or later.

```bash
npm install -g blackwall-sandbox
```

```bash
sudo apt-get install -y bubblewrap socat ripgrep
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0      # Ubuntu 24.04+ only
```

With oh-my-zsh:

```bash
mkdir -p $ZSH_CUSTOM/completions
blackwall --completion zsh > $ZSH_CUSTOM/completions/_blackwall  # run…
