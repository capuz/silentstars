---
repo: "jongalloway/pptx-tools"
name: "pptx-tools"
description: "A unified MCP server + CLI toolkit for automating PowerPoint: read slides, update content, insert images, and generate presentations from code or AI agents."
url: "https://github.com/jongalloway/pptx-tools"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 17
closedIssues: 78
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-16T03:20:17Z"
lastCommitAt: "2026-06-28T03:07:24Z"
lastReleaseAt: "2026-03-26T01:09:48Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 50
maintainers: ["jongalloway", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/85746edc34b290c55f4a60f0daa199437a6db1ca5d165454c0c0855ee4ed691d/jongalloway/pptx-tools"
---

# pptx-tools

Give AI agents native access to PowerPoint. Read slides, extract content, add slides, update text and shape data, and insert images—all through natural language, without touching Office.

**pptx-tools** is a .NET [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that bridges AI reasoning and PowerPoint files. It's built for developers and power users who want to automate content extraction, data-driven slide updates, and intelligent presentation generation.

---

## Quick Install

> **Note:** NuGet publishing is planned. For now, build from source.

```bash
git clone https://github.com/jongalloway/pptx-tools.git
cd pptx-tools
dotnet build PptxTools.slnx --configuration Release
```

### Wire it up to Claude Desktop

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "pptx-tools": {
      "command": "dotnet",
      "args": [
        "run",
        "--project",
        "/absolute/path/to/pptx-tools/src/PptxTools",
        "--configuration",
        "Release"
      ]
    }
  }
}
```

Once NuGet publishing is set up, this simplifies to:

```json
{
  "mcpServers": {
    "pptx-tools": {
      "command": "pptx"…
