---
repo: "xlight/deepseek-visionary"
name: "deepseek-visionary"
description: "Stop your agents from being blind: use DeepSeek's official multimodal vision model (supports DSH, Zed, OpenCode, Codex, Claude Code, Cursor, Claude Desktop)"
originalDescription: "使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xlight/deepseek-visionary"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [47, 47]
topics: ["agent", "deepseek", "deepseek-harness", "dsh-plugin", "harness", "mcp", "mcp-server", "skills"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-08T18:19:20Z"
lastCommitAt: "2026-10-20T08:48:36Z"
lastReleaseAt: "2026-08-10T03:41:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 53
maintainers: ["xlight", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1328041729/ea178cac-4027-48a8-bc2f-48bc6ee723c9"
---

# DeepSeek Visionary

**Make DeepSeek's web vision model the "eyes" of all your AI assistants.** Recognize images directly in Zed, OpenCode, Codex, Claude Code, Cursor, Claude Desktop, and any other agent that supports MCP, as well as in the DeepSeek Harness (DSH, as a native plugin or skill + CLI). Browser auto-login — **no API key, no manual token copying required**.

The Rust full rewrite of the Python `deepseek-vision-mcp`: a single native binary, distributed across multiple platforms — install once, use everywhere. DSH users can run `dsh plugin` to install the native plugin package `@xlight-oss/visionary-dsh` in one step — 5 native tools + text-model image bridging, **everything in one package**.

## Architecture

```mermaid
graph TD
    subgraph 宿主[Any MCP host]
        AG["Zed / OpenCode / Codex / Claude Code / Cursor / Claude Desktop"]
        AG -->|spawn separate process| SRV
    end
    subgraph DSH[DeepSeek Harness]
        DP["@xlight-oss/visionary-dsh plugin<br/>deepseek_vision and 4 other native tools<br/>+ text-model image bridging"]
        DP -->|host process spawn| SRV
    end
    subgraph visionary-server [visionary-server native binary]
        SRV["CLI + MCP…
