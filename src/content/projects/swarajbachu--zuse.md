---
repo: "swarajbachu/zuse"
name: "zuse"
description: "A repository for forkzero"
readmeQualityOk: true
url: "https://github.com/swarajbachu/zuse"
homepage: "https://memoize-web.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 8
forks: 3
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-05-02T12:55:44Z"
lastCommitAt: "2026-07-10T07:00:46Z"
lastReleaseAt: "2026-06-17T15:57:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 64
maintainers: ["swarajbachu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9172bab7cb87827b8ea9446ca10f60e845dba1464c4fa8902b8043b369918c6/swarajbachu/zuse"
---

# Zuse Alpha

A chat-first desktop app for developers who work with AI coding agents. Wraps Claude Code, Codex, Grok, Gemini, Cursor, and OpenCode in a persistent, project-aware interface — structured chat history, rich composer, file viewer, integrated terminal, git worktrees, and session management, all stored locally.

> macOS only. Requires at least one supported agent CLI installed.

---

## Supported agents

| Provider | CLI |
|---|---|
| Claude | `claude` |
| Codex | `codex` |
| Grok | `grok` |
| Gemini | `gemini` |
| Cursor | `cursor` |
| OpenCode | `opencode` |

---

## What's shipped

### Agent sessions
- Start and stop sessions for any supported provider, per project
- Full streaming chat timeline — tool calls, thinking blocks, diffs, error bubbles
- Turn summaries and loader states
- Rate-limit error bubble with reset time
- Answered `AskUserQuestion` cards rendered inline in the timeline

### Composer
- Slash commands: `/clear`, `/new`, `/model`, `/mode`, `/help`
- `@`-mention file picker — fuzzy search any project file, inserts as an inline chip
- Image and PDF attachments (drag-drop, paste, or button)
- Plan mode with `AskUserQuestion` card and `Shift+Tab` flow
-…
