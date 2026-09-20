---
repo: "william0wang/zcode-acp"
name: "zcode-acp"
description: "ACP adapter for ZCode — drive GLM-5.3 and GLM-5.3-Flash from IDEA, VS Code, Zed or any ACP client; pair with zcode-acp-remote for phone/web access"
readmeQualityOk: true
url: "https://github.com/william0wang/zcode-acp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["acp", "agents", "zcode", "vscode", "zed", "glm-5-3", "idea"]
stars: 47
forks: 15
openIssues: 1
closedIssues: 17
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-07-05T07:34:18Z"
lastCommitAt: "2026-09-20T08:46:57Z"
lastReleaseAt: "2026-09-03T13:16:39Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 46
maintainers: ["william0wang", "github-actions[bot]", "jbellis"]
openGraphImageUrl: "https://opengraph.githubassets.com/564901e19d405f708ff9c56cfb49d01f6be717d0e41292128f861596f18e3139/william0wang/zcode-acp"
---

# zcode-acp-server

English | **[简体中文](https://github.com/william0wang/zcode-acp/blob/HEAD/README.zh-CN.md)**

A standalone [Agent Client Protocol](https://agentclientprotocol.com/) (ACP) server that bridges the headless **ZCode** app-server to ACP-compatible editors such as [Zed](https://zed.dev) and JetBrains IDEs.

The server launches the ZCode headless app-server (`zcode app-server --stdio`) as a subprocess, translates its internal event stream into ACP `session/update` notifications, and bridges ZCode's interaction channel to ACP — preferring `elicitation/create` when the client supports it, and falling back to `session/request_permission` otherwise — so an editor gets a first-class, native coding-agent experience.

## Why zcode-acp

- **Native editor experience** — streaming diffs, permission prompts and plan mode in Zed / JetBrains' own agent panel. No side-by-side terminal.
- **The official harness, not a reimplementation** — drives the real `zcode app-server`: native tools, skills, MCP and slash commands, auto-compaction, session resume/fork.
- **Beyond the editor** — an interactive terminal chat (`zcode-acp`, a [Martty](https://github.com/openma-ai/Martty)-powered TUI,…
