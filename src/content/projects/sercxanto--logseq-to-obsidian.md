---
repo: "sercxanto/logseq_to_obsidian"
name: "logseq_to_obsidian"
description: "Yet another Logseq to Obsidian converter"
readmeQualityOk: true
url: "https://github.com/sercxanto/logseq_to_obsidian"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["logseq", "markdown", "obsidian", "python"]
stars: 46
forks: 4
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-04T14:43:37Z"
lastCommitAt: "2026-10-31T15:59:01Z"
lastReleaseAt: "2026-07-25T13:10:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 30
maintainers: ["sercxanto", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/54d63ed14f60d1a40a0f646872ceb49c8b5ad33184c9928f5ebe9f83678c8976/sercxanto/logseq_to_obsidian"
---

# Logseq → Obsidian Converter

## Overview

- Converts a Logseq vault (Markdown flavor) to Obsidian-friendly Markdown.
- Handles page properties → YAML front matter, task statuses, block IDs, block references, org-mode blocks → callouts, highlights, numbered lists, and more.
- Preserves non-page folders; moves `pages/` content to the vault root.

## Features

- Page properties (`key:: value`) at top → YAML front matter.
    - Values are quoted when plain YAML would break or silently change them (e.g. `Note: important`, `#book`); numbers, booleans and dates stay unquoted so Obsidian keeps their property type.
- Special mappings:
    - `alias::` or `aliases::` → `aliases: []` (array)
    - `tags::` → `tags: []` (array, without `#`)
    - `title::` → omitted (Obsidian only uses the filename as the note name). If the Logseq title mismatches the vault-relative output path, a warning is emitted so you can tidy it up.
- Task markers:
    - Recognized at the start of a list item (`- STATE ...`, uppercase only):
        - `TODO`, `DOING`, `LATER`, `NOW`, `WAIT`, `WAITING`, `IN-PROGRESS` → `- [ ] ...`
        - `DONE`, `CANCELED`, `CANCELLED` → `- [x] ...`
    - Priorities right after state…
