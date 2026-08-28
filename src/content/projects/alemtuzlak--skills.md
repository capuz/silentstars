---
repo: "AlemTuzlak/skills"
name: "skills"
description: "Personal AI agent skills for Claude Code, Copilot, Codex, Gemini & Cursor — turn a PR or idea into marketing content, technical Slidev presentations, courses, changelogs, and rendered videos."
readmeQualityOk: true
url: "https://github.com/AlemTuzlak/skills"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [32, 32]
topics: ["agent-skills", "ai-agents", "anthropic", "changelog", "claude", "claude-code", "codex", "copilot", "cursor", "gemini-cli"]
stars: 39
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-11T20:03:05Z"
lastCommitAt: "2026-08-28T14:24:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 30
maintainers: ["AlemTuzlak"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9e1ab75e60f970ea0608f3a0f562877c517c2bb6308555b22697ec5a26c2f06/AlemTuzlak/skills"
---

# Skills

Personal [Agent Skills](https://agentskills.io) I use across every project. They turn a PR, a git ref, or a freeform idea into marketing briefs, blog posts, changelogs, social copy, newsletters, video scripts, rendered promo videos, architecture impact docs, technical presentation decks, documentation, RFCs, PRDs, and full courses.

Packaged as a Claude Code plugin, but the skills themselves are plain `SKILL.md` files with standard YAML frontmatter, the same format documented for **Claude Code, GitHub Copilot CLI, OpenAI Codex CLI, Google Gemini CLI, and Cursor**. Drop them in any of those tools' skills directories and they work. See [Install](#install).

---

## Why this exists

I kept rewriting the same prompts: "summarize this PR for marketing", "draft the changelog", "write a launch tweet", "make me a 30s promo video". Every time, slightly different framing, slightly different quality. So I baked the *expert versions* of those prompts into reusable skills with strong opinions:

- **Decision-maker framing.** Architecture and marketing skills lead with the *"so what?"*, not what was refactored.
- **Input pluralism.** Every skill accepts a PR URL, a git ref range…
