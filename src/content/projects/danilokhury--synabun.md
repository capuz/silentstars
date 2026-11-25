---
repo: "danilokhury/Synabun"
name: "Synabun"
description: "Open-source persistent memory MCP server and self-hosted AI workspace for Claude Code, Codex and OpenCode. SynaBun Assistant coordinates their agents."
readmeQualityOk: true
url: "https://github.com/danilokhury/Synabun"
homepage: "https://synabun.ai"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
topics: ["ai", "claudecode", "hooks", "mcp", "ai-agents", "ai-memory", "claude", "claude-code", "codex", "coding-agents"]
stars: 75
forks: 10
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-02-12T04:49:42Z"
lastCommitAt: "2026-11-25T02:58:57Z"
lastReleaseAt: "2026-10-29T03:13:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 44
maintainers: ["danilokhury"]
openGraphImageUrl: "https://opengraph.githubassets.com/75c0b4553aa18566a59579631dd4a7a91b40c1254bb3120c9d7bdd4d2fb929ae/danilokhury/Synabun"
discussionCount: 5
---

Long-term memory for your AI coding tools, stored on your own computer.

---

**SynaBun is an open-source, self-hosted AI workspace and persistent memory MCP server: SynaBun Assistant coordinates Claude Code, Codex and OpenCode agents.** What you decided, fixed and explained in one session is there in the next one, in every project and every tool you connect, so you stop repeating yourself. It all lives in one SQLite file on your computer: no account, no cloud service, no API key.

```bash
npm install -g synabun
```

`synabun` starts the app. `synabun mcp` is the MCP server on stdio, for any MCP client:

```json
{
  "mcpServers": {
    "SynaBun": {
      "command": "npx",
      "args": ["-y", "synabun", "mcp"]
    }
  }
}
```

After the global install, `"command": "synabun", "args": ["mcp"]` runs the same server. Read the [docs](https://synabun.ai/docs), or see how SynaBun [compares](https://synabun.ai/compare) with other memory tools.
