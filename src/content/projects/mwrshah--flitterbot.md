---
repo: "mwrshah/flitterbot"
name: "flitterbot"
description: "A lightweight orchestration agent that drives Pi Agents or Claude Code sessions from a singular surface"
readmeQualityOk: true
url: "https://github.com/mwrshah/flitterbot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 5
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-07T12:19:58Z"
lastCommitAt: "2026-08-01T06:13:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 42
maintainers: ["mwrshah"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1175229289/a0c0bf8c-285a-47e6-b292-23a7f96f8356?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061722Z&X-Amz-Expires=300&X-Amz-Signature=5114fc239f7645cfdcb7fff37e88d295a93de3826bb6c489ecab5065a3eaa1eb&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTM0MiwibmJmIjoxNzg1NTY1MDQyLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.PKTbgcLtMcMN_XFfjGpYhYqiZ6Djti0e11w5TKAvthE"
---

# Flitterbot

Orchestration runtime for Claude Code. Routes WhatsApp/web messages to concurrent Pi agents that supervise Claude Code sessions in git worktrees.

Architecture: [`docs/overview.md`](https://github.com/mwrshah/flitterbot/blob/HEAD/docs/overview.md). Deep dives: [`docs/<feature>/FEATURE.md`](https://github.com/mwrshah/flitterbot/blob/HEAD/docs/).

## Prerequisites

Node.js 22+, pnpm, tmux, Claude Code CLI, sqlite3.

## Install

```bash
pnpm install && pnpm --dir web install
cp .env.example .env
node installer/install.mjs
~/.flitterbot/bin/flitterbot-up start
~/.flitterbot/bin/flitterbot-wa auth
pnpm --dir web dev
```

Step by step: copying `.env.example` gives you a file in which to set `GROQ_API_KEY`; `installer/install.mjs` deploys `~/.flitterbot/` and wires the hooks; the last two steps are optional — `flitterbot-wa auth` links WhatsApp, and `pnpm --dir web dev` starts the web UI on port 3188.

Installer flags: `--dry-run` preview, `--with-scheduler` launchd/systemd cron.

## Config

`.env`: `GROQ_API_KEY` required for classification. Model-provider credentials are configured from *Settings → Accounts & Model providers* in the Flitterbot web UI, or supplied through…
