---
repo: "viamin/agent-harness"
name: "agent-harness"
description: "Use agent CLIs in your ruby code"
url: "https://github.com/viamin/agent-harness"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 2
closedIssues: 90
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-24T20:12:22Z"
lastCommitAt: "2026-06-26T21:31:11Z"
lastReleaseAt: "2026-03-28T01:19:46Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 55
maintainers: ["viamin", "github-actions[bot]", "paid-agents[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcfa863181314079b169efe4d931b9b5b69f40d24a0117f7ec638bb9b0a220ce/viamin/agent-harness"
---

# AgentHarness

A unified Ruby interface for CLI-based AI coding agents like Claude Code, Cursor, Gemini CLI, GitHub Copilot, and more.

## Features

- **Unified Interface**: Single API for multiple AI coding agents
- **10 Built-in Providers**: Claude Code, Cursor, Gemini CLI, GitHub Copilot, Codex, Pi, Aider, OpenCode, Kilocode, Mistral Vibe
- **Full Orchestration**: Provider switching, circuit breakers, rate limiting, and health monitoring
- **Flexible Configuration**: YAML, Ruby DSL, or environment variables
- **Token Tracking**: Monitor usage across providers for cost and limit management
- **Error Taxonomy**: Standardized error classification for consistent error handling
- **Dynamic Registration**: Add custom providers at runtime

## Installation

Add to your Gemfile:

```ruby
gem "agent-harness"
```

Or install directly:

```bash
gem install agent-harness
```

## Quick Start

```ruby
require "agent_harness"

# Send a message using the default provider
response = AgentHarness.send_message("Write a hello world function in Ruby")
puts response.output

# Use a specific provider
response = AgentHarness.send_message("Explain this code", provider: :cursor)
```

## Configuration…
