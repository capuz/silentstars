---
repo: "xlight/deepseek-visionary"
name: "deepseek-visionary"
description: "Give your agents eyes with DeepSeek's official multimodal vision model (supports DSH, Zed, OpenCode, Codex, Claude Code, Cursor, Claude Desktop)"
originalDescription: "使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xlight/deepseek-visionary"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [50, 44]
topics: ["agent", "deepseek", "deepseek-harness", "dsh-plugin", "harness", "mcp", "mcp-server", "skills"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-08T18:19:20Z"
lastCommitAt: "2026-11-17T14:33:00Z"
lastReleaseAt: "2026-08-10T03:41:09Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 48
maintainers: ["xlight", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1328041729/ea178cac-4027-48a8-bc2f-48bc6ee723c9"
---

# DeepSeek Visionary

**Make DeepSeek's web vision model the "eyes" of all your AI assistants.** Recognize images directly in Zed, OpenCode, Codex, Claude Code, Cursor, Claude Desktop, and any other MCP-capable agent, as well as in DeepSeek Harness (DSH, as a native plugin or skill + CLI). The browser logs in automatically, **no API key needed, no manually copying tokens**.

A full Rust rewrite of the Python `deepseek-vision-mcp`: a single native binary with multi-platform distribution, so you install it once and use it everywhere. DSH users can install the native plugin package `@xlight-oss/visionary-dsh` in one step with `dsh plugin`: 5 native tools plus text-model image bridging, **everything in one package**.

## Architecture

```mermaid
graph TD
    subgraph Host[Any MCP host]
        AG["Zed / OpenCode / Codex / Claude Code / Cursor / Claude Desktop"]
        AG -->|spawn separate process| SRV
    end
    subgraph DSH[DeepSeek Harness]
        DP["@xlight-oss/visionary-dsh plugin<br/>deepseek_vision and 6 other native tools<br/>+ text-model image bridging + account pool panel"]
        DP -->|host process spawns| SRV
    end
    subgraph visionary-server native binary…
