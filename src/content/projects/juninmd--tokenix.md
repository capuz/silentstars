---
repo: "juninmd/tokenix"
name: "tokenix"
description: "Local semantic search, symbol graphs, secrets scanning, output filters, and CLI hooks that save 60-90% LLM tokens."
url: "https://github.com/juninmd/tokenix"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["ai", "ai-tools", "claude-code", "cli", "developer-tools", "embeddings", "ollama", "rust", "semantic-search", "token-optimization"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-04T18:14:48Z"
lastCommitAt: "2026-06-25T01:31:52Z"
lastReleaseAt: "2026-05-25T23:15:51Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["juninmd", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e0ce56a9db23e05e38b817439aab800e2fe9fe10a05128e18f8408c7eef8c28/juninmd/tokenix"
discussionCount: 0
---

<p><strong>Local semantic search, symbol graphs, secrets scanning, output filters, and CLI hooks that save 60-90% LLM tokens.</strong></p>

  <p>
  </p>

  <p>
  </p>
</div>

---

> **tokenix** is a local-first Rust CLI that helps AI coding agents understand a repository without dumping huge files into the prompt. It indexes your code, finds relevant chunks by meaning, returns compact file outlines, and can hook into AI tools to replace noisy reads and command output with smaller, more useful context. Works with Claude Code, GitHub Copilot, OpenAI Codex CLI, OpenCode, Gemini, and any MCP client. **No Ollama or external server required.**

```
Without tokenix:  Read(src/auth/middleware.rs) → 800 lines → ~2,400 tokens  (illustrative)
With tokenix:     tokenix read src/auth/middleware.rs → symbol outline → ~180 tokens
```

Savings depend on codebase size, AI behavior, and file sizes. Run `tokenix gain` to see measured Read and command-filter savings; semantic Grep context is logged as usage, not counted as saved tokens.

---

## 🖥 Interactive Dashboard

Run bare `tokenix` to open a terminal dashboard — ten tabs, zero flags. `←`/`→` switch tabs, `↑`/`↓` move, `q` quits. Piped or…
