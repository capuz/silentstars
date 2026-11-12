---
repo: "magichourhq/magic-hour-mcp"
name: "magic-hour-mcp"
description: "Hosted MCP server for generating and editing video, images, and audio with the Magic Hour API."
readmeQualityOk: true
url: "https://github.com/magichourhq/magic-hour-mcp"
homepage: "https://magichour.ai/mcp"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["claude-plugin", "mcp", "mcp-server", "openai-plugin", "ai-audio", "ai-image", "ai-video", "generative-ai", "model-context-protocol", "face-swap"]
stars: 9
forks: 5
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2026-06-20T03:54:38Z"
lastCommitAt: "2026-11-12T05:41:22Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 62
maintainers: ["runshouse", "davidhu2000", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/46a478c5dcbe2ef79a79070c7e8c4c9b4b99c7ce994f0b9276cdba76472eed3c/magichourhq/magic-hour-mcp"
---

# Magic Hour MCP Server

OpenAPI-backed MCP server for Magic Hour image and video generation and editing,
music generation, uploads, completion waiting and retrieval of existing audio projects.

At startup, this server builds MCP tools from the canonical `docs/openapi.json`
with `FastMCP.from_openapi()`. Installed distributions bundle that snapshot inside
the Python package, so startup does not require a repository checkout. The spec
supplies endpoint coverage, while
Magic Hour MCP policies add agent-facing guidance for async polling, uploads,
and project downloads.

## Connect an agent

Hosted creation endpoint: **https://mcp.magichour.ai/**

Follow the [client setup guide](https://docs.magichour.ai/integration/model-context-protocol)
for Claude, Claude Code, Codex CLI or ChatGPT. After connecting, call
`get_account_info` to verify API access and inspect the account before generation;
`ping` alone does not validate the API key.

Try: “Use my portrait to create a cinematic space-pilot still, then animate it
with a slow camera push. Keep my face consistent, wait for the render and show
the finished video. Check account eligibility and cost before spending credits.”

Use…
