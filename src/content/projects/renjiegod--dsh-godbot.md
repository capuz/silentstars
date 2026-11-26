---
repo: "renjiegod/dsh-godbot"
name: "dsh-godbot"
description: "Run Claude Code, Codex, Antigravity, and DSH as one team. Delegate tasks, review results, and take over native agent sessions."
originalDescription: "Run Claude Code, Codex, Antigravity, and DSH as one team. Delegate tasks, review results, and take over native agent sessions."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/renjiegod/dsh-godbot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [78]
topics: ["deepseek-harness", "dsh-plugin", "agent-orchestration", "ai-agents", "claude-code", "codex", "dsh", "google-antigravity", "local-first", "mcp"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-21T00:49:08Z"
lastCommitAt: "2026-11-26T15:07:58Z"
lastReleaseAt: "2026-11-21T23:45:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["renjiegod"]
openGraphImageUrl: "https://opengraph.githubassets.com/11d9bfe8e4d249052a88defddba1d1846f7b044404f8f7ec76cf63d915cff29b/renjiegod/dsh-godbot"
---

## Quick Start

Godbot Workbench runs on macOS and Linux. It requires Node.js 24.9 or later, npm and pnpm, and DSH `0.2.2-rc.2` or a later version in that series. If a compatible DSH is already installed, you can install the plugin directly.

When installing DSH and pnpm for the first time, you can run `npm install -g @deepseek-ai/dsh@0.2.2-rc.5 pnpm@11.1.2`.

```sh
git clone https://github.com/renjiegod/dsh-godbot.git
cd dsh-godbot
npm ci
node scripts/install-local.mjs web
dsh web
```

Open the web page through the login entry provided by DSH, then click **Godbot** (`/#/godbot`) in the sidebar. Select a model for GodBot, then create new team members. Native DSH members require a usable model configured in that profile.

On Linux hosts without a desktop, start with `dsh web --no-open`.

If you see `This DSH profile uses a separate copy` after installation, follow the steps to fix the dependency links of the original profile. [Installation troubleshooting](https://github.com/renjiegod/dsh-godbot/blob/HEAD/docs/user-guide.zh-CN.md#安装后提示-dsh-依赖有两份)
