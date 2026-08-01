---
repo: "Henkster72/MarkdownManager"
name: "MarkdownManager"
description: "MarkdownManager is a fast, flexible, self-hosted Markdown viewer + editor for your private notes: built with plain PHP, zero database, and files you can open with the built-in editor."
readmeQualityOk: true
url: "https://github.com/Henkster72/MarkdownManager"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [44, 44]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-12T19:24:33Z"
lastCommitAt: "2026-08-01T06:12:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Henkster72"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa6077038443394ef4c37b7017edc721bb21a66b09ed93b33001ed2008c71214/Henkster72/MarkdownManager"
---

# MarkdownManager v0.96

MarkdownManager is a fast, flat-file Markdown editor you can host yourself. No database. No lock-in. Just a clean web UI for plain text notes that live as `.md` files on disk.

Use it as a simple notebook, or flip on Website Publication Mode (WPM) to run a lightweight CMS workflow with publish states, metadata, and HTML export.

Recent updates:
- v0.96: The link modal now has a PDF picker that lists PDFs from the configured instance `static_path`, displays underscore filenames with spaces, uploads PDFs into that same static folder with spaces converted to underscores, and inserts `{{document.pdf}}{:class=pdflink}` tokens for instance-specific PDF styling. Explorer focus now scrolls only inside the note pane, preventing large split-view index pages from jumping upward.
- v0.958: WPM onboarding is now documented as a reusable project workflow. New-page WPM metadata uses translated boolean checkboxes and omits the non-WPM content field, while an empty visual preview opens the new-page modal in all supported UI languages. The minipc template sync now resolves each renderer from its instance `.env`, so sites whose instance and Jinja names differ are…
