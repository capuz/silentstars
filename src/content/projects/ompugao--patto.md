---
repo: "ompugao/patto"
name: "patto"
description: "🪽 A simple plain-text format for quick note-taking, outlining, and task management, powered by language server. Alternative to Workflowy with your favorite text editor."
readmeQualityOk: true
url: "https://github.com/ompugao/patto"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 6
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-09-06T01:37:20Z"
lastCommitAt: "2026-08-21T04:10:57Z"
lastReleaseAt: "2025-06-23T07:36:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 77
maintainers: ["ompugao", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d81e78b009eec21c350470f520bd06b3a4b24e3ab79686ed2be51500e7e58151/ompugao/patto"
---

# Patto Note 🪽

A simple plain-text format for note-taking, outlining, and task management. Inspired by [Cosense/Scrapbox](https://scrapbox.io), powered by LSP.

## What is Patto?

A **line-oriented** text format where newlines create lines and tabs create nesting. Perfect for:
- 📝 Quick outlining and note-taking
- ✅ Task management with deadlines
- 🔗 [Zettelkasten](https://zettelkasten.de/introduction/)-style linked notes

## Features

- Wiki-style links `[note name]` with backlinks and 2-hop visualization
- Tasks with deadlines: `!2024-12-31` or `{@task due=2024-12-31}` (sorted by Overdue, Today, This Week)
- Rich task metadata: `scheduled`, `completed_at` with auto-tracking when a task is marked done
- Real-time preview and LSP-powered autocomplete
- Works with Vim, Neovim, VS Code

## Syntax

### Basic
```txt
Plain text
	Tab to nest
		Tab twice for deeper nesting
    Anchored text  #anchor

[* bold]  [/ italic]  [` code `]
```

### Links & Tasks
```txt
[other note]                     Link to note
[note#anchor]                    Link to the anchored line in note
[https://example.com Title]     External link

!2024-12-31    Todo with deadline (shorthand)
*2024-12-31    In…
