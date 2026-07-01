---
repo: "Ark0N/Codeman"
name: "Codeman"
description: "Manage Claude Code & Opencode in Tmux Sessions in a modern WebUI"
url: "https://github.com/Ark0N/Codeman"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [67, 24]
topics: ["claude", "claude-ai", "claude-api", "claude-cli", "claude-code", "claude-code-plugin", "claudecode", "claudecode-monitoring", "claudecodeing", "ralph-loop"]
stars: 438
forks: 57
openIssues: 0
closedIssues: 28
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-01-21T13:09:45Z"
lastCommitAt: "2026-07-01T07:06:15Z"
lastReleaseAt: "2026-03-08T15:08:05Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 25
maintainers: ["claude", "Ark0N", "aakhter"]
openGraphImageUrl: "https://opengraph.githubassets.com/5443367209d203de9cfaa6ec2810bec2822bab2ad5026b0e47512187b0d09c65/Ark0N/Codeman"
---

</p>

<h2 align="center">Mission control for AI coding agents</h2>

  <em>Claude Code &bull; OpenCode &bull; Codex &bull; Terminal - One Dashboard &bull; Any Device</em>
</p>

</p>

  <strong>English</strong> &bull; <a href="README.zh-CN.md">简体中文</a>
</p>

</p>

---

## Quick Start - Installation

```bash
curl -fsSL https://raw.githubusercontent.com/Ark0N/Codeman/master/install.sh | bash
```

This installs Node.js and tmux if missing, clones Codeman to `~/.codeman/app`, and builds it.

You'll need at least one AI coding CLI installed — [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [OpenCode](https://opencode.ai), or [Codex](https://developers.openai.com/codex/cli) (any combination works). After install:

```bash
codeman web
# Open http://localhost:3000 and start your first session
```

<details>
<summary><strong>Run as a background service</strong></summary>

**Linux (systemd):**
```bash
mkdir -p ~/.config/systemd/user
cat > ~/.config/systemd/user/codeman-web.service << EOF
[Unit]
Description=Codeman Web Server
After=network.target

[Service]
Type=simple
ExecStart=$(which node) $HOME/.codeman/app/dist/index.js web
Restart=always
RestartSec=10

[Install]…
