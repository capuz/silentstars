---
repo: "XIADENGMA/ai-intervention-agent"
name: "ai-intervention-agent"
description: "An MCP tool that enables users to have real-time control over the AI execution process."
readmeQualityOk: true
url: "https://github.com/XIADENGMA/ai-intervention-agent"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 16
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-17T06:50:18Z"
lastCommitAt: "2026-07-07T06:39:41Z"
lastReleaseAt: "2026-01-07T05:20:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 63
maintainers: ["XIADENGMA", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/02e12bd4ec1b1a4637cb83c90e4a5ed14c1379c347a53c906c3d1afc398d32c3/XIADENGMA/ai-intervention-agent"
---

</a>

  <h2>AI Intervention Agent</h2>

  <p><strong>Real-time user intervention for MCP agents — pause, course-correct, resume.</strong></p>

  <p>
    </a>
    </a>
    </a>
  </p>

  <p>
    English | <a href="./README.zh-CN.md">简体中文</a>
  </p>
</div>

---

Ever had your AI agent confidently walk off in the wrong direction mid-task? AI Intervention Agent gives you a Web UI to **pause** the agent at key moments, review what it's about to do, type a course-correction, attach screenshots, and **resume** — all through the MCP `interactive_feedback` tool, without ending the conversation.

Works with `Cursor`, `VS Code`, `Claude Code`, `Augment`, `Windsurf`, `Trae`, and more.

## Quick start

### Quickest: ask your AI to install it for you

If your IDE/CLI has an AI agent (Cursor, Claude Code, VS Code, Windsurf, Trae, Augment, ...), paste the prompt below in chat and let it write the config for you.

<details>
<summary>Click to copy the install prompt</summary>

```text
Please configure my IDE / AI tool to use the `ai-intervention-agent` MCP server:

1. Locate the correct MCP config file for my current IDE
   (e.g. `.cursor/mcp.json` or `~/.cursor/mcp.json` for Cursor,…
