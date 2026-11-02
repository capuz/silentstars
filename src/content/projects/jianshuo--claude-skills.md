---
repo: "jianshuo/claude-skills"
name: "claude-skills"
description: "13 Claude Code skills for video production (transcribe / translate / dub / multicam / subtitles / reframe) + WeChat publishing. Compatible with Claude Code, OpenAI Codex CLI, Cursor, Gemini."
originalDescription: "13 Claude Code skills for video production (transcribe / translate / dub / multicam / subtitles / reframe) + WeChat publishing. Compatible with Claude Code, OpenAI Codex CLI, Cursor, Gemini."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jianshuo/claude-skills"
language: "Python"
languages: ["Python", "JavaScript", "Shell"]
languagePcts: [39, 35, 23]
topics: ["agent-skills", "ai-agent", "claude", "claude-code", "claude-skills", "codex", "codex-skills", "dubbing", "ffmpeg", "multicam"]
stars: 137
forks: 22
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-05-11T10:55:36Z"
lastCommitAt: "2026-11-02T17:56:29Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 27
maintainers: ["jianshuo", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/63dde51115b60c1626e09cf9371707334247e907cbca4c58fd7ffedbf9849b0a/jianshuo/claude-skills"
---

# claude-skills

Skills that I（[王建硕](https://github.com/jianshuo)）use day to day in Claude Code.

> Auto-mirrored from `~/.claude/skills/` by a PostToolUse hook —
> Each time I edit a `wjs-*` skill, the corresponding directory is rsynced to this repo and pushed to GitHub.
> Hook source: `~/.claude/skills-publish-hook.sh`

## Prerequisite: Install Claude Code / Install Claude Code

These skills run inside [Claude Code](https://claude.com/code), so install Claude Code first.

```bash
# Option 1: global install via npm (recommended, requires Node.js ≥ 18)
npm install -g @anthropic-ai/claude-code
claude            # start

# Option 2: no install, run once with npx
npx @anthropic-ai/claude-code

# Option 3: native install script (no Node.js required)
# macOS / Linux
curl -fsSL https://claude.ai/install.sh | bash
# Windows (PowerShell)
irm https://claude.ai/install.ps1 | iex
```

After installing, run `claude` in any project directory. On first launch, you will be guided through login (Claude account or API key).
Upgrade: `claude update` (native install) or `npm update -g @anthropic-ai/claude-code` (npm install).

## Install Skills / Install Skills

```bash
# Option 1: install a single…
