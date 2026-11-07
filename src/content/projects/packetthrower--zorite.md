---
repo: "packetThrower/zorite"
name: "zorite"
description: "Local-first, Logseq-style daily journal. Rust + GPUI + SQLite, with a custom gpui-markdown renderer and PDF viewer, custom gpui-whiteboard, (clickable wiki-links, tags, slash menu)."
readmeQualityOk: true
url: "https://github.com/packetThrower/zorite"
homepage: "https://packetthrower.github.io/zorite/"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["gpui", "logseq", "markdown", "notes-app", "pdf-viewer", "rust", "rust-lang", "whiteboard", "journal", "multiplatform"]
stars: 84
forks: 5
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-05T03:40:55Z"
lastCommitAt: "2026-11-07T22:51:29Z"
lastReleaseAt: "2026-06-20T16:24:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 35
maintainers: ["packetThrower", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a57d38f7d53a731e737660d577319f4b391a9e491b30c2253953e1d8dd2f1752/packetThrower/zorite"
fundingLinks: ["GITHUB:https://github.com/packetThrower", "PATREON:https://patreon.com/packetthrower", "LIBERAPAY:https://liberapay.com/packetthrower", "BUY_ME_A_COFFEE:https://buymeacoffee.com/packetthrower"]
discussionCount: 1
---

# Zorite

## Minimum OS versions

**macOS** (Apple Silicon and Intel)

**Windows** (x64 and ARM64)

**Linux** (amd64 and arm64)

Linux additionally needs a Vulkan-capable GPU with current Mesa drivers.

Zorite is a daily-journal note app for the desktop, organized like Logseq but
edited like an ordinary document rather than an outliner. Notes are Markdown in
a local SQLite database. Pages link to each other with `[[wiki-links]]`, and
the app also handles PDFs (viewing, annotating, form filling), images,
whiteboards, and LaTeX math. There is no cloud and no account; everything stays
on your machine. Written in Rust with [GPUI](https://www.gpui.rs/) (Zed's UI
framework) through [GPUI Kit](https://gpui-kit.com).

Developed in close collaboration with Claude (Anthropic).

📝 [**Changelog**](https://github.com/packetThrower/zorite/blob/HEAD/CHANGELOG.md) · 🗺️ [**Roadmap**](https://github.com/packetThrower/zorite/blob/HEAD/TODO.md)

## Features

### Writing

- The journal is a feed of days, newest first. Everything is plain text, and
  clicking anywhere places the caret. Markdown renders as you type; the markers
  reappear when the caret is on them.
- CommonMark and GFM, plus a few…
