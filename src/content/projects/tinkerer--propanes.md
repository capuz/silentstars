---
repo: "tinkerer/propanes"
name: "propanes"
description: "Embeddable feedback overlay + agent session bridge for webapps"
readmeQualityOk: true
url: "https://github.com/tinkerer/propanes"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-09T23:05:00Z"
lastCommitAt: "2026-10-26T09:17:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 52
maintainers: ["tinkerer", "rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/51faf8df7dd90415b10ff47d635ece235f5d7e8aa3add42eb0d082f33b113234/tinkerer/propanes"
---

# ProPanes

Feedback overlay + agent session bridge for web apps. Drop a script tag into your app, collect feedback with screenshots, and dispatch AI agents (Claude or Codex) that can see and interact with live browser sessions.

Now you're cooking with gases.

## Demo videos

- [DOM selection and screenshots](https://www.loom.com/share/7bdf87fc2e764979831ee45b910f669d)
- [Dragging panes into new windows and loading remote tmux sessions in Terminal.app](https://www.loom.com/share/8f76efc714464f53a37d9a984a765992)

## Packages

| Package | Role |
|---|---|
| `widget` | Embeddable JS overlay — feedback button, session WebSocket, virtual mouse/keyboard receivers |
| `server` | Hono API + SQLite (Drizzle), session service, launcher daemon, Chief-of-Staff thread store |
| `admin` | Preact SPA dashboard (Signals + Vite) — feedback inbox, session terminals, popout panels |
| `shared` | TypeScript types, Zod schemas, constant tables (permission profiles, runtimes) |
| `e2e` | Playwright cross-viewport suite (desktop + mobile) for admin + widget |
| `harness` | Docker Compose stack (pw-server + pw-browser + your app) for sandboxed agent runs |
| `slack-bot` | Bolt-based Slack integration…
