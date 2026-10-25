---
repo: "iamngoni/kanso"
name: "kanso"
description: "Markdown note-taking app"
readmeQualityOk: true
url: "https://github.com/iamngoni/kanso"
homepage: "https://kansoapp.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["markdown", "markdown-editor", "markdown-to-pdf", "note-taking", "notes", "notes-app"]
stars: 5
forks: 1
openIssues: 9
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-28T18:46:15Z"
lastCommitAt: "2026-10-25T08:41:08Z"
lastReleaseAt: "2026-10-22T16:49:18Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 54
maintainers: ["iamngoni"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1252665304/4703c6e7-993d-4ab8-8f6a-d6fdb4258c22"
---

# Kanso

A local-first Markdown notes app for macOS, with Windows and Linux builds, built with [GPUI](https://www.gpui.rs) through
[gpui-kit](https://github.com/longbridge/gpui-kit).

[kansoapp.app](https://kansoapp.app) has downloads and a tour; the website's source is in [`site/`](https://github.com/iamngoni/kanso/blob/HEAD/site).

**Writing**
- Brackets, quotes and Markdown marks pair as you type; lists and tasks continue on Return and
  indent with Tab; tables line up as you edit them.
- Smart paste turns a pasted link into Markdown and keeps code as code; ⇧⌘V pastes plain text.
- Typewriter scrolling, a word goal per note, focus mode, and optional Vim keys.
- Voice input: press the mic, speak, and the words go in at the cursor as you say them. It runs on your device
  with NVIDIA's Parakeet model (25 languages, downloaded once on first use), or with your
  system's own dictation.

**Linking**
- `[[Wiki-links]]` with autocomplete, backlinks with their context, unlinked mentions, and an
  outline of the note's headings beside the editor.
- ⌘P finds notes by title and by heading.

**Capture**
- Today's note (⌘D) in a Journal notebook, and templates with `{{date}}`, `{{time}}`…
