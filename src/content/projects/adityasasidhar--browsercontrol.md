---
repo: "adityasasidhar/browsercontrol"
name: "browsercontrol"
description: "MCP server that gives AI agents a real browser: annotated screenshots with numbered elements, so the agent clicks by number (Playwright, Set of Marks)"
readmeQualityOk: true
url: "https://github.com/adityasasidhar/browsercontrol"
homepage: "https://adityasasidhar.github.io/browsercontrol/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agents", "browser-automation", "mcp", "claude-code", "codex", "opencode", "browser-agent", "computer-use", "llm-tools", "mcp-server"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-01-08T13:31:47Z"
lastCommitAt: "2026-11-22T11:48:29Z"
lastReleaseAt: "2026-11-21T10:51:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 66
maintainers: ["adityasasidhar", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fc7586ec27a1e14a4da71ebb23e8203c08d5721b4029a6038a58deb68a3f06b/adityasasidhar/browsercontrol"
discussionCount: 0
---

---

BrowserControl is an [MCP](https://modelcontextprotocol.io) server that lets Claude, Cursor, VS Code, or any other MCP client use a real Chromium browser on your machine.

After every action, the agent gets back a screenshot with a **numbered box on every button, link, and field**, plus the same list as text. To press the button marked 5, it calls `click(5)`. No CSS selectors, no guessing coordinates.

## Install

You need [uv](https://docs.astral.sh/uv/getting-started/installation/). Everything else, including the browser, is set up on first run.

**Codex** (installs the local MCP server and the BrowserControl skill):

```bash
codex plugin marketplace add adityasasidhar/browsercontrol
codex plugin add browsercontrol@browsercontrol
```

**Claude Code** (installs the server and a skill that teaches Claude to use it):

```text
/plugin marketplace add adityasasidhar/browsercontrol
/plugin install browsercontrol@browsercontrol
```

**OpenCode 2** (installs the local MCP server and the BrowserControl skill):

```bash
opencode plugin add github:adityasasidhar/browsercontrol
```

**VS Code or Cursor:** one click.

**Anything else:** add this to your client's MCP config.
