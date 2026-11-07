---
repo: "DeepanshuMishraa/sheet"
name: "sheet"
description: "A local-first infinite canvas for UI design — one your agent can edit. Desktop app, MCP-native."
readmeQualityOk: true
url: "https://github.com/DeepanshuMishraa/sheet"
homepage: "https://sheet.dipxsy.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 139
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2026-09-25T16:55:27Z"
lastCommitAt: "2026-11-07T13:54:38Z"
lastReleaseAt: "2026-10-29T17:07:44Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 33
maintainers: ["DeepanshuMishraa", "404khai"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb5be1db6a478960755c6a877e3ef09a6f718e5d949702f6bbcd2816feab1f08/DeepanshuMishraa/sheet"
---

A local-first infinite canvas for UI design — one your agent can edit.

Arrange structured UI nodes on a canvas. Connect Claude, Codex, Cursor, or
opencode over MCP and they mutate the same document through typed transactions.

- **Agent-native** — 35 MCP tools over the same engine the editor uses
- **Local-first** — one SQLite file, one loopback server, no accounts
- **Versioned** — history, plus isolated drafts you can merge back
- **One-way export** — HTML, React/TSX, JSON, PNG

## Quick start

```bash
bun install
bun run dev              # local server on :4100
bun run dev:desktop      # native window (needs Rust + Tauri prerequisites)
```

Point an MCP client at `http://127.0.0.1:4100/mcp`. The Integrations page in
the app shows ready-made snippets.

`bun run build:desktop` produces the packaged app with the server compiled in.

Windows users: see [windows/README.md](https://github.com/DeepanshuMishraa/sheet/blob/HEAD/windows/README.md) for quick setup, PowerShell scripts (`setup.ps1`, `run.ps1`, `build.ps1`), and development workflows.

## Capture a website

Use the [Sheet Browser Capture…
