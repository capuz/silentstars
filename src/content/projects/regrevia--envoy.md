---
repo: "regrevia/Envoy"
name: "Envoy"
description: "Tool for converting video/multimodal files into AI materials"
originalDescription: "从视频/多模态文件转换为AI材料工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/regrevia/Envoy"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 25
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-06-08T13:19:00Z"
lastCommitAt: "2026-10-22T08:48:34Z"
lastReleaseAt: "2026-10-22T08:53:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 61
undervaluedScore: 34
maintainers: ["regrevia"]
openGraphImageUrl: "https://opengraph.githubassets.com/f65cd96ed080451e33f84b3e74e7be38fc03375cfa277f2eeddacfcd2b375552/regrevia/Envoy"
---

# Envoy

**Let AI watch everything.**

Envoy is evolving into a general-purpose link reading and material processing engine for AI Agents. The current `dev` website can process videos and some public articles/image-text pages; the standalone Skill/MCP also supports static web pages, PDF text layers, plain text/Markdown/CSV/JSON links, and visual handoff for public images.

[English](#english)

## Quick Start

### Agent Skill + MCP (recommended)

Envoy has published a standalone Skill/MCP: it extracts public links and user-specified local videos into materials, timestamps, subtitles, and optional ASR/video frames for Agents.
Envoy provides the evidence; the host model handles understanding and delivery.

```bash
npx skills add regrevia/Envoy --skill envoy --global --yes
gh release download v0.1.6 --repo regrevia/Envoy --dir envoy-v0.1.6
cd envoy-v0.1.6
shasum -a 256 -c SHA256SUMS
uv tool install --python 3.11 ./envoy_cli-0.1.6-py3-none-any.whl
envoy browser setup
envoy doctor --json
```

Requires Node.js, GitHub CLI, and uv to already be installed; on Windows, verify checksums with `Get-FileHash`.
Then add `envoy mcp` to the host's stdio MCP configuration and reload the connection.…
