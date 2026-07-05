---
repo: "aerovato/container"
name: "container"
description: "Safely run OpenCode, Codex, Claude Code with full permissions."
readmeQualityOk: true
url: "https://github.com/aerovato/container"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["anthropic", "anthropic-claude", "chatgpt", "claude", "claude-ai", "claude-code", "claude-code-plugin", "claude-skills", "codex", "codex-cli"]
stars: 287
forks: 31
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 3
createdAt: "2026-01-08T14:50:55Z"
lastCommitAt: "2026-07-05T20:16:44Z"
lastReleaseAt: "2026-05-05T13:08:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 31
maintainers: ["kevinMEH", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed618e89cba706fb8b458881f4ed57ace103f555d09863c073ce2ef812d81da9/aerovato/container"
---

</p>

#### `container`: Isolated Docker environments for your autonomous coding harnesses.

#### Simple. Lightweight. Secure.

## Quickstart

### Prerequisites

- **A Windows, Mac, or Linux machine** (Both Windows native and WSL are now supported!)
- **Docker or Podman** — Docker Desktop/Engine or Podman

### Installation

**macOS / Linux:**

```bash
curl -fsSL https://container.aerovato.com/install.sh | sh
```

**Windows:**

```powershell
irm https://container.aerovato.com/install.ps1 | iex
```

**Alternative via npm** (requires Node.js):

```bash
npm uninstall -g code-container      # Uninstall V2 if present
npm install -g @aerovato/container   # Install container V3
```

### First Run

Run `container init` (interactive onboarding). It will:

- Detect installed harnesses (Claude Code, OpenCode, etc.)
- Detect installed dev tools and let you choose which to enable
- Migrate your existing configs
- Let you choose Docker or Podman
- Configure SSH and git mounts

Accept the prompt to build the image (first build can take 5+ minutes).

You're done. `container` is ready to use.

### Shameless Self-Promotion

Try [Nitro, a simple and efficient Bash…
