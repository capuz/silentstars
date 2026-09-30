---
repo: "ownego/token-slayer"
name: "token-slayer"
description: "Cooperative idle boss raid for engineering teams. Every token your coding agents spend (Claude Code, Codex, ...) becomes damage. Live battlefield, real-time websocket hits, Slack kill announcements."
readmeQualityOk: true
url: "https://github.com/ownego/token-slayer"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [55, 28]
stars: 5
forks: 5
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-05-16T06:09:58Z"
lastCommitAt: "2026-09-30T09:56:09Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 85
undervaluedScore: 61
maintainers: ["tung2212002", "HQCuong"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb852ead891a5ed389205e4840fc6bc318303b20c58598663d08902d907c9a19/ownego/token-slayer"
---

# Token Slayer

A cooperative idle boss raid for your team. Every token your AI agents spend
(Claude Code, Codex, Antigravity, Claude Cowork, and claude.ai chats) becomes
damage against the current boss. Hits land in real time on a shared Phaser
battlefield, the team defeats bosses together, and kills are announced in Slack.

## How it works

1. Sign in with Slack and open `/setup`.
2. Run the installer it gives you. It installs the `tok` CLI and registers
   hooks for Claude Code, Codex, and Antigravity.
3. When an agent finishes a turn, the hook reads the token usage locally and
   posts it to `POST /api/events`. Only whitelisted fields leave the machine;
   prompts, tool input, and file paths never do.
4. The server records the event, applies damage to the boss, and broadcasts
   the hit over Reverb to everyone watching `/battlefield`.
5. When the boss falls, the kill goes to Slack and a new boss spawns.

The full pipeline is documented in `.ai/domain/token-tracking.md`.

## Tech stack

- **Laravel 13** on PHP 8.4
- **Livewire 4** + **Tailwind CSS 4** for the pages
- **Filament 5** for the admin dashboard (`/dashboard`)
- **Phaser 3** for the battlefield
- **Laravel Reverb**…
