---
repo: "rekursiv-ai/sagent"
name: "sagent"
description: "A coding-agent CLI and strongly-typed Python library -- self-mutating, hot-swapping, multi-provider, with async tool calls and bidirectional recursive spawn."
readmeQualityOk: true
url: "https://github.com/rekursiv-ai/sagent"
homepage: "https://rekursiv.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-framework", "agent-orchestration", "agentic-ai", "agents", "artificial-intelligence", "claude-code", "codex-cli", "coding-agent", "gemini-cli", "llm-agent"]
stars: 32
forks: 6
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 5
createdAt: "2026-05-05T16:09:51Z"
lastCommitAt: "2026-09-09T08:18:42Z"
lastReleaseAt: "2026-07-29T02:18:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 47
maintainers: ["rekursiv-bot", "jvdillon"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fda4656dca7f4b2ecf29a73ae6d00901cbd2c066cfacd5b5e3461306b837a33/rekursiv-ai/sagent"
---

# sagent🪄

A coding-agent CLI and strongly-typed Python library -- self-mutating, hot-swapping, multi-provider, with async tool calls and bidirectional recursive spawn.

</p>

  ·
  ·
  ·
  ·
  ·
  ·
  ·
  ·
  ·
  ·
  ·
  ·
  ·
  ·
</p>

## Quick Start

```bash
# Mac:
#   # Required for quick install.
#   brew install uv
#   # Optional for improved performance.
#   brew install ripgrep fd

# Ubuntu/Debian:
#   # Required for quick install.
#   sudo apt-get install -y curl
#   curl -LsSf https://astral.sh/uv/install.sh | sh
#   # Optional for improved performance.
#   sudo apt-get install -y ripgrep fd-find

uv tool install sagent

sagent
```

## Better CLI

Things Claude Code, Codex CLI, and Gemini CLI don't do:

- **Async REPL.** Chat with agents *about* jobs while those jobs run. No ctrl+b, no manual juggling.
- **Hot self-mutation.** Switch provider, model, or thinking effort mid-session in plain English. No restart.
- **One CLI, every provider.** Anthropic, OpenAI, Google, Moonshot, DashScope, MiniMax, OpenAI-compatible endpoints, self-hosted HuggingFace models, and a managed `llama.cpp` server, all behind one binary.
- **Unified cost tracking.** One USD total across every…
