---
repo: "flc1125/skills"
name: "skills"
description: "A personal repository of reusable AI agent skills, designed to work across compatible tools with optional ecosystem-specific integrations."
readmeQualityOk: true
url: "https://github.com/flc1125/skills"
homepage: "https://skills.flc.io"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Python"]
languagePcts: [36, 30, 26]
topics: ["skill", "skills", "claude", "claude-code", "codex", "gemini-cli", "marketplace", "yuque", "getnote", "memory"]
stars: 35
forks: 7
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-01-23T02:06:28Z"
lastCommitAt: "2026-09-27T09:28:44Z"
lastReleaseAt: "2026-09-14T01:09:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 52
maintainers: ["renovate[bot]", "flc1125", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcf74e2f70f1a5b272ae9b76de1219c38b711a7c134aa151f676872cd566eb32/flc1125/skills"
---

# Flc's Skills

  A curated collection of specialized skills for AI Agents, optimized for discovery and seamless integration.

  ### 🚀 [https://skills.flc.io](https://skills.flc.io)
</div>

---

An open repository of reusable skills maintained for personal use and public reuse.

This repo contains a Codex plugin, a Claude Code plugin, and installable skills that can be added from [skills.flc.io](https://skills.flc.io) and used as building blocks for agent workflows, AI assistants, or other compatible tools.

The installable skill content lives in `skills/`. The Next.js marketplace that powers [skills.flc.io](https://skills.flc.io) now lives in `web/`.

## ✨ Overview

- Install the full skill collection as a Codex or Claude Code plugin
- Install individual skills from the published skill source
- Browse available skills on the visual marketplace at [skills.flc.io](https://skills.flc.io)
- Reuse the repository as a lightweight source of portable skills

## 📦 Installation

### Install as a Codex plugin

Add this repository as a Codex plugin marketplace, then install the bundled `flc-skills` plugin:

```bash
codex plugin marketplace add flc1125/skills
codex plugin add…
