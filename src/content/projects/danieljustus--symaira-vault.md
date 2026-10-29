---
repo: "danieljustus/symaira-vault"
name: "symaira-vault"
description: "🔐 The password manager for terminal users and AI agents. Age-encrypted, keyring-cached, MCP-ready. Zero telemetry."
readmeQualityOk: true
url: "https://github.com/danieljustus/symaira-vault"
homepage: "https://symaira.com"
language: "Go"
languages: ["Go", "Rust"]
languagePcts: [54, 37]
topics: ["age-encryption", "cli", "golang", "mcp", "password-manager", "security", "ai-agents", "mcp-server", "claude-code", "codex-cli"]
stars: 33
forks: 3
openIssues: 41
closedIssues: 718
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-22T19:28:03Z"
lastCommitAt: "2026-10-29T05:49:45Z"
lastReleaseAt: "2026-04-27T18:15:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 44
maintainers: ["danieljustus", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1218343680/cbcb86bc-1793-478b-b119-49137ac61fb3"
discussionCount: 0
---

# Symaira Vault

> **Accepted product direction — implementation pending:** The independent symvault CLI/service and repository remain. Brain GUI/CLI become the normal integrated credential-management entrypoints. The separate management app remains transitional and is retired only after verified replacement, secure input/approval, data migration and rollback. This is not a removal of the credential service or a requirement to install Brain for CLI use. See [PB-2026-09-09](https://github.com/danieljustus/symaira-vault/blob/HEAD/docs/product-boundaries.md).

A modern, secure command-line password manager (`symvault`) written in Go. Uses [age](https://age-encryption.org/) for encryption with built-in MCP server support for AI agent integration.

> **Status:** pre-1.0 — the CLI surface and vault format are stabilizing under [SemVer](https://semver.org/); see [CHANGELOG.md](https://github.com/danieljustus/symaira-vault/blob/HEAD/CHANGELOG.md) for the release history.

> **Safety Notice**: Symaira Vault manages sensitive secrets. Use at your own risk, keep tested backups of your vault, and verify recovery before relying on it for critical credentials.

## Features

- **Modern…
