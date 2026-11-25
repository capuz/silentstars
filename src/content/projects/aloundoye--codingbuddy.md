---
repo: "aloundoye/codingbuddy"
name: "codingbuddy"
description: "CodingBuddy is a terminal-native coding agent written in Rust. It combines chat, planning, tool execution, patch workflows, indexing, and long-running autopilot loops in one cross-platform CLI."
readmeQualityOk: true
url: "https://github.com/aloundoye/codingbuddy"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["deepseek", "rust", "ai-agent", "anthropic", "claude-code", "gemini", "gpt", "openai", "opencode"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-02-17T20:06:25Z"
lastCommitAt: "2026-11-25T12:18:37Z"
lastReleaseAt: "2026-11-24T20:50:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 54
maintainers: ["aloundoye"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ad5780e25e29b11039742f7dad9eefaf4d3f581e80159aa3a26828cc2cc4424/aloundoye/codingbuddy"
---

# CodingBuddy

CodingBuddy is an open-source AI coding agent for the terminal, with an optional browser UI and VS Code extension. It can explore a repository, plan changes, edit files, run approved checks, and resume work from the same local session.

Use a hosted provider, a local Ollama model, or an OpenAI-compatible gateway. CodingBuddy supports OpenAI Chat Completions and Responses, Anthropic Messages, Gemini GenerateContent, AWS Bedrock Converse, Vertex AI Gemini, Azure OpenAI, and compatible routes such as DeepSeek and OpenRouter. Coding tasks need a model that supports tool calls.

[Install](#installation) · [Quickstart](#quickstart) · [Provider setup](https://github.com/aloundoye/codingbuddy/blob/HEAD/docs/PROVIDER_SUPPORT.md) · [User guide](https://github.com/aloundoye/codingbuddy/blob/HEAD/docs/USER_GUIDE.md) · [0.5.0 release notes](https://github.com/aloundoye/codingbuddy/blob/HEAD/docs/releases/0.5.0.md)

## Installation

The installers select a prebuilt binary for macOS, GNU/Linux, or Windows on x64 or ARM64.

**macOS or Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/aloundoye/codingbuddy/main/scripts/install.sh | bash
```

**Windows PowerShell**
