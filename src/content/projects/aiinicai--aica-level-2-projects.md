---
repo: "aiinicai/AICA-Level-2-Projects"
name: "AICA-Level-2-Projects"
description: "Capstone Project"
readmeQualityOk: true
url: "https://github.com/aiinicai/AICA-Level-2-Projects"
language: "Python"
languages: ["Python", "TypeScript", "HTML"]
languagePcts: [34, 27, 20]
stars: 11
forks: 494
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 290
recentReleases: 0
createdAt: "2026-07-20T05:05:43Z"
lastCommitAt: "2026-10-13T10:57:07Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 85
undervaluedScore: 52
maintainers: ["aiinicai"]
openGraphImageUrl: "https://opengraph.githubassets.com/46a3179168dd8a998f5928a3b3c74da810fe3cb2aa9c9ce54116e84d8966d026/aiinicai/AICA-Level-2-Projects"
---

# GST Inward HSN/SAC Fetcher — V1

Desktop app that reads a downloaded NIC e-invoice "Received" JSON export and
produces an HSN-wise Excel report. Runs fully offline — no data leaves the
machine.

## What's built in this version (V1)

- **Home** — Manual upload of a downloaded e-invoice JSON. Decodes every
  record's embedded signed invoice, extracts HSN-level line items, stores
  them locally (SQLite), and is ready to export.
  "Fetch from portal" tile is present but disabled — that's the V2
  auto-download feature, not built yet.
- **Reports** — Pick a From/To month range (and optionally a GSTIN) and
  generate a consolidated 3-sheet Excel (Invoice Summary / HSN Item Detail /
  HSN Summary). Keeps a running list of past exports.
- **Settings** — Register the GSTINs you work with, and choose the folder
  where generated Excel reports are saved.

Data accumulates month-on-month in a local database
(`%APPDATA%\GSTInwardHSNFetcher\data.db`), so re-running the app next month
adds to what's already there rather than starting over. Re-uploading the same
JSON is safe — invoices are keyed by IRN, so nothing gets duplicated.

## Before you build — one-time setup on your Windows machine…
