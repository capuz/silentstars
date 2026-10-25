---
repo: "theopenbee/openbee"
name: "openbee"
description: "Use your AI agents anywhere, anytime: Claude Code, Codex, and Pi from Lark, DingTalk, WeCom, WeChat, Telegram, or the browser."
readmeQualityOk: true
url: "https://github.com/theopenbee/openbee"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [73, 25]
topics: ["agent", "ai", "claude-code", "codex", "dingtalk", "feishu", "lark", "pi", "self-hosted", "telegram"]
stars: 34
forks: 3
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-18T01:44:13Z"
lastCommitAt: "2026-10-25T02:48:10Z"
lastReleaseAt: "2026-03-21T05:00:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 15
maintainers: ["Qsnh"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf2eb1833e57c4fb72fedd7e4936829982f98d998224098527b85ccae683fb5f/theopenbee/openbee"
---

# OpenBee — Build smarter AI teams.

**OpenBee** is an around-the-clock digital worker solution, dedicated to making AI Agents your 7×24 always-on assistant.

To learn more about the project, visit [docs.theopenbee.com](https://docs.theopenbee.com).

## 📸 Screenshots

## 🚀 Quick Start

### Step 1: Install

```bash
npm install -g @theopenbee/cli
```

The platform-specific binary is downloaded automatically. Supports Linux / macOS / Windows (amd64 & arm64).

```bash
curl -fsSL https://raw.githubusercontent.com/theopenbee/openbee/main/install.sh | bash
```

**macOS (Homebrew):**
```bash
brew install theopenbee/tap/openbee
```

**Windows (Scoop):**
```bash
scoop bucket add theopenbee https://github.com/theopenbee/scoop-bucket
scoop install theopenbee/openbee
```

Visit [GitHub Releases](https://github.com/theopenbee/openbee/releases), download the archive for your platform, extract it, and place the `openbee` executable in your PATH.

### Step 2: Generate a config file

```bash
openbee config
```

The wizard will guide you through:
- Agent executable path
- Platform(s) to enable (Lark / DingTalk / WeCom / WeChat / Telegram / Linear) and their credentials
- Advanced options (can be…
