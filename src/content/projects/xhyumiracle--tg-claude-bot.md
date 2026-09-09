---
repo: "xhyumiracle/tg-claude-bot"
name: "tg-claude-bot"
description: "Telegram bridge for Claude Code: resume any CLI session, per-topic chats, local whisper voice, inline-button approvals, live status"
readmeQualityOk: true
url: "https://github.com/xhyumiracle/tg-claude-bot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anthropic", "claude", "claude-agent-sdk", "claude-code", "telegram-bot", "vibe-coding", "voice"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-22T08:19:38Z"
lastCommitAt: "2026-09-09T08:18:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["xhyumiracle"]
openGraphImageUrl: "https://opengraph.githubassets.com/327d2d784eaa8708fdb41a21475885b02671111ed92a3db57bce824f54d918cb/xhyumiracle/tg-claude-bot"
---

# tg-claude-bot

**Your local Claude Code, in your pocket.**

A single-file Telegram bridge to the Claude Code CLI: pick up your sessions
from your phone, vibe-code by voice, keep every tool and skill, answer
prompts with buttons.

</div>

---

Messaging the bot is like typing `claude` in a shell — same tools, skills, and
config. It *is* your local CLI: `/resume` picks up any session from the
terminal. The bot is a thin stateless router; the CLI owns everything.

## ✨ Highlights

| | |
|---|---|
| 🔁 **Resume any real session** | Pick up your actual terminal sessions from your phone — an inline picker over `~/.claude/projects`, with the CLI's own AI titles, cross-project, cwd auto-detected. |
| 🎤 **Vibe-code by voice** | Voice messages just work: local faster-whisper, bilingual zh/en, editable 🎤 transcript. No audio leaves your machine. |
| 🌊 **Streaming replies** | Watch it build live in one status message that morphs into the reply: a spinner with elapsed seconds, a live thinking-token count, each tool call, then the answer streaming in. |
| 🔘 **Buttons instead of a TUI** | Permissions (incl. the CLI's *don't-ask-again*), plan approval, and clarifying questions as inline…
