---
repo: "EndoTheDev/omega"
name: "omega"
description: "Self-hosted AI agent platform - modular Go core, TUI, multi-provider LLM routing. Started as a Pi/Tau port, long since its own project."
readmeQualityOk: true
url: "https://github.com/EndoTheDev/omega"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [52, 25]
topics: ["ai", "ai-agent", "cli", "golang", "llm", "ollama", "self-hosted"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-08-12T19:03:05Z"
lastCommitAt: "2026-11-16T18:52:34Z"
lastReleaseAt: "2026-08-29T03:35:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 64
maintainers: ["EndoTheDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ef7934781b200c4df2c17a7649dc6f5929733287a949b0a9e45d71f25e0bc1f/EndoTheDev/omega"
fundingLinks: ["GITHUB:https://github.com/EndoTheDev", "KO_FI:https://ko-fi.com/endothedev"]
---

# Ω omega

omega is an AI assistant that reads files, runs
commands, and edits code. It talks to LLM providers (Ollama, OpenAI,
Anthropic) and streams responses in real time. Single binary, two
faces: a plain CLI agent loop (first run walks you through setup) and
a served webui - persistent sessions, context compaction, and an
in-process module system on both. No screen furniture in the
terminal: the browser is the app.

The web interface is a VS Code-style dock: draggable panes with
honest per-pane floors, live-streaming chat with retry and image
attachments, sessions with search and pinning, settings, cron,
logs, a file manager with image previews, a terminal pane, an
embedded browser, the approval gate and a kanban board - all
embedded, no separate frontend to
run (`omega serve`). Conversations branch: every retry is a sibling
variant you can switch between. Agents can ask mid-run via verdict
cards (single- or multi-choice, or free text), risky shell commands
pass the approval gate, finished tasks ring a bell, chats can be
ephemeral (in-memory only, nothing on disk), and multiple named
agents run side by side.
