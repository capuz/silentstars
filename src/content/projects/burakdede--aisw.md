---
repo: "burakdede/aisw"
name: "aisw"
description: "AISW | AI Switcher - Switch between multiple Claude Code, Codex CLI, Antigravity and Gemini CLI accounts in one command. Named profile manager for AI coding agents."
readmeQualityOk: true
url: "https://github.com/burakdede/aisw"
homepage: "https://aiswitcher.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["claude", "codex", "gemini", "auth", "profile", "account", "coding-agent", "account-switching", "ai-tools", "claude-code"]
stars: 114
forks: 8
openIssues: 21
closedIssues: 34
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-03-24T23:41:50Z"
lastCommitAt: "2026-09-09T08:21:42Z"
lastReleaseAt: "2026-06-11T21:51:00Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 85
undervaluedScore: 27
maintainers: ["burakdede", "JulioJair"]
openGraphImageUrl: "https://opengraph.githubassets.com/071736e718b4e7d006de1e69c25ce32072a4e36de2e31fdbb15d1a3d9fe85fe8/burakdede/aisw"
---

# aisw

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/burakdede/aisw/main/website/public/aisw-logo.png">
  </picture>
</p>

  </a>
  </a>
  </a>
  </a>
</p>

---

## Why people use AI Switcher

AI Switcher (`aisw`) exists for a very specific kind of mess:

- You use one Claude Code account for work and another for personal projects.
- Codex CLI should use one OpenAI account for client A and a different one for client B, without relying on copied shared ChatGPT session files.
- Gemini CLI or Antigravity CLI is already logged in, but you want to capture that state safely and switch back to it later.
- Your repo should open with the right coding agent account active, not whatever happened to be left over from the last project.

The underlying problem is not just "multiple accounts." It is that each upstream CLI stores auth differently, in different places, with different side effects. Manual switching usually means editing hidden files, copying `auth.json`, juggling `CLAUDE_CONFIG_DIR`, or hoping the shell session you are in still has the right environment.

`aisw` turns that into a named workflow:

- Save each account as a…
