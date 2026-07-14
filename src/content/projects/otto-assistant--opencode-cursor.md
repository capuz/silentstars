---
repo: "otto-assistant/opencode-cursor"
name: "opencode-cursor"
description: "OpenCode plugin: Cursor API via OAuth, model discovery, and local OpenAI-compatible proxy"
readmeQualityOk: true
url: "https://github.com/otto-assistant/opencode-cursor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 6
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 9
createdAt: "2026-04-08T05:56:51Z"
lastCommitAt: "2026-07-14T05:53:14Z"
lastReleaseAt: "2026-05-07T12:14:56Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 68
maintainers: ["makeittech", "ephraimduncan", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/46a2b07cdea8e69b30c561a629c7c26ab9adcc7f6424d0f885d3125dfb3d445b/otto-assistant/opencode-cursor"
---

# @otto-assistant/opencode-cursor-oauth

High-quality OpenCode provider plugin that brings Cursor models into OpenCode through OAuth, model discovery, and a local OpenAI-compatible proxy.

Designed for real-world agent usage: streaming, tool calls, long conversations, and robust continuation behavior.

## Highlights

- OAuth login with automatic token refresh
- Cursor model discovery directly from API
- Native OpenCode variants for Cursor effort and thinking modes
- OpenAI-compatible `/v1/chat/completions` proxy for OpenCode runtime compatibility
- Stable streaming with tool-calling continuation
- MCP-first tool execution flow for practical agent environments
- Conversation-state handling built for long and tool-heavy sessions
- Production-ready smoke test coverage

## Why teams use it

- **Native feel in OpenCode:** Cursor models are exposed as a regular provider flow in OpenCode.
- **Reliable tool loops:** Tool call handoff and continuation are engineered for iterative agent workflows.
- **Operationally practical:** Focused on reducing common runtime failure modes around streaming, tool calls, and conversation state.
- **Simple integration surface:** Works with standard OpenCode…
