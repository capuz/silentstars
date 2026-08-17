---
repo: "mycelium-hq/ai-brain-starter"
name: "ai-brain-starter"
description: "The operating system for Claude Code. Memory, accountability, journaling, knowledge graphs, pattern recognition — one install, every session compounds."
readmeQualityOk: true
url: "https://github.com/mycelium-hq/ai-brain-starter"
homepage: "https://adelaidadiazroa.substack.com/p/how-i-built-a-second-brain-that-actually"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [72, 24]
topics: ["claude-code", "obsidian", "second-brain", "productivity", "anthropic", "agent-memory", "claude-plugin", "journaling", "knowledge-management", "mcp"]
stars: 33
forks: 25
openIssues: 27
closedIssues: 14
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-04-09T04:35:52Z"
lastCommitAt: "2026-08-17T04:15:06Z"
lastReleaseAt: "2026-05-07T04:56:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 85
undervaluedScore: 44
maintainers: ["adelaidasofia", "juandavidconde", "ysik288"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1205564021/c9868069-8153-4c23-916a-ca9242b38228"
fundingLinks: ["CUSTOM:https://myceliumai.co"]
discussionCount: 1
---

# AI Brain Starter

<p>
</p>

A verification harness around your AI agent. So memory compounds instead of corrupts.

---

You have a smart assistant that forgets you every morning. This is the harness that gives it a memory: notes on your disk that the assistant reads before answering you, deterministic guards that block bad edits before they land, and a session-end ritual that files what mattered. Whether you write, run a company, or just want context to stop disappearing between conversations, the same surface works.

---

Microsoft DELEGATE-52 ([arxiv.org/abs/2604.15597](https://arxiv.org/abs/2604.15597), April 2026) measured what most operators already feel: frontier LLMs corrupt 25% of professional content over 20 edit interactions. Document size amplifies the failure 5×. The paper concludes the only reliable mitigation is a domain-specific verification harness around the model.

This is one.

**Four moving parts.**

- **Vault as ground truth.** Markdown on disk. Decisions, patterns, context. The model reads from the vault, not from chat history.
- **Hooks as deterministic guards.** Pre-write hooks block bad edits before they land. Em dashes in external prose. Frontmatter…
