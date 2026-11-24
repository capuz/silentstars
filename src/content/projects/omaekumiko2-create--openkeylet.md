---
repo: "omaekumiko2-create/OpenKeylet"
name: "OpenKeylet"
description: "OpenKeylet — Local password and credential manager for AI agents via MCP. Use passwords, API keys, SSH, and TOTP while keeping hidden plaintext out of model context by default."
readmeQualityOk: true
url: "https://github.com/omaekumiko2-create/OpenKeylet"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [53, 30]
topics: ["ai-agents", "ai-security", "api-key-management", "claude-code", "codex", "credential-manager", "cross-platform", "cursor", "local-first", "mcp"]
stars: 136
forks: 9
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-24T21:23:11Z"
lastCommitAt: "2026-11-24T14:07:57Z"
lastReleaseAt: "2026-08-29T02:36:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 54
undervaluedScore: 18
maintainers: ["omaekumiko2-create"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1345418172/3db2652b-05cd-4d10-9f0f-04e486d1d0e6"
discussionCount: 6
---

&nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;

---

**OpenKeylet** bridges your personal local password manager with modern AI coding & terminal agents — including **Antigravity, Codex, Claude Code, Cursor, DeepSeek Harness, and OpenCode**.

When an agent needs to SSH into a server, call an authenticated API, render a `.env` secret file, fill a browser login, or sign in with a **WebAuthn Passkey**, OpenKeylet executes the credential step **locally on your machine** while keeping hidden plaintext out of the LLM context, tool responses, and logs.

---

## Interface Gallery

Designed in a distraction-free **Pure Monochrome Carbon & Porcelain** aesthetic with native platform chrome across Windows, macOS, and Linux.

---

## Architecture: Zero-Plaintext Local Relay

---

## Permission Boundaries & Threat Model

OpenKeylet is intentionally **transparent about what it protects and what it does not**. Because background AI agents must execute credentials smoothly without blocking on a master password every minute, OpenKeylet separates local convenience from cryptographic offline protection:
