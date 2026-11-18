---
repo: "Artoxem/workspace-operator"
name: "workspace-operator"
description: "Local MCP server for Google Workspace: 39 tools for Drive, Docs, Sheets, Gmail, Calendar, Tasks, Forms and Apps Script. Bulk plan/confirm/undo, OAuth scope routing, read-only/core/full profiles, no permanent file deletion. MIT."
readmeQualityOk: true
url: "https://github.com/Artoxem/workspace-operator"
homepage: "https://pypi.org/project/workspace-operator-mcp/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "automation", "claude", "cursor", "docker", "gmail", "google-calendar", "google-docs", "google-drive", "google-sheets"]
stars: 12
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 9
createdAt: "2026-02-04T12:31:31Z"
lastCommitAt: "2026-11-18T12:01:42Z"
lastReleaseAt: "2026-11-11T18:31:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 67
maintainers: ["Artoxem"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1149707060/15385697-1ac8-444d-8e8d-5585deb71ce6"
---

# Workspace Operator

**Deep automation for Google Workspace through the Model Context Protocol**

Drive · Docs · Sheets · Gmail · Calendar · Tasks · Forms · Apps Script — one local
MCP server with **39 consolidated tools** (20 in the default `core` profile),
staged writes and server-side tool profiles.

[English](https://github.com/Artoxem/workspace-operator/blob/HEAD/README.md) · [Русский](https://github.com/Artoxem/workspace-operator/blob/HEAD/README.ru.md)

---

Workspace Operator runs on your machine, talks to
Google over your own OAuth client, and gives an AI agent the operations that turn
"read my inbox" into "do the work and let me undo it": staged Apps Script updates, file transfer,
sheet formatting, threaded replies and attachments.

**39 tools · 3 resources · 3 resource templates · 7 prompts**, every tool annotated
with `readOnlyHint` / `destructiveHint`.

Nothing here is tied to a specific account, spreadsheet or document: every tool
takes identifiers and ranges, and all examples use synthetic data.

*Find the last message, read it, then move it to Trash. The message stays recoverable for 30 days.*
