---
repo: "arashnm80/long-caption-bot"
name: "long-caption-bot"
description: "telegram bot to send media with large caption up to 4096 chars"
readmeQualityOk: true
url: "https://github.com/arashnm80/long-caption-bot"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-12T20:38:10Z"
lastCommitAt: "2026-11-14T21:57:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 42
maintainers: ["arashnm80"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc6bc4aa6cf4cafcadfe6f31a1cc9369d2aac2586f089a8bf2a0ad54248fedb4/arashnm80/long-caption-bot"
---

# long-caption-bot
telegram bot to send media with large caption up to 4096 chars

Telethon user operations go through **private-router** (`PRIVATE_ROUTER_URL` + `PRIVATE_ROUTER_TOKEN`). This bot does not open its own Telethon session.

### run
- ensure private-router is up: `curl -s http://127.0.0.1:3010/health`
- `./restart-long-caption-bot.sh`

### albums
- Bot buffers incoming `media_group_id` items, then copies the whole album when you reply with long text (or reply with an album to long text).
- Caption is applied to the first item of the album, same as Telegram’s native album caption.

### moderation
- After each successful caption, the log channel gets a sender card (name / username / id) with Block/Unblock.
- Blocked users get no replies at all (including `/start`).
- Admin DM commands: `/blocked`, `/block <user_id>`, `/unblock <user_id>` (shown on admin `/start`).
- Blocklist file: `blocked_users.json` (local, gitignored).
