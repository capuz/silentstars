---
repo: "NomenAK/jev-tools"
name: "jev-tools"
description: "Six evidence-oriented tools for pi and omp coding agents, compatible with the Jev API format."
readmeQualityOk: true
url: "https://github.com/NomenAK/jev-tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["code-review", "coding-agents", "jev", "npm-package", "omp", "pi", "test-selection", "typescript"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-02T09:54:54Z"
lastCommitAt: "2026-10-05T10:47:50Z"
lastReleaseAt: "2026-10-03T13:58:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["NomenAK", "mithun50"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2e38e0b8319645bec87de6d3a8cbb2b7608b8da3f047fe786bd5235686da594/NomenAK/jev-tools"
---

# jev-agent-tools

Six evidence-oriented tools for pi, omp and any MCP client, compatible with the Jev API format. Use them to navigate unfamiliar code, ask typed questions about repository evidence, review completed changes and select existing tests. They complement reading, searching and execution; they do not replace them.

[Watch the launch video](https://github.com/NomenAK/jev-tools/blob/HEAD/docs/media/jev-agent-tools-launch.mp4) (74 s, MP4).

## Install

Install through your host's package manager, or register the MCP server with an MCP client. The npm package is `jev-agent-tools`. pi and omp load its TypeScript sources directly; the MCP server ships prebuilt.

### pi

```sh
pi install npm:jev-agent-tools@0.3.0
# Project-local installation:
pi install -l npm:jev-agent-tools@0.3.0
```

### omp

```sh
omp plugin install jev-agent-tools@0.3.0
```

### Any MCP client

Since version 0.2.0, the package also ships `jev-agent-tools-mcp`, a stdio MCP server that exposes the same six tools to any MCP client: Claude Code, Claude Desktop, Kiro, Cursor, VS Code, Codex CLI and others. A typical `mcpServers` entry:

```json
{
  "mcpServers": {
    "jev": {
      "command": "npx",…
