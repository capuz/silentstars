---
repo: "PsychQuant/che-apple-mail-mcp"
name: "che-apple-mail-mcp"
description: "Apple Mail MCP server — 53 tools with SQLite-powered millisecond search across 250K+ emails, .emlx parser, batch markdown export, and composing that never injects a message body through AppleScript (so no cite-block wrapper). Swift native, Developer ID signed + notarized."
readmeQualityOk: true
url: "https://github.com/PsychQuant/che-apple-mail-mcp"
homepage: "https://github.com/PsychQuant/che-apple-mail-mcp/releases"
language: "Swift"
languages: ["Swift"]
languagePcts: [85]
topics: ["apple-mail", "applescript", "automation", "claude", "email", "macos", "mail-app", "mcp", "model-context-protocol", "swift"]
stars: 10
forks: 3
openIssues: 120
closedIssues: 262
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-13T04:52:55Z"
lastCommitAt: "2026-10-29T10:36:12Z"
lastReleaseAt: "2026-05-02T10:14:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 65
maintainers: ["kiki830621"]
openGraphImageUrl: "https://opengraph.githubassets.com/9709ab4944795b62a234e8a882f9508cab2dde057635fb07f320048f8e898e22/PsychQuant/che-apple-mail-mcp"
---

# che-apple-mail-mcp

**The most comprehensive Apple Mail MCP server** - 59 tools with SQLite-powered millisecond search across 250K+ emails.

[English](https://github.com/PsychQuant/che-apple-mail-mcp/blob/HEAD/README.md) | [繁體中文](https://github.com/PsychQuant/che-apple-mail-mcp/blob/HEAD/README_zh-TW.md)

---

## Why che-apple-mail-mcp?

| Feature | Other MCPs | che-apple-mail-mcp |
|---------|------------|-------------------|
| Total Tools | ~20 | **59** |
| Language | Python | **Swift (Native)** |
| Search Speed | Seconds (AppleScript) | **Milliseconds (SQLite)** |
| Search Fields | Subject/Sender | **Subject/Sender/Recipient/Date** |
| Batch Operations | No | **Up to 50 emails per call** |
| Mailbox Management | Basic | Full CRUD |
| Email Colors | No | 7 flag colors + background |
| VIP Management | No | Yes |
| Rule Management | Partial | Full CRUD |
| Signatures | No | Yes |
| Raw Headers/Source | No | Yes |

---

## Quick Start

Install the **plugin**. It brings the signed binary, the `/archive-mail` command
family, the safety rules, and the staleness hook as one unit:

```bash
claude plugin marketplace add PsychQuant/che-apple-mail-mcp
claude plugin install…
