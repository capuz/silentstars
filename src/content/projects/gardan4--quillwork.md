---
repo: "gardan4/quillwork"
name: "quillwork"
description: "Edit Word documents as tracked changes, in place: a .docx engine for AI agents. Rust core, Python, MCP."
readmeQualityOk: true
url: "https://github.com/gardan4/quillwork"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [72, 23]
topics: ["ai-agents", "document-editing", "docx", "mcp", "openxml", "python", "redline", "rust", "tracked-changes", "word"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 3
createdAt: "2026-10-27T12:29:44Z"
lastCommitAt: "2026-10-30T10:22:48Z"
lastReleaseAt: "2026-10-28T12:42:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["gardan4", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2fd26852c90173465b01df1aa47cca558b63ed7864b0bd98d60806c1a898dcd/gardan4/quillwork"
---

# Quillwork

Quillwork lets an AI agent edit Word documents and existing PowerPoint decks while preserving their design.

The agent reads a compact text view of the document, where every paragraph, table row and
comment has a short anchor. It sends small JSON edits against those anchors. Quillwork writes
each edit into the original `.docx` as a real Word tracked change. Every part of the file the
edit did not need to touch stays byte for byte as it was, so letterheads, numbering, styles,
fields, images and existing tracked changes all survive. A person then opens the file in Word
and accepts or rejects the agent's changes like any colleague's.

Status: **alpha (0.0.x)**. The API, the op language and the sidecar format can still change
between releases. See [Limitations](#limitations).

**PowerPoint support (unreleased):** `quillwork.Presentation` fills an existing branded `.pptx`
template or changes its text, tables and speaker notes. It preserves the deck's assets and
formatting and returns a source/candidate report for application-owned review. See the
[PowerPoint guide](https://github.com/gardan4/quillwork/blob/HEAD/docs/POWERPOINT.md); the Word tracked-change API below is…
