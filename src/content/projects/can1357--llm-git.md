---
repo: "can1357/llm-git"
name: "llm-git"
description: "AI commit message generator. Conventional commits, compose mode, and history rewrite via Claude/GPT APIs."
url: "https://github.com/can1357/llm-git"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "automation", "claude", "cli", "conventional-commits", "developer-tools", "git", "llm", "rust"]
stars: 40
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2025-10-27T11:42:15Z"
lastCommitAt: "2026-06-27T06:22:20Z"
lastReleaseAt: "2026-06-18T00:19:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 50
maintainers: ["can1357", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c631b814f6ee954cb4a45c6b54dc1f4592b12c3cdea4de1349f370a29299da8f/can1357/llm-git"
---

</p>

  <strong>LLM-powered git commit message generator</strong>
</p>

</p>

  Generates <a href="https://www.conventionalcommits.org">conventional commits</a> from git diffs using Claude AI or any OpenAI-compatible API.<br>
  Automatic changelog maintenance, multi-commit composition, and full history rewriting.
</p>

---

## Features

- **Conventional commits** — Generates properly formatted commit messages with type, scope, and past-tense summary (≤72 chars)
- **Automatic changelogs** — Maintains `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com) format with monorepo support
- **Compose mode** — Splits large staged changes into multiple logical atomic commits
- **Rewrite mode** — Converts entire git history to conventional commits (with automatic backup)
- **Map-reduce analysis** — Parallel per-file analysis for large commits without truncation
- **Any LLM provider** — Works with Anthropic, OpenAI, OpenRouter, or any OpenAI-compatible API

## Quick Start

```bash
# Install
uv tool install lgit-cli

# Configure (pick one)
export LLM_GIT_API_KEY=your_anthropic_key                    # Direct Anthropic
export LLM_GIT_API_URL=https://openrouter.ai/api/v1…
