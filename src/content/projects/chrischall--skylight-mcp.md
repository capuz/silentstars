---
repo: "chrischall/skylight-mcp"
name: "skylight-mcp"
description: "Skylight Calendar MCP — read/write family calendar events, chores, rewards, and shared lists."
readmeQualityOk: true
url: "https://github.com/chrischall/skylight-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 10
forks: 9
openIssues: 2
closedIssues: 26
watchers: 0
contributors: 6
recentReleases: 2
createdAt: "2026-05-30T16:41:02Z"
lastCommitAt: "2026-09-19T01:16:59Z"
lastReleaseAt: "2026-07-14T10:40:19Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 68
maintainers: ["chrischall", "dependabot[bot]", "bschrib"]
openGraphImageUrl: "https://opengraph.githubassets.com/a664eb27a093055fb4b4384a54392d250c898661054c304a2b263afcf8c42e0b/chrischall/skylight-mcp"
---

# skylight-mcp

MCP server for [Skylight Calendar](https://www.ourskylight.com) — 114 tools across calendar events (read+write), shared lists (read+write), chores and rewards (read+write), task-box items (read+write), meals (read+write), AI auto-creation (meal-plan + activity-idea generators with draft review/approve), messages and albums (read+write), photo/video upload, and frame/device/account settings + calendar + member management (read+write, incl. preset and custom-photo avatars).

Every API request carries the `skylight-api-version: 2026-05-01` header (matching the official mobile app); without it some features 422 with "API version does not support …".

## Auth

The server uses a headless email+password OAuth2 authorization-code flow — no SSO, no 2FA, no browser extension required. Configure it with `SKYLIGHT_REFRESH_TOKEN` if you already hold a token, or `SKYLIGHT_EMAIL` + `SKYLIGHT_PASSWORD` to log in for one.

On first tool call, the server performs four steps against `https://app.ourskylight.com`:
1. `GET /auth/session/new` — fetch the Rails CSRF token and session cookie.
2. `POST /auth/session` — log in with email + password (must happen before OAuth authorize).
3.…
